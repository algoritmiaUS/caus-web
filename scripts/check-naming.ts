type Problem = { file: string; rule: string; message: string };
type CustomRule = { name: string; prefix: string; pattern: RegExp; message: string };

// Most changes should happen here, not in the code below.
const CONFIG = {
  checks: {
    ascii: true,
    lowercase: true,
    kebab: true,
    numericSuffix: true,
    imageFormat: true,
    newsFolder: true,
    custom: true,
  },

  strictRoots: ['content/', 'data/', 'assets/', 'static/', 'config/'],
  ignorePrefixes: ['layouts/', 'archetypes/', '.github/', 'scripts/', 'node_modules/', '.git/'],
  ignoreNames: new Set([
    'README.md',
    'LICENSE',
    'CONTRIBUTE.md',
    '.gitignore',
    '.prettierrc',
    '.prettierignore',
  ]),

  // Hugo names that intentionally use an underscore.
  hugoNames: new Set(['_index.md', '_default', '_partials', '_shortcodes']),

  imageRoots: ['assets/images/', 'static/images/', 'content/news/'],
  allowedImageExtensions: new Set(['.webp', '.svg']),
  forbiddenImageExtensions: /\.(?:jpe?g|png|gif|bmp|tiff|ico)$/i,

  numericSuffixExceptions: new Set([]),

  newsFolderPattern: /^\d{4}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/,

  // Optional strict rules. Add/delete a row when you want extra policy.
  // { name: "data", prefix: "data/", pattern: /^[a-z0-9-]+\.yaml$/, message: "data files must be kebab-case .yaml" }
  customRules: [] as CustomRule[],
};

const under = (file: string, roots: string[]) => roots.some((root) => file.startsWith(root));
const nameOf = (file: string) => file.split('/').at(-1) || '';
const isHugoName = (name: string) =>
  CONFIG.hugoNames.has(name) || /^_index(?:\.[a-z0-9-]+)?\.md$/.test(name);
const extOf = (name: string) =>
  name.includes('.') ? name.slice(name.lastIndexOf('.')).toLowerCase() : '';

function gitFiles(): string[] {
  const git = Bun.spawnSync(['git', 'ls-files', '-co', '--exclude-standard', '-z']);
  if (git.exitCode !== 0) throw new Error(git.stderr.toString().trim() || 'git ls-files failed');
  return git.stdout.toString().split('\0').filter(Boolean);
}

function checkFile(file: string): Problem[] {
  const problems: Problem[] = [];
  const name = nameOf(file);
  const ext = extOf(name);
  const strict = under(file, CONFIG.strictRoots);

  const add = (rule: string, message: string) => problems.push({ file, rule, message });

  const forbiddenImage = CONFIG.forbiddenImageExtensions.test(file);
  if (CONFIG.checks.imageFormat && forbiddenImage) {
    add('image-format', 'only .webp and .svg images are allowed; run: bun convert');
  }

  if (CONFIG.ignoreNames.has(name) || under(file, CONFIG.ignorePrefixes)) return problems;

  if (CONFIG.checks.ascii && /[^\x00-\x7F]/.test(file)) {
    add('ascii', 'use ASCII only (no ñ, accents, etc.)');
  }

  if (CONFIG.checks.lowercase && /[A-Z]/.test(file)) {
    add('lowercase', 'use lowercase names');
  }

  if (CONFIG.checks.kebab && strict) {
    const parts = file.split('/');
    const dirShape = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
    const fileShape = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:\.[A-Za-z0-9]+)*$/;

    const badPart = parts.find((part, i) => {
      if (isHugoName(part)) return false;
      return !(i === parts.length - 1 ? fileShape : dirShape).test(part);
    });

    if (badPart) add('kebab', `use kebab-case; invalid part: ${badPart}`);
  }

  if (
    CONFIG.checks.numericSuffix &&
    strict &&
    !CONFIG.numericSuffixExceptions.has(name) &&
    /[a-z]\d+\.[a-z0-9]+$/i.test(name) &&
    !/-\d+\.[a-z0-9]+$/i.test(name)
  ) {
    add('numeric-suffix', "put a '-' before the number, for example image-2.webp");
  }

  if (CONFIG.checks.imageFormat && under(file, CONFIG.imageRoots)) {
    const markdownBundle = name === 'index.md' || name === '_index.md';
    if (!markdownBundle && ext && !forbiddenImage && !CONFIG.allowedImageExtensions.has(ext)) {
      add(
        'image-format',
        `only ${[...CONFIG.allowedImageExtensions].join('/')} allowed here (found ${ext})`,
      );
    }
  }

  if (CONFIG.checks.newsFolder && file.startsWith('content/news/')) {
    const folder = file.split('/')[2];
    if (folder && folder !== '_index.md' && !CONFIG.newsFolderPattern.test(folder)) {
      add('news-folder', `expected yyyy-mm-slug, got ${folder}`);
    }
  }

  if (CONFIG.checks.custom) {
    for (const rule of CONFIG.customRules) {
      if (file.startsWith(rule.prefix) && !rule.pattern.test(name)) add(rule.name, rule.message);
    }
  }

  return problems;
}

function gh(value: string): string {
  return value
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A')
    .replace(/:/g, '%3A')
    .replace(/,/g, '%2C');
}

try {
  const files = [...new Set(gitFiles())];
  const problems = files.flatMap(checkFile);

  if (!problems.length) {
    console.log(`✓ Naming check passed (${files.length} files)`);
    process.exit(0);
  }

  for (const problem of problems) {
    const message = `${problem.rule}: ${problem.message}`;
    console.log(`::error file=${gh(problem.file)}::${gh(message)}`);
    console.error(`✗ ${problem.file}: ${message}`);
  }

  console.error(`\n${problems.length} naming problem(s)`);
  process.exit(1);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(2);
}

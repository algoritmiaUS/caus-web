type Problem = { file: string; rule: string; message: string };

const CONFIG = {
  file: 'data/members.yaml',
  countSection: 'members',
  groupSize: 5,
  imageRoot: 'static',
  allowedImageExtensions: new Set(['.webp']),
};

function gh(value: string): string {
  return value
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A')
    .replace(/:/g, '%3A')
    .replace(/,/g, '%2C');
}

const extOf = (path: string) =>
  path.includes('.') ? path.slice(path.lastIndexOf('.')).toLowerCase() : '';

try {
  const text = await Bun.file(CONFIG.file).text();
  const data = Bun.YAML.parse(text) as Record<string, unknown> | null;

  if (!data || typeof data !== 'object') {
    console.error(`✗ ${CONFIG.file}: expected a YAML mapping of member sections`);
    process.exit(2);
  }

  const problems: Problem[] = [];
  const add = (rule: string, message: string) =>
    problems.push({ file: CONFIG.file, rule, message });

  const usedImages = new Map<string, string>();

  for (const [section, value] of Object.entries(data)) {
    if (!Array.isArray(value)) {
      add('member-section', `"${section}" is not a list`);
      continue;
    }

    for (const [index, entry] of value.entries()) {
      const who =
        entry && typeof entry === 'object' && typeof entry.name === 'string'
          ? entry.name
          : `${section}[${index}]`;
      const image = entry && typeof entry === 'object' ? entry.image : undefined;

      if (typeof image !== 'string' || !image.trim()) {
        add('image-missing', `${who}: no image path`);
        continue;
      }

      if (!image.startsWith('/') || image.includes('..')) {
        add('image-path', `${who}: image must be a site path starting with "/" (found ${image})`);
        continue;
      }

      const ext = extOf(image);
      if (!CONFIG.allowedImageExtensions.has(ext)) {
        add(
          'image-format',
          `${who}: only ${[...CONFIG.allowedImageExtensions].join('/')} images are allowed (found ${image})`,
        );
      }

      if (!(await Bun.file(CONFIG.imageRoot + image).exists())) {
        add('image-not-found', `${who}: ${image} does not exist under ${CONFIG.imageRoot}/`);
      }

      const previous = usedImages.get(image);
      if (previous) {
        add('image-duplicate', `${who}: ${image} is also used by ${previous}`);
      } else {
        usedImages.set(image, who);
      }
    }
  }

  const countList = data[CONFIG.countSection];
  const count = Array.isArray(countList) ? countList.length : 0;
  if (!Array.isArray(countList)) {
    add('member-section', `"${CONFIG.countSection}" is missing or is not a list`);
  } else {
    const remainder = count % CONFIG.groupSize;
    if (remainder !== 0) {
      const missing = CONFIG.groupSize - remainder;
      add(
        'members-mod',
        `${count} ${CONFIG.countSection} is not a multiple of ${CONFIG.groupSize} ` +
          `(${count} % ${CONFIG.groupSize} = ${remainder}); ` +
          `add ${missing} more or remove ${remainder}`,
      );
    }
  }

  if (!problems.length) {
    console.log(
      `✓ Members check passed (${count} ${CONFIG.countSection}, ` +
        `${count} % ${CONFIG.groupSize} = 0, ${usedImages.size} images)`,
    );
    process.exit(0);
  }

  for (const problem of problems) {
    const message = `${problem.rule}: ${problem.message}`;
    console.log(`::error file=${gh(problem.file)}::${gh(message)}`);
    console.error(`✗ ${problem.file}: ${message}`);
  }

  console.error(`\n${problems.length} members problem(s)`);
  process.exit(1);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(2);
}

export {};

const glob = new Bun.Glob('**/*.{png,jpg,jpeg,PNG,JPG,JPEG}');

for await (const path of glob.scan('.')) {
  const outPath = path.replace(/\.[^.]+$/, '.webp');
  const original = Bun.file(path);

  console.log(`Converting ${path} -> ${outPath}`);

  await original
    .image()
    .resize(1500, 1500, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .write(outPath);

  if (path !== outPath) {
    await original.delete();
  }
}

console.log('Done!');

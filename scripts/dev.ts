// Lanza en paralelo el watcher de Tailwind y hugo server,
// y propaga Ctrl+C a ambos procesos hijos.
const procs: Bun.Subprocess[] = [
  Bun.spawn(['bun', 'run', 'css:watch'], { stdout: 'inherit', stderr: 'inherit' }),
  Bun.spawn(['bunx', 'hugo', 'server'], { stdout: 'inherit', stderr: 'inherit' }),
];

function killAll() {
  for (const p of procs) p.kill();
}

process.on('SIGINT', () => {
  killAll();
  process.exit(0);
});

process.on('SIGTERM', () => {
  killAll();
  process.exit(0);
});

for (const p of procs) await p.exited;

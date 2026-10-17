import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const root = new URL('../', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('asset-source/manifest.json', root), 'utf8'));
await mkdir(new URL('public/assets/', root), { recursive: true });
for (const { source, target, sha256 } of manifest) {
  if (!/^[a-zA-Z0-9.-]+$/.test(source) || !/^[a-zA-Z0-9.-]+$/.test(target)) throw Error('Unsafe asset path');
  const buffer = Buffer.from(await readFile(new URL(`asset-source/${source}`, root), 'utf8'), 'base64');
  if (createHash('sha256').update(buffer).digest('hex') !== sha256) throw Error(`Invalid asset checksum: ${target}`);
  await writeFile(new URL(`public/assets/${target}`, root), buffer);
}
console.log(`Verified and restored ${manifest.length} local image/font assets.`);

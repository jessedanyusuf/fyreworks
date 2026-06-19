import { readdir, stat } from "node:fs/promises";
import { extname, join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, "..", "client", "src", "assets");

// Only convert images above this size (bytes)
const MIN_BYTES = 120 * 1024;
// Max width for web delivery
const MAX_WIDTH = 1600;

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir);
  const files: string[] = [];
  for (const e of entries) {
    const p = join(dir, e);
    const st = await stat(p);
    if (st.isDirectory()) files.push(...(await walk(p)));
    else files.push(p);
  }
  return files;
}

async function main() {
  const files = await walk(ASSETS);
  let converted = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") continue;
    const st = await stat(file);
    if (st.size < MIN_BYTES) continue;

    const outPath = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    const base = basename(file);

    try {
      await sharp(file)
        .resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
          fit: "inside",
        })
        .webp({ quality: 82, effort: 5 })
        .toFile(outPath);
      const newSize = (await stat(outPath)).size;
      const savings = (((st.size - newSize) / st.size) * 100).toFixed(1);
      console.log(
        `  ${base} — ${(st.size / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`
      );
      converted++;
    } catch (err) {
      console.error(`  ${base} — conversion failed`, err);
    }
  }

  console.log(`\n[optimize-images] Converted ${converted} assets to WebP.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

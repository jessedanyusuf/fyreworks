import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { extname, join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, "..", "client", "src", "assets");

// Cap the longest edge — these are grid covers / marketing images, never shown larger.
const MAX_EDGE = 1366;

async function main() {
  const entries = await readdir(ASSETS);
  let before = 0;
  let after = 0;

  for (const name of entries) {
    const ext = extname(name).toLowerCase();
    if (![".webp", ".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const file = join(ASSETS, name);
    const st = await stat(file);
    const input = await readFile(file); // read fully so we can overwrite in place

    const meta = await sharp(input).metadata();
    const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
    let pipe = sharp(input);
    if (longest > MAX_EDGE) {
      pipe = pipe.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true });
    }

    if (ext === ".webp") {
      pipe = pipe.webp({ quality: 76, effort: 6 });
    } else if (ext === ".png") {
      // Keep transparency; palette-quantize for big savings on flat graphics.
      pipe = pipe.png({ compressionLevel: 9, palette: true, quality: 90, effort: 8 });
    } else {
      pipe = pipe.jpeg({ quality: 78, mozjpeg: true });
    }

    const out = await pipe.toBuffer();
    // Only overwrite if we actually saved space.
    if (out.length < st.size) {
      await writeFile(file, out);
      before += st.size;
      after += out.length;
      const pct = (((st.size - out.length) / st.size) * 100).toFixed(0);
      console.log(`  ${name.padEnd(34)} ${(st.size / 1024).toFixed(0)}KB → ${(out.length / 1024).toFixed(0)}KB  (-${pct}%)`);
    } else {
      console.log(`  ${name.padEnd(34)} ${(st.size / 1024).toFixed(0)}KB  (already optimal, skipped)`);
    }
  }

  console.log(`\n[compress-all] ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB across rewritten files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

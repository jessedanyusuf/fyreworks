import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const ROOT = process.argv[2];
const OUT = process.argv[3];

// Pull the F-mark path straight out of favicon.svg so the OG card can never
// drift from the mark used everywhere else.
const favicon = readFileSync(`${ROOT}/client/public/favicon.svg`, "utf8");
const d = favicon.match(/ d="([^"]+)"/)[1];

const W = 1200, H = 630;

// Mark: source viewBox is 512x512. Draw it at 132px, optically centred as a
// block with the wordmark beneath it.
const MARK = 118;
const markX = (W - MARK) / 2;
const markY = 176;
const s = MARK / 512;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#000000"/>
  <g transform="translate(${markX} ${markY}) scale(${s})">
    <path d="${d}" fill="#ffffff" fill-rule="evenodd"/>
  </g>
  <!-- Nudged left by half the tracking: letter-spacing also applies after the
       final S, so text-anchor="middle" centres a box with a phantom trailing
       gap and the wordmark sits visibly right of centre. -->
  <text x="${W / 2 - 6.5}" y="386"
        font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="76" font-weight="800" letter-spacing="13"
        fill="#ffffff" text-anchor="middle">FYREWORKS</text>
  <text x="${W / 2}" y="446"
        font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="27" font-weight="400" letter-spacing="0.4"
        fill="#8a8a8a" text-anchor="middle">The creative studio for visionaries.</text>
</svg>`;

// flatten onto black: transparency is what makes the current card render as a
// pale blob on whatever background the unfurler composites against.
await sharp(Buffer.from(svg))
  .flatten({ background: "#000000" })
  .png({ compressionLevel: 9, palette: false })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(JSON.stringify({ width: meta.width, height: meta.height, hasAlpha: meta.hasAlpha, channels: meta.channels }));

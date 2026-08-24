import sharp from "sharp";

/**
 * Moon cursor.
 *
 * Lit from the upper left with a falloff into shadow, which is what stops a
 * pale disc reading as a plain dot at 32px. Craters are laid in at low opacity
 * along the lit-to-dark axis — at this size they register as surface, not as
 * shapes, and any more contrast turns them into noise.
 *
 * The dark rim is doing real work: the site runs black, but the hero carries a
 * bright light shaft and a white spacesuit, and an unstroked moon disappears
 * over its own hero.
 */
const moon = ({ glow }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="surface" cx="34%" cy="29%" r="78%">
      <stop offset="0%"   stop-color="#ffffff"/>
      <stop offset="46%"  stop-color="#f0eee9"/>
      <stop offset="78%"  stop-color="#cbc7c0"/>
      <stop offset="100%" stop-color="#9b978f"/>
    </radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="55%"  stop-color="#ffffff" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  ${glow ? `<circle cx="16" cy="16" r="15.6" fill="url(#halo)"/>` : ``}

  <circle cx="16" cy="16" r="11.5"
          fill="url(#surface)"
          stroke="rgba(0,0,0,0.58)" stroke-width="1.4"/>

  <g fill="#3a3630">
    <circle cx="12.1" cy="12.3" r="2.5" opacity="0.13"/>
    <circle cx="19.6" cy="18.9" r="3.0" opacity="0.12"/>
    <circle cx="13.2" cy="20.3" r="1.7" opacity="0.14"/>
    <circle cx="20.8" cy="11.7" r="1.2" opacity="0.10"/>
    <circle cx="16.4" cy="15.6" r="1.0" opacity="0.09"/>
  </g>
</svg>`;

for (const [name, opts] of [["cursor-moon", { glow: false }], ["cursor-moon-go", { glow: true }]]) {
  for (const [suffix, size] of [["", 32], ["@2x", 64]]) {
    await sharp(Buffer.from(moon(opts)))
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(`client/public/assets/${name}${suffix}.png`);
  }
}
console.log("moon cursors written");

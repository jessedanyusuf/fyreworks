/**
 * The warm horizon behind the footer.
 *
 * Built from three stacked layers rather than an image, so it stays sharp at
 * any width and costs nothing to download:
 *
 *   bloom    a soft warm wash rising to the horizon line
 *   streaks  light trails that drift sideways along it
 *   body     a very large black circle whose crown *is* the horizon
 *
 * The body sits in front and is opaque, so it clips the streaks along its
 * curve — that occlusion is what gives the trails their arc. Its outer
 * box-shadow paints the bright rim and the glow, which fall outside the
 * element and so survive on top. Everything keys off --crown, the height of
 * the horizon within the frame, so the three layers cannot drift apart.
 *
 * The circle is enormous on purpose: across the viewport only its very top
 * shows, which reads as a planet's limb instead of a arc drawn on the page.
 */
export default function FooterCosmos() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[230px] md:h-[330px] overflow-hidden [--crown:34%]"
      style={{
        // Fades the whole horizon out toward the edges, so the rim does not run
        // hard into the viewport sides.
        maskImage:
          "linear-gradient(to right, transparent, #000 22%, #000 78%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 22%, #000 78%, transparent)",
      }}
    >
      {/* Bloom — ends exactly at the horizon, brightest where it meets it. */}
      <div
        className="absolute inset-x-0 top-0 h-[var(--crown)] animate-ember-breathe"
        style={{
          background:
            "radial-gradient(ellipse 52% 120% at 50% 100%, rgba(255,126,42,0.20), rgba(255,88,20,0.07) 46%, transparent 72%)",
        }}
      />

      {/* Streaks — run past the horizon; the body clips them to its curve. */}
      <div className="absolute inset-x-0 top-[4%] h-[62%] overflow-hidden">
        <div
          className="absolute inset-y-0 -left-[420px] right-[-420px] animate-ember-drift"
          style={{
            // Bands run along the horizon, not across it: in CSS the bands sit
            // perpendicular to the gradient angle, so a near-0deg axis gives
            // near-horizontal trails. The 8deg tilt is what makes the sideways
            // drift legible — dead-flat stripes sliding sideways look static.
            background:
              "repeating-linear-gradient(8deg, transparent 0 15px, rgba(255,228,196,0.55) 15px 16.5px, transparent 16.5px 27px, rgba(255,164,82,0.34) 27px 28px, transparent 28px 48px)",
            filter: "blur(2.5px)",
            // Peaks on the horizon, not at the foot of the frame — the frame
            // runs past the crown so the body can clip it, so anchoring the
            // mask at 100% would bury its brightest part behind the body.
            maskImage:
              "radial-gradient(ellipse 40% 62% at 50% 48%, #000 14%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 40% 62% at 50% 48%, #000 14%, transparent 72%)",
          }}
        />
      </div>

      {/* Body — opaque, so it both hides the layers below the horizon and casts
          the rim. Width is in vw so the curvature holds at every breakpoint. */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[var(--crown)] w-[420vw] h-[420vw] rounded-[50%] bg-black"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,231,203,0.34), 0 -2px 16px 1px rgba(255,172,96,0.26), 0 -6px 64px 12px rgba(255,116,36,0.16)",
        }}
      />
    </div>
  );
}

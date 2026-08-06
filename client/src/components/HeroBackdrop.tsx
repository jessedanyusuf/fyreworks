import { motion, useTransform, useReducedMotion } from "framer-motion";
import { useWindowScrollY } from "@/components/motion/useScrollOffset";

/**
 * Full-bleed hero backdrop.
 *
 * The image is served from /public rather than imported, so a missing file
 * degrades to the base background instead of breaking the build. It is
 * oversized vertically to leave room for the scroll drift, and carries a
 * gradient scrim so display type stays legible over the brightest band.
 */
export default function HeroBackdrop() {
  const reduce = useReducedMotion();
  const scrollY = useWindowScrollY();
  const y = useTransform(scrollY, [0, 900], [0, 120]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-black">
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-x-0 -top-[6%] h-[112%] will-change-transform"
      >
        {/* "Distant Astronaut in Stippled Monochrome".
            Served from /public with a small variant for narrow screens — the
            stipple texture resists compression, so the full-width file is
            heavy and worth avoiding on phones. */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/hero-gradient-sm.webp"
            type="image/webp"
          />
          {/* The subject sits ~70% across a 1.78-ratio frame. Centre-cropping
              that into a tall phone viewport cuts it out completely, so the
              crop is pulled right on narrow screens. */}
          <img
            src="/hero-gradient.webp"
            alt=""
            // React 18 passes this through only in lowercase.
            {...{ fetchpriority: "high" }}
            decoding="async"
            className="w-full h-full object-cover object-[78%_50%] md:object-center"
            onError={(e) => {
              // No image yet — fall back to the plain black hero.
              e.currentTarget.style.display = "none";
            }}
          />
        </picture>
      </motion.div>

      {/* The light shaft runs from the top-right down to centre, so the two
          places text sits are the two places that need protecting: the navbar
          crosses the brightest part of the frame, and the headline block sits
          over the mid-tones at the foot. Both scrims are directional so the
          shaft itself stays intact. */}
      <div className="absolute inset-x-0 top-0 h-28 md:h-32 bg-gradient-to-b from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/45 to-transparent" />
    </div>
  );
}

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
          <img
            src="/hero-gradient.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => {
              // No image yet — fall back to the plain black hero.
              e.currentTarget.style.display = "none";
            }}
          />
        </picture>
      </motion.div>

      {/* Scrims are local rather than a full-cover wash, so the image keeps its
          midtones. Bottom: contrast for the headline. Top: legibility for the
          transparent navbar. */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/55 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
    </div>
  );
}

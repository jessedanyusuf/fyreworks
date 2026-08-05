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
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[72%_50%] md:object-center"
            onError={(e) => {
              // No image yet — fall back to the plain black hero.
              e.currentTarget.style.display = "none";
            }}
          />
        </picture>
      </motion.div>

      {/* The artwork is already almost entirely black, so the scrims are kept
          deliberately light — anything heavier erases the glow and the figure,
          which are the only things in the frame. Bottom seats the headline;
          top just takes the edge off behind the navbar. */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
    </div>
  );
}

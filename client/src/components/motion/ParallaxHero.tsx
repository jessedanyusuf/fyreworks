import { motion, useTransform, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { useWindowScrollY } from "./useScrollOffset";

/**
 * Hero treatment for the top of a page: as you scroll away the hero drifts
 * down more slowly than the page and fades, so the next section reads as
 * passing in front of it.
 */
export default function ParallaxHero({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const scrollY = useWindowScrollY();

  const y = useTransform(scrollY, [0, 800], [0, 140]);
  const opacity = useTransform(scrollY, [0, 520], [1, 0]);

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div style={{ y, opacity }} className="will-change-transform">
      {children}
    </motion.div>
  );
}

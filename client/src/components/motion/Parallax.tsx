import { motion, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useElementScrollProgress } from "./useScrollOffset";

interface ParallaxProps {
  children: ReactNode;
  /**
   * Drift in px across the element's full travel through the viewport.
   * Positive = starts low and rises, i.e. moves slower than the page.
   */
  distance?: number;
  className?: string;
}

/**
 * Scroll-linked vertical drift. Transform-only, so it stays on the compositor.
 * Disabled entirely under prefers-reduced-motion.
 */
export default function Parallax({ children, distance = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const progress = useElementScrollProgress(ref);
  const y = useTransform(progress, [0, 1], [distance, -distance]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

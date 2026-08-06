import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface RevealLineProps {
  children: ReactNode;
  /** Stagger offset in seconds. */
  delay?: number;
  /** "load" animates immediately on mount; "scroll" waits until in view. */
  trigger?: "load" | "scroll";
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.9;

const VARIANTS = {
  // Must clear MASK_PAD below, or the line is already peeking before it rises.
  hidden: { y: "125%" },
  visible: { y: "0%" },
};

/**
 * Depth of the mask below the line box. Display type here runs at leading ~1.04,
 * so descenders fall roughly 0.2em past the box — this has to exceed that or
 * glyphs like the g in "something" get their tails shaved off.
 */
const MASK_PAD = "pb-[0.24em] -mb-[0.24em]";

/**
 * A line of display type that rises out of a mask.
 *
 * The *outer* mask is the observed element — the inner span starts translated
 * outside the mask, so observing it directly would never intersect the
 * viewport and the reveal would never fire. The outer element drives the inner
 * one through variant propagation instead.
 *
 * The mask carries a little vertical padding so descenders aren't clipped,
 * cancelled by an equal negative margin so layout is unchanged.
 */
export default function RevealLine({
  children,
  delay = 0,
  trigger = "scroll",
  className,
}: RevealLineProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  const outerProps =
    trigger === "load"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "0px 0px -10% 0px" },
        };

  return (
    <motion.span
      {...outerProps}
      className={`block overflow-hidden ${MASK_PAD} ${className ?? ""}`}
    >
      <motion.span
        className="block will-change-transform"
        variants={VARIANTS}
        transition={{ duration: DURATION, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

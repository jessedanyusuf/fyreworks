import { motion, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useElementScrollProgress } from "./useScrollOffset";

/** Where in the element's pass through the viewport the reveal runs. */
const IN = 0.16;
const OUT = 0.44;

/**
 * A heading that descends into place out of a mask as it scrolls into view —
 * the counterpart to RevealLine, which rises from below.
 *
 * Driven by scroll position rather than fired once on entry, so it runs
 * backwards when you scroll back up instead of staying put after playing.
 *
 * Starts at -115% rather than -100%: the mask carries descender padding, and at
 * exactly -100% the bottom of the waiting line shows inside it.
 *
 * That padding is absolute, not em-based. An em value here resolves against the
 * wrapper's own font-size — the inherited 16px, not the 72px heading inside it —
 * which quietly gives ~3px of clearance instead of ~15px, and clips the first
 * descender that comes along. 20px covers a descender up to roughly 95px.
 */
export default function RevealDown({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const progress = useElementScrollProgress(ref);
  const y = useTransform(progress, [IN, OUT], ["-115%", "0%"]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`overflow-hidden pb-5 -mb-5 ${className ?? ""}`}
    >
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

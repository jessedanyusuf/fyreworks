import { useEffect } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Tracks window scroll into a MotionValue.
 *
 * Written straight from the scroll handler rather than deferred to
 * requestAnimationFrame: scroll events are already throttled to the frame rate,
 * and depending on rAF means the value silently stops updating whenever the
 * page is in a background/hidden tab (where rAF is throttled to ~0Hz).
 */
export function useWindowScrollY(): MotionValue<number> {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const update = () => scrollY.set(window.scrollY);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollY]);

  return scrollY;
}

/**
 * Progress of an element through the viewport, 0 → 1.
 * 0 when its top edge first enters from the bottom, 1 when its bottom edge
 * leaves the top.
 */
export function useElementScrollProgress(
  ref: React.RefObject<HTMLElement>
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Distance travelled from "just below the fold" to "just past the top".
      const travel = vh + rect.height;
      const travelled = vh - rect.top;
      progress.set(Math.min(1, Math.max(0, travelled / travel)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, progress]);

  return progress;
}

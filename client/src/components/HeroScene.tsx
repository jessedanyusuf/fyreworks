import { useEffect, useRef, type ReactNode } from "react";
import HeroBackdrop from "./HeroBackdrop";

/** Fade band for the closing statement, in hero-progress units. */
const COPY_IN = 0.62;
const COPY_FULL = 0.86;

/**
 * The hero, given a scroll runway.
 *
 * The section is taller than the viewport and its contents are sticky, so the
 * hero holds still while the page scrolls past it. That surplus height is what
 * the astronaut clip is scrubbed against — without it there is nothing to scrub
 * along, since the hero would leave the screen almost immediately.
 *
 * Two pieces of copy trade places across the runway: the headline fades out
 * early (handled by ParallaxHero around the children), and the closing
 * statement fades in over the last third, so the arrival has something to land
 * on instead of ending on an empty frame.
 *
 * Progress is written to refs and straight onto style rather than into state:
 * it changes every scroll frame and nothing here needs to re-render for it.
 */
export default function HeroScene({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const endCopyRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const travel = el.offsetHeight - window.innerHeight;
      const p =
        travel <= 0
          ? 0
          : Math.min(1, Math.max(0, -el.getBoundingClientRect().top / travel));
      progress.current = p;

      const copy = endCopyRef.current;
      if (copy) {
        const t = Math.min(1, Math.max(0, (p - COPY_IN) / (COPY_FULL - COPY_IN)));
        copy.style.opacity = String(t);
        // Rises a little as it resolves, so it arrives rather than just appears.
        copy.style.transform = `translate3d(0, ${(1 - t) * 24}px, 0)`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[220vh] md:h-[260vh] -mt-16 md:-mt-20">
      <div className="sticky top-0 h-[100svh] flex flex-col justify-end overflow-hidden pt-16 md:pt-20">
        <HeroBackdrop progressRef={progress} />
        {children}

        <div
          ref={endCopyRef}
          className="absolute inset-x-0 bottom-0 px-6 lg:px-12 pb-12 md:pb-16 opacity-0 will-change-transform"
        >
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-display text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.02em] font-bold">
              Helping visionaries
              <br />
              build brands
              <br />
              that matter.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

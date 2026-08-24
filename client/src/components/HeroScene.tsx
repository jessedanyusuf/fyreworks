import { useEffect, useRef, type ReactNode } from "react";
import HeroBackdrop from "./HeroBackdrop";

const CLOSING_LINES = [
  "We help visionaries",
  "turn bold ideas into",
  "brands people believe in.",
] as const;

/**
 * Scroll window each line reveals across, in hero-progress units. They overlap
 * so the lines cascade rather than arriving in three discrete steps.
 */
const LINE_BANDS: readonly (readonly [number, number])[] = [
  [0.56, 0.70],
  [0.64, 0.78],
  [0.72, 0.86],
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
/** Fast off the mark, settling at the end — a line that decelerates into place. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

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
 * statement rises into view over the last third, so the arrival lands on a
 * statement instead of an empty frame.
 *
 * That statement is revealed by scroll position rather than triggered once:
 * each line is driven straight from scroll, so it runs backwards when you
 * scroll back up instead of staying put once played.
 *
 * Progress is written to refs and straight onto style rather than into state —
 * it changes every scroll frame and nothing needs to re-render for it.
 */
export default function HeroScene({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const travel = el.offsetHeight - window.innerHeight;
      const p =
        travel <= 0
          ? 0
          : clamp01(-el.getBoundingClientRect().top / travel);
      progress.current = p;

      for (let i = 0; i < LINE_BANDS.length; i++) {
        const node = lineRefs.current[i];
        if (!node) continue;
        const [from, to] = LINE_BANDS[i];
        const t = easeOut(clamp01((p - from) / (to - from)));
        // Sits below its mask until its band opens. 125% rather than 100% so a
        // line's ascenders stay hidden behind the mask's descender padding.
        node.style.transform = `translate3d(0, ${(1 - t) * 125}%, 0)`;
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

        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-12 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-display text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.02em] font-bold">
              {/* Broken on phrase, not by accident: "bold ideas" and the payoff
                  "brands people believe in" each stay whole, and the lines build
                  rather than stranding a short middle line under a long one. */}
              {CLOSING_LINES.map((line, i) => (
                <span
                  key={line}
                  className="block overflow-hidden pb-[0.24em] -mb-[0.24em]"
                >
                  <span
                    ref={(el) => {
                      lineRefs.current[i] = el;
                    }}
                    className="block will-change-transform"
                    style={{ transform: "translate3d(0, 125%, 0)" }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

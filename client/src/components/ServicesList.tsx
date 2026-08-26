import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/data/services";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * --peek is how much of a row stays visible once the next stacks over it, and
 * --stack-top is where the pile begins, clear of the fixed header. Both are
 * measured rather than picked, and both differ by breakpoint because the word
 * and the header do: the word's ink runs to 61px inside a mobile row and 83px
 * on desktop, and a peek under either slices through the letterforms.
 * They live as CSS variables so one inline calc covers both breakpoints.
 */

/**
 * Capabilities as a numbered index: rule, index number, the word set large and
 * light, and a right-hand column that fills in on hover (tap on touch).
 * The column is always present in the grid so revealing it never shifts the row.
 */
export default function ServicesList() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    /* Rows stack rather than scroll past: each sticks a little lower than the
       one before, so the list piles up under itself as you scroll instead of
       reading as a static column.
       PEEK is what stays visible of each row once the next covers it — set just
       above the cap height of the word, so every stacked service still reads.
       Stacks at every size: seven rows at the mobile peek pile up to ~510px,
       which a phone viewport carries. */
    <ul
      className="w-full [--stack-top:4.5rem] [--peek:66px] md:[--stack-top:5.5rem] md:[--peek:88px]"
      role="list"
    >
      {SERVICES.map((s, i) => {
        const isActive = active === i;
        const handlers = canHover
          ? {
              onMouseEnter: () => setActive(i),
              onMouseLeave: () => setActive((prev) => (prev === i ? null : prev)),
              onFocus: () => setActive(i),
              onBlur: () => setActive((prev) => (prev === i ? null : prev)),
            }
          : {
              onClick: () => setActive(isActive ? null : i),
            };

        return (
          <li
            key={s.word}
            /* Opaque, or the row underneath shows straight through the stack. */
            className="sticky bg-black"
            style={{ top: `calc(var(--stack-top) + ${i} * var(--peek))` }}
          >
            <button
              type="button"
              className="w-full text-left pt-5 pb-12 md:pt-6 md:pb-16 group grid grid-cols-12 gap-x-4 md:gap-x-8 items-start border-t border-white/[0.14] focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              aria-expanded={isActive}
              aria-controls={`service-panel-${i}`}
              {...handlers}
            >
              {/* Index */}
              <span
                className={`col-span-2 md:col-span-1 pt-2 md:pt-4 text-sm md:text-base transition-colors duration-500 ${
                  isActive ? "text-white/70" : "text-white/35"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Capability */}
              <h3
                className={`col-span-10 md:col-span-6 font-display font-medium leading-[0.98] tracking-[-0.02em] text-[10vw] md:text-[5.5vw] lg:text-[4vw] transition-colors duration-500 ease-out ${
                  isActive ? "text-white" : "text-white/80 group-hover:text-white"
                }`}
              >
                {s.word}
              </h3>

              {/* Reserved column — fills on hover.
                  On desktop this contributes no height: the panel mounting must
                  not grow the row, or every service below it shifts down and the
                  list walks away from the cursor. It paints into the row's own
                  bottom padding instead. Mobile taps to toggle, where expanding
                  the row in flow is the expected behaviour. */}
              <div className="col-span-12 md:col-span-5 md:pt-3 md:h-0 md:pointer-events-none">
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`service-panel-${i}`}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={reduce ? undefined : { opacity: 1, y: 0 }}
                      exit={
                        reduce
                          ? undefined
                          : // Leaves faster than it arrives. Rows are tighter than
                            // the panels are tall, so a slow exit leaves the old
                            // panel sitting under the new one as you sweep the list.
                            { opacity: 0, y: 4, transition: { duration: 0.18, ease: EASE } }
                      }
                      transition={{ duration: 0.4, ease: EASE }}
                      className="pt-4 md:pt-0 space-y-3"
                    >
                      <p className="font-display text-base md:text-lg leading-snug tracking-[-0.01em] text-white">
                        {s.outcome}
                      </p>
                      <p className="text-[13px] md:text-sm leading-relaxed text-white/55 max-w-[46ch]">
                        {s.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

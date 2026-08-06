import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/data/services";

const EASE = [0.22, 1, 0.36, 1] as const;

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
    <ul className="w-full" role="list">
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
          <li key={s.word}>
            <button
              type="button"
              className="w-full text-left py-7 md:py-10 group grid grid-cols-12 gap-x-4 md:gap-x-8 items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
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
                /{String(i + 1).padStart(2, "0")}
              </span>

              {/* Capability */}
              <h3
                className={`col-span-10 md:col-span-6 font-display font-normal leading-[0.98] tracking-[-0.02em] text-[10vw] md:text-[5.5vw] lg:text-[4vw] transition-colors duration-500 ease-out ${
                  isActive ? "text-white" : "text-white/80 group-hover:text-white"
                }`}
              >
                {s.word}
              </h3>

              {/* Reserved column — fills on hover */}
              <div className="col-span-12 md:col-span-5 md:pt-3 min-h-0">
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`service-panel-${i}`}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={reduce ? undefined : { opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: 4 }}
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

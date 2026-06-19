import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/data/services";

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
          <li key={s.word} className="border-t border-white/10 first:border-t-0">
            <button
              type="button"
              className="w-full text-left py-6 md:py-10 group"
              aria-expanded={isActive}
              aria-controls={`service-panel-${i}`}
              {...handlers}
            >
              <span
                className={`block font-display font-bold leading-[0.95] tracking-[-0.03em] transition-colors duration-500 ease-out text-[8vw] md:text-[6vw] lg:text-[5vw] ${
                  isActive ? "text-white" : "text-white/25 group-hover:text-white/40"
                }`}
              >
                {s.word}.
              </span>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={`service-panel-${i}`}
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 md:pt-8 grid md:grid-cols-12 gap-x-10 gap-y-4 max-w-[1100px]">
                      <p className="md:col-span-5 font-display text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-[-0.01em] text-white">
                        {s.outcome}
                      </p>
                      <p className="md:col-span-7 text-base md:text-lg font-light leading-relaxed text-white/70 max-w-prose">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

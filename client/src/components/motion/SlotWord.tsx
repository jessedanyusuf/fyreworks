import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const HOLD_MS = 2200;
const EASE = [0.22, 1, 0.36, 1] as const;

interface SlotWordProps {
  words: readonly string[];
  /** Character rendered after the word. */
  trailing?: string;
}

/**
 * Cycles words on a slot-machine roll: the outgoing word travels up out of a
 * mask while the next arrives from below. Width is reserved for the longest
 * entry so the line never reflows mid-roll.
 */
export default function SlotWord({ words, trailing = "" }: SlotWordProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const longest = useMemo(
    () => [...words].sort((a, b) => b.length - a.length)[0],
    [words],
  );

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % words.length), HOLD_MS);
    return () => clearTimeout(t);
  }, [index, reduce, words]);

  if (reduce) {
    return (
      <>
        <span>{words[0]}</span>
        {trailing && <span>{trailing}</span>}
      </>
    );
  }

  return (
    <span className="inline-flex items-baseline whitespace-nowrap">
      {/* Mask. The ghost reserves the widest word so the line holds its width;
          padding keeps descenders from being clipped as the word rolls. */}
      <span className="relative inline-block overflow-hidden pb-[0.14em] -mb-[0.14em]">
        <span className="invisible" aria-hidden="true">
          {longest}
        </span>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={words[index]}
            className="absolute inset-x-0 top-0 block"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: EASE }}
            aria-live="polite"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {trailing && <span aria-hidden="true">{trailing}</span>}
    </span>
  );
}

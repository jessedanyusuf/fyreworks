import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const HOLD_MS = 2200;
const EASE = [0.22, 1, 0.36, 1] as const;
/** Travel per roll. Must exceed the mask's descender padding, or the word
 *  waiting below shows its ascenders inside the padded band. */
const ROLL = "130%";

interface SlotWordProps {
  words: readonly string[];
  /** Character rendered after the word. */
  trailing?: string;
}

/**
 * Cycles words on a slot-machine roll: the outgoing word travels up out of a
 * mask while the next arrives from below.
 *
 * The mask has to reserve the width of the widest word or it clips whichever
 * word overflows it. Width is reserved by stacking every word as an invisible
 * ghost in a single grid cell, so the box takes the largest intrinsic width the
 * font actually produces. Measuring by character count instead would be wrong —
 * "the future" is the longest string here but renders narrower than the
 * m-heavy "something", which then lost the right half of its g.
 */
export default function SlotWord({ words, trailing = "" }: SlotWordProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

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
      {/* The vertical padding extends the clip box past the baseline so
          descenders survive; the horizontal padding covers glyph ink that
          overhangs its advance width. Negative margins cancel both so the
          surrounding layout is unchanged. */}
      <span className="relative inline-grid overflow-hidden pb-[0.24em] -mb-[0.24em] px-[0.06em] -mx-[0.06em]">
        {words.map((w) => (
          <span
            key={w}
            className="invisible col-start-1 row-start-1"
            aria-hidden="true"
          >
            {w}
          </span>
        ))}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={words[index]}
            className="col-start-1 row-start-1 block"
            initial={{ y: ROLL }}
            animate={{ y: "0%" }}
            exit={{ y: `-${ROLL}` }}
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

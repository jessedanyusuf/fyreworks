import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HERO_WORDS } from "@/data/site";

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1800;
const ANCHOR_HOLD_MS = 3400;
const EMPTY_PAUSE_MS = 280;

type Phase = "hold" | "deleting" | "pause" | "typing";

interface RotatingWordProps {
  words?: readonly string[];
  /** Character rendered after the word (e.g. the hero's "."). Defaults to ".". */
  trailing?: string;
}

export default function RotatingWord({
  words = HERO_WORDS,
  trailing = ".",
}: RotatingWordProps) {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState<Phase>("hold");

  const longestWord = useMemo(
    () => [...words].sort((a, b) => b.length - a.length)[0],
    [words],
  );

  useEffect(() => {
    if (reduceMotion) return;
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "hold") {
      const holdFor = wordIndex === 0 ? ANCHOR_HOLD_MS : HOLD_MS;
      timeout = setTimeout(() => setPhase("deleting"), holdFor);
    } else if (phase === "deleting") {
      if (text.length === 0) {
        setPhase("pause");
        return;
      }
      timeout = setTimeout(() => setText((t) => t.slice(0, -1)), DELETE_MS);
    } else if (phase === "pause") {
      timeout = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, EMPTY_PAUSE_MS);
    } else if (phase === "typing") {
      const target = words[wordIndex];
      if (text === target) {
        setPhase("hold");
        return;
      }
      timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_MS);
    }

    return () => clearTimeout(timeout);
  }, [phase, text, wordIndex, reduceMotion, words]);

  if (reduceMotion) {
    return (
      <>
        <span>{words[0]}</span>
        {trailing && <span>{trailing}</span>}
      </>
    );
  }

  const cursorIdle = phase === "hold" || phase === "pause";
  const active = phase === "typing" || phase === "deleting";

  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {longestWord}
        {trailing}
      </span>
      <span
        className="absolute inset-0 whitespace-nowrap"
        aria-live="polite"
        aria-atomic="true"
      >
        {text}
        <span
          aria-hidden="true"
          className={`inline-block w-[0.04em] h-[0.78em] bg-white align-[-0.05em] ${
            active ? "opacity-100" : cursorIdle ? "animate-blink" : "opacity-0"
          }`}
        />
        {trailing && <span aria-hidden="true">{trailing}</span>}
      </span>
    </span>
  );
}

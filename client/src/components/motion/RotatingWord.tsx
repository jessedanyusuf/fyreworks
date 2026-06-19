import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HERO_WORDS } from "@/data/site";

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1800;
const ANCHOR_HOLD_MS = 3400;
const EMPTY_PAUSE_MS = 280;

const longestWord = [...HERO_WORDS].sort((a, b) => b.length - a.length)[0];

type Phase = "hold" | "deleting" | "pause" | "typing";

export default function RotatingWord() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(HERO_WORDS[0]);
  const [phase, setPhase] = useState<Phase>("hold");

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
        setWordIndex((i) => (i + 1) % HERO_WORDS.length);
        setPhase("typing");
      }, EMPTY_PAUSE_MS);
    } else if (phase === "typing") {
      const target = HERO_WORDS[wordIndex];
      if (text === target) {
        setPhase("hold");
        return;
      }
      timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_MS);
    }

    return () => clearTimeout(timeout);
  }, [phase, text, wordIndex, reduceMotion]);

  if (reduceMotion) {
    return (
      <>
        <span>{HERO_WORDS[0]}</span>
        <span>.</span>
      </>
    );
  }

  const cursorIdle = phase === "hold" || phase === "pause";
  const active = phase === "typing" || phase === "deleting";

  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {longestWord}.
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
        <span aria-hidden="true">.</span>
      </span>
    </span>
  );
}

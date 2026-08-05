import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LabProject } from "@/data/lab";

interface LabFolderProps {
  project: LabProject;
  isOpen: boolean;
  onToggle: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/**
 * A Lab entry drawn as a physical folder: a tab, a back wall, and a front
 * flap that tilts open on click to reveal the (currently locked) contents.
 */
export default function LabFolder({ project, isOpen, onToggle }: LabFolderProps) {
  const reduce = useReducedMotion();
  const num = String(project.number).padStart(3, "0");

  return (
    <div className="group" style={{ perspective: "1200px" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`${project.name} — locked`}
        className="w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
      >
        {/* Tab */}
        <div
          className={`h-7 w-[46%] rounded-t-lg border border-b-0 transition-colors duration-300 ${
            isOpen
              ? "bg-white/[0.16] border-white/35"
              : "bg-white/[0.10] border-white/25 group-hover:bg-white/[0.14] group-hover:border-white/35"
          }`}
          style={{ clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)" }}
        />

        {/* Body — lit from the top edge so it reads as a physical folder */}
        <div
          className={`relative rounded-b-lg rounded-tr-lg border overflow-hidden transition-colors duration-300 bg-gradient-to-b ${
            isOpen
              ? "from-white/[0.13] to-white/[0.06] border-white/35"
              : "from-white/[0.09] to-white/[0.04] border-white/[0.18] group-hover:from-white/[0.13] group-hover:to-white/[0.06] group-hover:border-white/30"
          }`}
        >
          {/* Contents that rise from inside the folder when opened */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="px-5 pt-5">
                  <div className="rounded-md border border-dashed border-white/15 bg-black/40 px-4 py-5 flex items-center gap-3">
                    <LockIcon className="w-4 h-4 shrink-0 text-white/45" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                        Locked
                      </p>
                      <p className="mt-1 text-sm text-white/45 leading-snug">
                        This one isn't ready to be shown yet.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Front flap — tilts forward as the folder opens */}
          <motion.div
            animate={reduce ? undefined : { rotateX: isOpen ? -13 : 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
            className="relative p-5"
          >
            <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span className="text-white/60">LAB.{num}</span>
              <span className="inline-flex items-center gap-1.5">
                <LockIcon className="w-3 h-3" />
                Locked
              </span>
            </div>

            <h2 className="mt-4 font-display text-lg md:text-xl tracking-[-0.01em]">
              {project.name}
            </h2>
            <p className="mt-1.5 text-white/55 text-xs md:text-sm leading-snug">
              {project.descriptor}
            </p>

            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
              <span>
                {project.status} &middot; {project.year}
              </span>
              <span
                aria-hidden="true"
                className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </div>
          </motion.div>
        </div>
      </button>
    </div>
  );
}

import { motion, useReducedMotion } from "framer-motion";
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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/** Folder silhouette: rounded body with a tab across the left of the top edge. */
function FolderFace({ gradientId }: { gradientId: string }) {
  return (
    <svg
      viewBox="0 0 300 190"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
      </defs>
      <path
        d="M14 20 H118 q10 0 15 9 l8 14 q5 9 15 9 H286 q14 0 14 14 V176 q0 14 -14 14 H14 q-14 0 -14 -14 V34 q0 -14 14 -14 Z"
        fill={`url(#${gradientId})`}
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/**
 * A Lab entry drawn as a folder, after the reference: a folder face with a
 * tab, a sheet that lifts out of it when opened, and the label beneath.
 * Nothing here has material ready yet, so every folder is locked.
 */
export default function LabFolder({ project, isOpen, onToggle }: LabFolderProps) {
  const reduce = useReducedMotion();
  const num = String(project.number).padStart(3, "0");
  const gradientId = `folder-${project.slug}`;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={`${project.name} — locked`}
      className={`group w-full text-left rounded-2xl border p-3 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
        isOpen
          ? "bg-white/[0.09] border-white/25"
          : "bg-white/[0.035] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
      }`}
    >
      {/* Folder graphic. The sheet is tucked behind the face and rises out of
          it when opened — the face occupies the lower part of the box so the
          sheet has somewhere to emerge into. */}
      <div className="relative h-[168px] md:h-[182px] overflow-hidden rounded-lg">
        <motion.div
          animate={reduce ? undefined : { y: isOpen ? 0 : 34 }}
          initial={false}
          transition={{ duration: 0.55, ease: EASE }}
          className="absolute left-4 right-4 bottom-[74px] md:bottom-[84px] z-0"
        >
          <div className="rounded-t-md border border-b-0 border-white/20 bg-[#161616] px-3 pt-3 pb-8 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
              <LockIcon className="w-3.5 h-3.5 shrink-0" />
              Locked
            </div>
            <p className="mt-1.5 text-[11px] leading-snug text-white/40">
              Not ready to be shown yet.
            </p>
          </div>
        </motion.div>

        {/* Front face — opaque, so the sheet reads as tucked inside it. */}
        <motion.div
          animate={reduce ? undefined : { rotateX: isOpen ? -14 : 0 }}
          initial={false}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ transformOrigin: "bottom center", transformPerspective: 900 }}
          className="absolute inset-x-0 bottom-0 h-[122px] md:h-[132px] z-10"
        >
          <div className="relative w-full h-full">
            {/* Solid backing so the sheet is hidden behind the face */}
            <svg
              viewBox="0 0 300 190"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <path
                d="M14 20 H118 q10 0 15 9 l8 14 q5 9 15 9 H286 q14 0 14 14 V176 q0 14 -14 14 H14 q-14 0 -14 -14 V34 q0 -14 14 -14 Z"
                fill="#0b0b0b"
              />
            </svg>
            <FolderFace gradientId={gradientId} />

            <span className="absolute left-4 bottom-3 text-[10px] uppercase tracking-[0.2em] text-white/45">
              LAB.{num}
            </span>
            <span
              aria-hidden="true"
              className={`absolute right-4 bottom-3 text-white/40 transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>
        </motion.div>
      </div>

      {/* Label */}
      <div className="px-2 pt-4">
        <h2 className="font-display text-base md:text-lg tracking-[-0.01em]">
          {project.name}
        </h2>
        <p className="mt-1 text-white/50 text-xs md:text-[13px] leading-snug line-clamp-2">
          {project.descriptor}
        </p>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
          <span>
            {project.status} &middot; {project.year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LockIcon className="w-3 h-3" />
            Locked
          </span>
        </div>
      </div>
    </button>
  );
}

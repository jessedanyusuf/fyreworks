import { useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FEATURED_WORK } from "@/data/work";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Featured work: one large lead project with the rest beside it. Selecting a
 * smaller project promotes it to the lead slot, so the section carries several
 * projects without shrinking any of them into thumbnails.
 */
export default function FeaturedWork() {
  const reduce = useReducedMotion();
  const [leadIndex, setLeadIndex] = useState(0);

  const lead = FEATURED_WORK[leadIndex];
  const rest = FEATURED_WORK.filter((_, i) => i !== leadIndex);

  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* Lead */}
      <div className="lg:col-span-8">
        <Link href={`/work/${lead.slug}`} className="group block">
          <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-white/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={lead.slug}
                src={lead.cover}
                alt={lead.name}
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <div className="mt-6 grid md:grid-cols-12 gap-4 md:gap-8">
            <h3 className="md:col-span-4 font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] font-semibold">
              {lead.name}
            </h3>
            <div className="md:col-span-8 space-y-4">
              <p className="text-base md:text-lg lg:text-xl text-white/75 leading-relaxed max-w-[52ch]">
                {lead.statement ?? lead.descriptor}
              </p>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/40">
                {lead.roles.join(" · ")}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* The rest — click to promote into the lead slot */}
      <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5">
        {rest.map((project) => {
          const targetIndex = FEATURED_WORK.findIndex((p) => p.slug === project.slug);
          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => setLeadIndex(targetIndex)}
              aria-label={`Show ${project.name}`}
              className="group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={project.cover}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-2.5 font-display text-sm md:text-base tracking-[-0.01em] text-white/70 group-hover:text-white transition-colors">
                {project.name}
              </p>
              <p className="hidden lg:block mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/35">
                {project.roles[0]}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

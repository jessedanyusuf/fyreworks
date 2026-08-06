import { useState } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import LabFolder from "@/components/LabFolder";
import { useSEO } from "@/lib/useSEO";
import { LAB } from "@/data/lab";

export default function Lab() {
  useSEO({
    title: "Lab — Fyreworks",
    description:
      "Work without a client. Concept brands, speculative identities, ideas that wouldn't leave us alone.",
    path: "/lab",
  });

  // Only one folder open at a time, so the grid never jumps in several places.
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <>
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-8">Lab</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            Concepts. Experiments. Half-formed brands.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl leading-relaxed text-white/65 max-w-[40ch]">
            The work we make when no one's paying.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/40">
            <span>The archive</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 items-start">
            {LAB.map((project, i) => (
              <ScrollReveal key={project.slug} delay={Math.min(i, 8) * 0.04}>
                <LabFolder
                  project={project}
                  isOpen={openSlug === project.slug}
                  onToggle={() =>
                    setOpenSlug((current) =>
                      current === project.slug ? null : project.slug
                    )
                  }
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

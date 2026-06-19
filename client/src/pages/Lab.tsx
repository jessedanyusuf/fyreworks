import { Link } from "wouter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";
import { LAB } from "@/data/lab";

export default function Lab() {
  useSEO({
    title: "Lab — Fyreworks",
    description:
      "Work without a client. Concept brands, speculative identities, ideas that wouldn't leave us alone.",
    path: "/lab",
  });

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

      <section className="px-4 md:px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto columns-2 lg:columns-3 gap-3 md:gap-6 lg:gap-10 [column-fill:_balance]">
          {LAB.map((project, i) => {
            // Staggered aspect ratios for masonry rhythm.
            const aspects = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[1/1]", "aspect-[5/6]", "aspect-[4/5]", "aspect-[3/2]"];
            const aspect = aspects[i % aspects.length];
            return (
              <ScrollReveal
                key={project.slug}
                delay={i * 0.03}
                className="break-inside-avoid mb-6 md:mb-12 lg:mb-20"
              >
                <Link href={`/lab/${project.slug}`} className="group block">
                  <div className={`relative ${aspect} overflow-hidden bg-white/5`}>
                    {project.cover ? (
                      <img
                        src={project.cover}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-xl sm:text-2xl md:text-4xl lg:text-6xl text-white/30 tracking-[-0.02em] text-center px-3 md:px-6">
                          {project.name}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 flex items-center justify-between gap-1.5 text-[8px] md:text-[10px] uppercase tracking-[0.16em] md:tracking-[0.2em] text-white/75 pointer-events-none">
                      <span className="bg-black/55 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 border border-white/20">
                        LAB.{String(project.number).padStart(3, "0")}
                      </span>
                      <span className="bg-black/55 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 border border-white/20 truncate max-w-[55%]">
                        {project.status} &middot; {project.year}
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 md:mt-4 flex items-baseline justify-between gap-2">
                    <h2 className="font-display text-sm md:text-lg lg:text-xl tracking-[-0.01em]">
                      {project.name}
                    </h2>
                  </div>
                  <p className="mt-1 md:mt-1.5 text-white/55 text-[11px] md:text-sm lg:text-base leading-snug max-w-[42ch]">
                    {project.descriptor}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

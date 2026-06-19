import { Link } from "wouter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";
import { WORK } from "@/data/work";

export default function Work() {
  useSEO({
    title: "Work — Fyreworks",
    description: "Selected creative direction projects from Fyreworks. Brands built to matter.",
    path: "/work",
  });

  return (
    <>
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-8">Work</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            The work is the argument.
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28">
          {WORK.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.04}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img
                    src={project.cover}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h2 className="font-display text-xl md:text-2xl tracking-[-0.01em]">
                    {project.name}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.14em] text-white/40 whitespace-nowrap">
                    {project.roles[0]}
                  </span>
                </div>
                <p className="mt-2 text-white/60 text-base md:text-lg leading-snug max-w-[52ch]">
                  {project.descriptor}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

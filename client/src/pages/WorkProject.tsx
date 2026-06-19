import { Link, useParams } from "wouter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";
import { getWorkBySlug, WORK } from "@/data/work";

export default function WorkProject() {
  const params = useParams<{ slug: string }>();
  const project = getWorkBySlug(params.slug);

  useSEO({
    title: project ? `${project.name} — Fyreworks` : "Case study — Fyreworks",
    description: project?.descriptor ?? "Selected project from Fyreworks.",
    path: `/work/${params.slug}`,
    ogImage: project?.cover,
  });

  if (!project) {
    return (
      <section className="px-6 lg:px-12 py-40 text-center">
        <p className="text-white/60 mb-6">We couldn't find that case study.</p>
        <Link href="/work" className="text-sm uppercase tracking-[0.18em] border-b border-white/30 pb-1">
          Back to work
        </Link>
      </section>
    );
  }

  const currentIndex = WORK.findIndex((p) => p.slug === project.slug);
  const next = WORK[(currentIndex + 1) % WORK.length];

  return (
    <>
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/work"
            className="text-xs uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors"
          >
            ← Work
          </Link>
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em]">
            {project.name}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-[48ch] leading-relaxed">
            {project.descriptor}
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-white/50">
            {project.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 lg:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[16/10] overflow-hidden bg-white/5">
            <img src={project.cover} alt={project.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">The brief</p>
          <div className="md:col-span-8 md:col-start-5 space-y-6 text-xl md:text-2xl leading-relaxed text-white/80">
            <p>
              {project.brief ??
                "Case study copy for this project is still being written. Check back soon — or reach out if you'd like to hear about it directly."}
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
            The direction
          </p>
          <div className="md:col-span-8 md:col-start-5 space-y-6 text-lg md:text-xl leading-relaxed text-white/80">
            {(project.direction ?? []).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {!project.direction?.length && (
              <p className="text-white/50 italic">Direction notes coming soon.</p>
            )}
          </div>
        </div>
      </ScrollReveal>

      {project.outcome && (
        <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
            <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
              The outcome
            </p>
            <div className="md:col-span-8 md:col-start-5 space-y-6 text-lg md:text-xl leading-relaxed text-white/80">
              <p>{project.outcome}</p>
            </div>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-6">Next</p>
          <Link href={`/work/${next.slug}`} className="group block">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] group-hover:text-white/60 transition-colors">
              {next.name}
            </h2>
            <p className="mt-3 text-white/60 max-w-[52ch]">{next.descriptor}</p>
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}

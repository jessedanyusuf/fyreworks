import { Link, useParams } from "wouter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";
import { getLabBySlug, LAB } from "@/data/lab";

export default function LabProject() {
  const params = useParams<{ slug: string }>();
  const project = getLabBySlug(params.slug);

  useSEO({
    title: project ? `${project.name} — Lab — Fyreworks` : "Lab — Fyreworks",
    description: project?.descriptor ?? "Lab entry from Fyreworks.",
    path: `/lab/${params.slug}`,
    ogImage: project?.cover,
  });

  if (!project) {
    return (
      <section className="px-6 lg:px-12 py-40 text-center">
        <p className="text-white/60 mb-6">We couldn't find that Lab entry.</p>
        <Link href="/lab" className="text-sm uppercase tracking-[0.18em] border-b border-white/30 pb-1">
          Back to Lab
        </Link>
      </section>
    );
  }

  const currentIndex = LAB.findIndex((p) => p.slug === project.slug);
  const next = LAB[(currentIndex + 1) % LAB.length];

  return (
    <>
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/lab"
            className="text-xs uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors"
          >
            ← Lab
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-white/70">
              LAB.{String(project.number).padStart(3, "0")}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.status}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em]">
            {project.name}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-[48ch] leading-relaxed">
            {project.descriptor}
          </p>
        </div>
      </section>

      {project.cover && (
        <ScrollReveal as="section" className="px-6 lg:px-12 pb-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="aspect-[16/10] overflow-hidden bg-white/5">
              <img src={project.cover} alt={project.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </ScrollReveal>
      )}

      {project.premise && (
        <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
            <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
              The premise
            </p>
            <div className="md:col-span-8 md:col-start-5 text-xl md:text-2xl leading-relaxed text-white/80">
              <p>{project.premise}</p>
            </div>
          </div>
        </ScrollReveal>
      )}

      {project.direction && (
        <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
            <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
              The direction
            </p>
            <div className="md:col-span-8 md:col-start-5 text-lg md:text-xl leading-relaxed text-white/80">
              <p>{project.direction}</p>
            </div>
          </div>
        </ScrollReveal>
      )}

      {project.why && (
        <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
            <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
              Why it exists
            </p>
            <div className="md:col-span-8 md:col-start-5 text-lg md:text-xl leading-relaxed text-white/80">
              <p>{project.why}</p>
            </div>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-6">Next concept</p>
          <Link href={`/lab/${next.slug}`} className="group block">
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

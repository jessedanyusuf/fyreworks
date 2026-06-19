import { Link } from "wouter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";

const ENGAGEMENTS = [
  {
    n: "01",
    title: "Full brand engagements.",
    body: "From positioning to identity to launch. For founders and visionaries building something from the ground up, or rebuilding something that's lost its edge.",
  },
  {
    n: "02",
    title: "Ongoing creative direction.",
    body: "Think of it as having your own creative director, without the full-time hire. Whether you've got a team or a roster of freelancers, we come in, set the creative bar, and keep the work on point.",
  },
  {
    n: "03",
    title: "Focused projects.",
    body: "For when there's a specific thing to solve — a brand refresh, a launch, a campaign, a naming brief, or an audit. Defined scope. A clear timeline. An outcome we agree on before we begin.",
  },
];

const DISCIPLINES = [
  {
    word: "Identity",
    body: "How a brand looks, sounds, and holds itself in the world. Logos, typography, colour, visual systems, and the thousand smaller signals — posture, voice, the way it shows up in a room — that tell people what kind of thing this is before a word is read. Identity is what makes a brand recognisable. Creative direction is what makes sure it is worth recognising.",
  },
  {
    word: "Story",
    body: "The argument a brand is making, in language. Positioning, messaging, manifesto, narrative, and voice. The words a brand chooses, and the ones it refuses. Most brands say a great deal and mean very little. We work the other way.",
  },
  {
    word: "Web",
    body: "The brand's living headquarters. Where visitors arrive, form their first impressions, and decide whether to stay. Strategy, structure, copy, design, and build. Sites that read, move, and behave the way the brand does.",
  },
  {
    word: "Product",
    body: "How a brand shows up in the thing it makes. Packaging, interfaces, printed matter, physical goods. Where the brand moves from concept into something tangible — and where the details matter more than anywhere else.",
  },
  {
    word: "Experience",
    body: "Everything that happens around the product. Launches, events, campaigns, environments, the full arc of how a brand feels over time. The stretch where a brand either earns its place in people's memory, or does not.",
  },
];

export default function Approach() {
  useSEO({
    title: "How we work — Fyreworks",
    description:
      "One discipline, whatever the brand needs. Full brand engagements, ongoing creative direction, and focused projects. No rate cards.",
    path: "/approach",
  });

  return (
    <>
      {/* Hero */}
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-8">Approach</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
            How we work.
          </h1>
        </div>
      </section>

      {/* We do one thing */}
      <ScrollReveal as="section" className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 md:col-start-5 space-y-6 text-xl md:text-2xl leading-relaxed">
            <p className="text-white/80">
              <span className="text-white font-semibold">
                We do one thing: creative direction.
              </span>{" "}
              It expresses through whatever the brand needs — identity, story, web, product,
              campaign, experience. The mistake most founders make is hiring for the output
              before they've decided on the direction. We start at the direction. The output
              follows.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* How we engage */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <ScrollReveal className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">How we engage</p>
          </ScrollReveal>
          <div className="md:col-span-8 md:col-start-5 space-y-12 md:space-y-16">
            <ScrollReveal>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Fyreworks works three ways.
              </p>
            </ScrollReveal>
            {ENGAGEMENTS.map((e, i) => (
              <ScrollReveal key={e.n} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 pt-8">
                  <span className="font-display text-white/40 text-xl tracking-[-0.01em]">{e.n}</span>
                  <div className="space-y-4">
                    <h2 className="font-display text-2xl md:text-4xl leading-snug tracking-[-0.01em]">
                      {e.title}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed max-w-prose">{e.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What creative direction looks like in the work */}
      <section className="px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
            <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
              What creative direction looks like in the work
            </p>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.02em]">
                One discipline.
                <br />
                Different expressions.
              </h2>
            </div>
          </ScrollReveal>

          <ul className="border-t border-white/10">
            {DISCIPLINES.map((d, i) => (
              <ScrollReveal
                as="li"
                key={d.word}
                delay={i * 0.04}
                className="border-b border-white/10 py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-10"
              >
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.02em]">
                    {d.word}.
                  </h3>
                </div>
                <p className="md:col-span-8 text-base md:text-lg text-white/75 leading-relaxed max-w-[62ch]">
                  {d.body}
                </p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-32 text-center">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm tracking-[0.08em] uppercase border-b border-white/30 pb-1 hover:border-white transition-colors"
          >
            Tell us what you're building
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}

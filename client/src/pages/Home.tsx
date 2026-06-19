import { Link } from "wouter";
import RotatingWord from "@/components/motion/RotatingWord";
import ScrollReveal from "@/components/motion/ScrollReveal";
import FeaturedWorkCarousel from "@/components/FeaturedWorkCarousel";
import ServicesList from "@/components/ServicesList";
import { useSEO } from "@/lib/useSEO";
import { FEATURED_WORK } from "@/data/work";

export default function Home() {
  useSEO({
    title: "Fyreworks — The creative studio for visionaries",
    description:
      "We turn ideas into brands people believe in. Creative direction for founders, builders, and culture-makers building what the world doesn't have yet.",
    path: "/",
  });

  const hero = FEATURED_WORK[0];

  return (
    <>
      <section className="px-6 lg:px-12 pt-10 md:pt-16 pb-8 md:pb-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-display text-[9.5vw] md:text-[8.5vw] lg:text-[8vw] leading-[1.04] tracking-[-0.02em] font-bold">
            The creative studio
            <br />
            for <RotatingWord />
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-14 md:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <Link href={`/work/${hero.slug}`} className="group block">
            <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-white/5">
              <img
                src={hero.cover}
                alt={hero.name}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[9.5vw] md:text-[8.5vw] lg:text-[8vw] leading-[1.04] tracking-[-0.02em] font-bold">
              Helping visionaries
              <br />
              build brands
              <br />
              that matter.
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-12 md:mt-20 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8 md:col-start-5 space-y-5 text-xl md:text-2xl lg:text-3xl leading-snug font-display tracking-[-0.01em]">
              <p>The world doesn't need more brands. It needs better ones.</p>
              <p className="text-white/70">
                Built on belief, not buzz. Built to burn long, not out.
              </p>
              <p>
                Built by people who make something from nothing, see everything in nothing, and by
                people who set the world on fire.
              </p>
              <p className="text-white/70">By Visionaries.</p>
              <p>That's who we're for.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">What do we do?</p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.02em]">
                Creative direction.
              </h2>
              <p className="text-xl md:text-2xl leading-snug text-white/70 max-w-[42ch]">
                The art &amp; practice of deciding what a brand should feel like, stand for, and
                refuse to be.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ServicesList />
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                What we've built.
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.02em]">
                Transforming bold ideas into brands people believe in.
              </h2>
            </div>
          </ScrollReveal>

          <FeaturedWorkCarousel />

          <ScrollReveal className="mt-10 md:mt-14 flex justify-end">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-white/60 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              See the archive
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto text-center">
          <Link
            href="/contact"
            className="group inline-block"
          >
            <h2 className="font-display font-bold text-[9.5vw] md:text-[8.5vw] lg:text-[8vw] leading-[1.04] tracking-[-0.02em] transition-colors group-hover:text-white/70">
              Let's set the
              <br />
              world on fire,
              <br />
              together.
            </h2>
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}

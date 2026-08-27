import { Link } from "wouter";
import RotatingWord from "@/components/motion/RotatingWord";
import RevealLine from "@/components/motion/RevealLine";
import SlotWord from "@/components/motion/SlotWord";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ParallaxHero from "@/components/motion/ParallaxHero";
import FeaturedWork from "@/components/FeaturedWork";
import HeroScene from "@/components/HeroScene";
import ServicesList from "@/components/ServicesList";
import { useSEO } from "@/lib/useSEO";

export default function Home() {
  useSEO({
    title: "Fyreworks — The creative studio for visionaries",
    description:
      "We help visionaries turn bold ideas into brands people believe in. Creative direction for founders, builders and culture-makers.",
    path: "/",
  });

  return (
    <>
      <HeroScene>
        <ParallaxHero>
          <div className="relative px-6 lg:px-12 pb-12 md:pb-16">
            <div className="max-w-[1400px] mx-auto">
              {/* Sized so the longest rotating word still holds three lines.
                  RotatingWord reserves the width of its longest entry, so the
                  third line is always at its widest. */}
              <h1 className="font-display text-[7.5vw] md:text-[7vw] lg:text-[6.5vw] leading-[0.92] tracking-[-0.03em] font-bold">
                <RevealLine trigger="load" delay={0.05}>
                  We are the
                </RevealLine>
                <RevealLine trigger="load" delay={0.13}>
                  creative studio
                </RevealLine>
                <RevealLine trigger="load" delay={0.21}>
                  for <RotatingWord />
                </RevealLine>
              </h1>

              <div className="mt-10 md:mt-12 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-5 md:col-start-8 space-y-6">
                  <ScrollReveal delay={0.4}>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 rounded-full border border-white/25 pl-6 pr-2 py-2 text-sm hover:border-white/60 hover:bg-white/5 transition-colors"
                    >
                      Let's talk
                      <span
                        aria-hidden="true"
                        className="grid place-items-center w-8 h-8 rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </ParallaxHero>
      </HeroScene>

      <section className="px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* The question is set large and pushed right; the answer follows
              underneath on the left, smaller — so the section reads as a
              question answered rather than a label beside a heading. */}
          <ScrollReveal className="grid md:grid-cols-12 gap-x-10 gap-y-10 md:gap-y-16 mb-10 md:mb-14">
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.03] tracking-[-0.02em]">
                What do we do?
              </h2>
            </div>
            <div className="md:col-span-6 space-y-4">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.05] tracking-[-0.02em]">
                Creative direction.
              </h3>
              <p className="text-lg md:text-xl leading-snug text-white/70 max-w-[42ch]">
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

      <section className="px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Same treatment as "What do we do?" — section headings are set
              alike and in the same column, so the page has one heading voice
              rather than a different arrangement per section. */}
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.03] tracking-[-0.02em]">
                Featured work
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex items-center justify-end gap-6 mb-10 md:mb-12">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
            >
              See our work
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &#10230;
              </span>
            </Link>
          </ScrollReveal>

          <FeaturedWork />
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display font-bold text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.02em]">
            <RevealLine>Let's create</RevealLine>
            <RevealLine delay={0.08}>
              <SlotWord words={["something", "impact", "stories", "the future"]} />
            </RevealLine>
            <RevealLine delay={0.16}>together.</RevealLine>
          </h2>
          <ScrollReveal delay={0.28}>
            <Link
              href="/contact"
              className="mt-10 md:mt-12 inline-block text-xs md:text-sm uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors"
            >
              Let's chat
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

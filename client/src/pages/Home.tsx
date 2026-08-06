import { Link } from "wouter";
import RotatingWord from "@/components/motion/RotatingWord";
import RevealLine from "@/components/motion/RevealLine";
import SlotWord from "@/components/motion/SlotWord";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Parallax from "@/components/motion/Parallax";
import ParallaxHero from "@/components/motion/ParallaxHero";
import FeaturedWork from "@/components/FeaturedWork";
import HeroBackdrop from "@/components/HeroBackdrop";
import ServicesList from "@/components/ServicesList";
import { useSEO } from "@/lib/useSEO";

export default function Home() {
  useSEO({
    title: "Fyreworks — The creative studio for visionaries",
    description:
      "We turn ideas into brands people believe in. Creative direction for founders, builders, and culture-makers building what the world doesn't have yet.",
    path: "/",
  });

  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        {/* Full-bleed backdrop. Sits behind everything; drifts slowly on scroll. */}
        <HeroBackdrop />

        <ParallaxHero>
          <div className="relative px-6 lg:px-12 pb-12 md:pb-16">
            <div className="max-w-[1400px] mx-auto">
              {/* Sized so the longest rotating word still holds three lines.
                  RotatingWord reserves the width of its longest entry, so the
                  third line is always at its widest. */}
              <h1 className="font-display text-[7.5vw] md:text-[7vw] lg:text-[6.5vw] leading-[0.92] tracking-[-0.03em] font-bold uppercase">
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
                    <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-[42ch]">
                      We turn ideas into brands people believe in &mdash; through taste,
                      judgement, and the discipline to decide what a brand should refuse to be.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.48}>
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
      </section>

      <section className="px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.02em] font-bold">
            <RevealLine>Helping visionaries</RevealLine>
            <RevealLine delay={0.08}>build brands</RevealLine>
            <RevealLine delay={0.16}>that matter.</RevealLine>
          </h2>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-10">
            <Parallax distance={28} className="md:col-span-8 md:col-start-5">
              <div className="space-y-5 text-xl md:text-2xl lg:text-3xl leading-snug font-display tracking-[-0.01em]">
                <ScrollReveal>
                  <p>The world doesn't need more brands. It needs better ones.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <p className="text-white/70">
                    Built on belief, not buzz. Built to endure, not simply launch.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                  <p>
                    Built by people who see what others miss, make something from nothing and
                    carry ideas worth believing in.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                  <p className="text-white/70">Visionaries.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.32}>
                  <p>That's who we're for.</p>
                </ScrollReveal>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">What do we do?</p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-[-0.015em]">
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

      <section className="px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Featured work</p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-[-0.015em]">
                Transforming bold ideas into brands people believe in.
              </h2>
            </div>
          </ScrollReveal>

          {/* Rule with the portfolio link riding on it, as in the reference. */}
          <ScrollReveal className="flex items-center justify-end gap-6 border-t border-white/20 pt-5 mb-10 md:mb-12">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
            >
              Portfolio
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
              <SlotWord words={["something", "impact", "stories", "future"]} />
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

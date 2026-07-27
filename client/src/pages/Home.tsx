import { Link } from "wouter";
import RotatingWord from "@/components/motion/RotatingWord";
import RevealLine from "@/components/motion/RevealLine";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Parallax from "@/components/motion/Parallax";
import ParallaxHero from "@/components/motion/ParallaxHero";
import FeaturedWorkCarousel from "@/components/FeaturedWorkCarousel";
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
      <section className="px-6 lg:px-12 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <ParallaxHero>
          <div className="w-full max-w-[1400px] mx-auto">
            <h1 className="font-display text-[9vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[0.95] tracking-[-0.02em] font-bold uppercase text-center">
              <RevealLine trigger="load" delay={0.05}>
                We are the
              </RevealLine>
              <RevealLine trigger="load" delay={0.13}>
                creative
              </RevealLine>
              <RevealLine trigger="load" delay={0.21}>
                studio for
              </RevealLine>
              <RevealLine trigger="load" delay={0.29}>
                <RotatingWord />
              </RevealLine>
            </h1>
          </div>
        </ParallaxHero>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-[8vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.02em] font-bold">
            <RevealLine>Helping visionaries</RevealLine>
            <RevealLine delay={0.08}>build brands</RevealLine>
            <RevealLine delay={0.16}>that matter.</RevealLine>
          </h2>

          <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-10">
            <Parallax distance={28} className="md:col-span-8 md:col-start-5">
              <div className="space-y-5 text-xl md:text-2xl lg:text-3xl leading-snug font-display tracking-[-0.01em]">
                <ScrollReveal>
                  <p>The world doesn't need more brands. It needs better ones.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <p className="text-white/70">
                    Built on belief, not buzz. Built to burn long, not out.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                  <p>
                    Built by people who make something from nothing, see everything in nothing,
                    and by people who set the world on fire.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                  <p className="text-white/70">By Visionaries.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.32}>
                  <p>That's who we're for.</p>
                </ScrollReveal>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
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

      <section className="px-6 lg:px-12 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                What we've built.
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-[-0.015em]">
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

      <section className="px-6 lg:px-12 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display font-bold text-[8vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.02em]">
            <RevealLine>Let's create</RevealLine>
            <RevealLine delay={0.08}>
              <RotatingWord words={["something", "impact", "stories", "future"]} trailing="" />
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

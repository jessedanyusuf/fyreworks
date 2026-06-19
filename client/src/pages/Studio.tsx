import ScrollReveal from "@/components/motion/ScrollReveal";
import { useSEO } from "@/lib/useSEO";

export default function Studio() {
  useSEO({
    title: "Studio — Fyreworks",
    description:
      "We help visionaries build brands that matter. A creative studio led by Jesse Dan-Yusuf, built for founders, creators, and pioneers shaping culture.",
    path: "/studio",
  });

  return (
    <>
      {/* Hero */}
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-8">Studio</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            We help visionaries build brands that matter.
          </h1>
        </div>
      </section>

      {/* What We Stand For */}
      <ScrollReveal as="section" className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-white/40">
            What we stand for
          </p>
          <div className="md:col-span-8 md:col-start-5 space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            <p>
              The world doesn't need more brands. It needs better ones. Most of what passes for
              branding today is noise &mdash; built to launch, not to last; loud, but saying
              nothing. We're here for the opposite. Brands built on belief. Brands with the nerve
              to stand for something specific. Brands that don't try to please everyone, because
              the ones that do usually end up meaning nothing to anyone.
            </p>
            <p>
              Fyreworks exists to turn ideas into brands people actually believe in. Not by adding
              to the noise, but by cutting through it. Through taste, judgement, and the
              discipline to decide what a brand should feel like, stand for, and refuse to be.
              That's the work.{" "}
              <span className="text-white">Everything else is decoration.</span>
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* A Letter from Our Founder — paper treatment */}
      <section className="px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-10 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/50">
            <span>A letter from our founder</span>
            <span aria-hidden="true">Abuja &mdash; 2026</span>
          </div>

          <ScrollReveal>
            <article
              style={{
                backgroundColor: "#f4f0e4",
                color: "#1a1918",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.25), rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.05)), url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>\")",
              }}
              className="font-mono mx-auto max-w-[780px] border border-[#d9d4c5] shadow-[0_40px_120px_rgba(0,0,0,0.55)] px-7 md:px-14 lg:px-20 py-14 md:py-20 lg:py-24 relative"
            >
              {/* Paper header line */}
              <div className="flex items-baseline justify-between mb-10 md:mb-14 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#6b6558]">
                <span>Fyreworks &mdash; Creative direction</span>
                <span>Abuja, NG</span>
              </div>

              <div className="space-y-5 text-[15px] md:text-[17px] leading-[1.85] text-[#26231e]">
                <p className="text-[#1a1918] text-lg md:text-xl">Hi, my name is Jesse.</p>

                <p>
                  I've been in the creative industry for almost twenty years now. Graphic designer.
                  Social media manager. Copywriter. Brand developer. Storyteller. Web developer.
                  I've worked every angle of how an idea becomes something people can see, use, and
                  believe in.
                </p>

                <p>
                  Along the way, I've watched too many good ideas die. Not because they were bad,
                  but because they were built badly.
                </p>

                <p>
                  I believe ideas can change the world. But not just ideas.{" "}
                  <span className="text-[#1a1918]">Ideas executed well.</span>
                </p>

                <p>
                  Over time, I realised where I do my best work. In creative direction. Deciding
                  what a brand should feel like, what it should stand for, and what it must refuse
                  to be. Everything else is in service of that decision, made well.
                </p>

                <p>
                  And honestly, this gives me the most joy. Because I get to partner with you, the
                  visionary &mdash; and I get to work with a rotating roster of other creative
                  collaborators alongside you. Writers. Designers. Developers. Photographers.
                  Social media managers. Strategists. As the Creative Director, I get the
                  incredible opportunity to see raw ideas turn into tangible movements that shape
                  culture.
                </p>

                <p>
                  What I love most is working with people who are changing something. Pioneers.
                  Founders building what the world does not have yet. Creatives rewriting what is
                  possible in their corner of culture. People who are already doing the hard part,
                  and who deserve brands that can carry the weight of what they are building.
                </p>

                <p className="text-[#1a1918]">
                  I've been helping visionaries like you build brands that matter since 2016, and
                  it's still the most rewarding work I do.
                </p>

                <p>
                  If that's you, our role is simple. Help you tell the story your idea deserves,
                  clearly enough and powerfully enough for the world to feel it.
                </p>

                <p>
                  Because when the right idea is built well, it doesn't just become a brand. It
                  moves people. It shapes culture. It lasts.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-14 md:mt-16 pt-8 border-t border-[#d9d4c5]">
                <p
                  className="text-4xl md:text-5xl text-[#1a1918] leading-[1]"
                  style={{
                    fontFamily:
                      "'Autograf', 'Homemade Apple', 'Caveat', 'Bradley Hand', cursive",
                    fontWeight: 400,
                  }}
                >
                  Jesse Dan-Yusuf
                </p>
                <p className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#6b6558]">
                  Founder &mdash; Fyreworks
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

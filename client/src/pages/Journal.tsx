import { useEffect } from "react";
import { useLocation, useParams } from "wouter";
import ScrollReveal from "@/components/motion/ScrollReveal";
import JournalModal from "@/components/JournalModal";
import { useSEO } from "@/lib/useSEO";
import { SITE } from "@/data/site";
import { JOURNAL, getPostBySlug, type JournalPost } from "@/data/journal";

interface TileProps {
  post: JournalPost;
  onOpen: (p: JournalPost) => void;
  variant?: "cover" | "lead" | "standard" | "brief";
}

function Tile({ post, onOpen, variant = "standard" }: TileProps) {
  const titleClass =
    variant === "cover"
      ? "font-mono text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.06] font-semibold tracking-[-0.015em] max-w-[22ch]"
      : variant === "lead"
      ? "font-mono text-2xl md:text-3xl lg:text-[2.15rem] leading-[1.15] font-semibold tracking-[-0.01em] max-w-[24ch]"
      : variant === "brief"
      ? "font-mono text-lg md:text-xl leading-snug font-semibold tracking-[-0.005em] max-w-[24ch]"
      : "font-mono text-xl md:text-2xl leading-snug font-semibold tracking-[-0.005em] max-w-[24ch]";

  const dekClass =
    variant === "cover"
      ? "text-base md:text-lg text-white/65 leading-relaxed max-w-[60ch]"
      : variant === "lead"
      ? "text-sm md:text-base text-white/60 leading-relaxed max-w-[48ch]"
      : variant === "brief"
      ? "text-sm text-white/55 leading-relaxed max-w-[40ch]"
      : "text-sm md:text-base text-white/55 leading-relaxed max-w-[46ch]";

  return (
    <a
      href={`/journal/${post.slug}`}
      onClick={(e) => {
        // Intercept left-click without modifiers; allow cmd/ctrl-click to open in new tab.
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        onOpen(post);
      }}
      className="group flex flex-col w-full h-full text-left py-6 md:py-8"
      aria-label={`Read: ${post.title}`}
    >
      <div className="flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/45 pb-4 border-b border-white/15">
        <span>
          <span className="text-white/70">&#8470;&nbsp;{String(post.number).padStart(2, "0")}</span>
          <span className="mx-2 text-white/20">/</span>
          <span>{post.date}</span>
        </span>
        <span>{post.readTime}</span>
      </div>

      <div className="pt-5 flex-1 flex flex-col gap-4">
        <h3 className={`${titleClass} transition-colors group-hover:text-white/70`}>
          {post.title}
        </h3>
        <p className={dekClass}>{post.dek}</p>

        <div className="mt-auto pt-4 inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/50 group-hover:text-white transition-colors">
          Read
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Journal() {
  const [, setLocation] = useLocation();
  const params = useParams<{ slug?: string }>();
  const active: JournalPost | null = params.slug ? getPostBySlug(params.slug) ?? null : null;

  // Per-route SEO: active post swaps title/description/og for shareable links.
  useSEO({
    title: active
      ? `${active.title} — Fyreworks Journal`
      : "Journal — Fyreworks",
    description: active
      ? active.dek
      : "Thoughts on creative direction, the taste economy, and building brands people believe in. From Jesse Dan-Yusuf.",
    path: active ? `/journal/${active.slug}` : "/journal",
    ogType: active ? "article" : "website",
  });

  // JSON-LD Article schema for the active post.
  useEffect(() => {
    if (!active) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: active.title,
      description: active.dek,
      datePublished: active.date,
      author: { "@type": "Person", name: "Jesse Dan-Yusuf" },
      publisher: { "@type": "Organization", name: "Fyreworks" },
      url: `${SITE.baseUrl}/journal/${active.slug}`,
      mainEntityOfPage: `${SITE.baseUrl}/journal/${active.slug}`,
    });
    script.setAttribute("data-journal-ld", active.slug);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [active]);

  const openPost = (post: JournalPost) => setLocation(`/journal/${post.slug}`);
  const closePost = () => setLocation("/journal");

  const [cover, lead, ...rest] = JOURNAL;

  return (
    <div className="font-mono">
      <section className="px-6 lg:px-12 pt-20 md:pt-32 pb-10">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-8">
              The Fyreworks Journal &mdash; Vol. 01
            </p>
            <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.01em] font-semibold max-w-[22ch]">
              Stories, Thoughts &amp; Reflections from the Studio.
            </h1>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            {String(JOURNAL.length).padStart(2, "0")} entries / Issue 01
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 lg:px-12 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 md:col-start-5 text-base md:text-xl text-white/80 leading-relaxed max-w-[60ch]">
            <p>
              Thoughts on creative direction, the taste economy, and building brands people
              believe in. From Jesse Dan-Yusuf. Sometimes featured guests.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Cover + Lead row */}
      <section className="px-6 lg:px-12 pt-8 md:pt-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-t-2 border-white/30 pt-5 mb-8 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/50">
            <span>Cover Story</span>
            <span aria-hidden="true">&#8470;&nbsp;{String(cover.number).padStart(2, "0")}</span>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12 md:gap-y-16">
              {cover && (
                <div className="md:col-span-8 md:border-r md:border-white/15 md:pr-10">
                  <Tile post={cover} onOpen={openPost} variant="cover" />
                </div>
              )}
              {lead && (
                <div className="md:col-span-4">
                  <Tile post={lead} onOpen={openPost} variant="lead" />
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Archive grid */}
      <section className="px-6 lg:px-12 pt-20 md:pt-28 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="border-t-2 border-white/30 pt-5 mb-10 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/50">
              <span>Archive</span>
              <span aria-hidden="true">
                {String(rest.length).padStart(2, "0")}&nbsp;Entries
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 md:auto-rows-fr border-t border-white/15">
            {rest.map((post, i) => (
              <ScrollReveal
                key={post.slug}
                delay={i * 0.04}
                className="h-full border-b border-white/15 md:border-l md:border-white/15 md:[&:nth-child(3n+1)]:border-l-0 md:pl-8 md:[&:nth-child(3n+1)]:pl-0 md:pr-8 md:[&:nth-child(3n)]:pr-0"
              >
                <Tile post={post} onOpen={openPost} variant="brief" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <JournalModal post={active} onClose={closePost} />
    </div>
  );
}

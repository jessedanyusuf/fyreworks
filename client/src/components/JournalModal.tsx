import { Fragment, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { JournalPost } from "@/data/journal";
import { SITE } from "@/data/site";

interface JournalModalProps {
  post: JournalPost | null;
  onClose: () => void;
}

const ICON_BUTTON =
  "w-10 h-10 flex items-center justify-center border border-white/15 text-white/70 hover:text-white hover:border-white/60 transition-colors";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21l-6.54 7.47L22 22h-6.84l-5.36-7-6.13 7H.91l7-7.99L.5 2h7l4.85 6.43L18.244 2Zm-2.4 18h1.89L7.26 4H5.27l10.574 16Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.23 2.69.23v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.71.22 1.36.2 1.87.12.57-.08 1.75-.72 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35ZM12.04 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98.99-3.64-.23-.37A9.87 9.87 0 0 1 2.15 12C2.16 6.57 6.59 2.15 12.05 2.15c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.96c0 5.43-4.44 9.85-9.89 9.85Zm8.41-18.26A11.82 11.82 0 0 0 12.04 0C5.47 0 .13 5.33.12 11.88c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.66a11.9 11.9 0 0 0 5.7 1.45h.01c6.57 0 11.9-5.33 11.9-11.88 0-3.17-1.23-6.15-3.49-8.39Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 6h18v12H3z" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 1 0-7.07-7.07l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 1 0 7.07 7.07l1.5-1.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShareBlock({ post }: { post: JournalPost }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE.baseUrl}/journal/${post.slug}`;
  const shareText = `${post.title} — via Fyreworks Journal`;

  const links = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
      icon: <XIcon />,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: <LinkedInIcon />,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: <FacebookIcon />,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`,
      icon: <WhatsAppIcon />,
    },
    {
      label: "Share via email",
      href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(
        `${post.dek}\n\n${url}`
      )}`,
      icon: <EmailIcon />,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no-op; clipboard may be blocked
    }
  };

  return (
    <div className="mt-14 pt-8 border-t border-white/15">
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/50 mr-2">
          Share this post
        </span>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            title={l.label}
            className={ICON_BUTTON}
          >
            {l.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Link copied" : "Copy link"}
          title={copied ? "Link copied" : "Copy link"}
          className={ICON_BUTTON}
        >
          {copied ? <CheckIcon /> : <LinkIcon />}
        </button>
      </div>
    </div>
  );
}

// Convert inline *text* into <em> fragments; escape surplus asterisks.
function renderInline(text: string): ReactNode {
  if (!text.includes("*")) return text;
  const parts: ReactNode[] = [];
  const regex = /\*([^*\n]+)\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <em key={key++} className="text-white/70 not-italic">
        {match[1]}
      </em>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return (
    <Fragment>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </Fragment>
  );
}

function renderMarkdown(md: string) {
  const blocks = md
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  return blocks.map((block, i) => {
    // Horizontal rule
    if (/^-{3,}$/.test(block) || /^\*{3,}$/.test(block) || /^_{3,}$/.test(block)) {
      return <hr key={i} className="my-10 border-0 border-t border-white/15" />;
    }
    if (block.startsWith("## ")) {
      return (
        <h3
          key={i}
          className="font-mono mt-14 mb-5 text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/55"
        >
          {renderInline(block.slice(3))}
        </h3>
      );
    }

    if (block.startsWith("# ")) {
      if (i === 0) return null; // title is rendered in modal header
      return (
        <h2
          key={i}
          className="mt-14 mb-5 text-xl md:text-2xl font-semibold text-white leading-snug tracking-[-0.005em]"
        >
          {renderInline(block.slice(2))}
        </h2>
      );
    }

    if (block.startsWith("—") || block.startsWith("-—")) {
      return (
        <div
          key={i}
          className="mt-14 pt-8 border-t border-white/10 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 whitespace-pre-line"
        >
          {block}
        </div>
      );
    }

    // Bullet list
    if (block.split("\n").every((line) => /^\s*\*\s+/.test(line))) {
      return (
        <ul key={i} className="my-6 space-y-2 list-none pl-0">
          {block.split("\n").map((line) => (
            <li
              key={line}
              className="relative pl-7 text-white/80 before:content-['→'] before:absolute before:left-0 before:top-[1px] before:text-white/35 before:font-mono"
            >
              {renderInline(line.replace(/^\s*\*\s+/, ""))}
            </li>
          ))}
        </ul>
      );
    }

    // Italic-only block (e.g. "*Fyreworks Journal. By Jesse Dan-Yusuf.*")
    if (/^\*[^*\n]+\*$/.test(block)) {
      return (
        <p
          key={i}
          className="my-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/55"
        >
          {block.slice(1, -1)}
        </p>
      );
    }

    return (
      <p key={i} className="my-6 text-white/85">
        {renderInline(block)}
      </p>
    );
  });
}

export default function JournalModal({ post, onClose }: JournalModalProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!post) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className="fixed inset-0 z-[60] font-mono"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="journal-modal-title"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/75 backdrop-blur-xl"
          />

          <motion.div
            className="relative h-full overflow-y-auto"
            onClick={(e) => {
              // Close when the click is outside the article (backdrop / surrounding padding).
              if (!(e.target as HTMLElement).closest("article")) onClose();
            }}
            initial={reduce ? false : { y: 48, opacity: 0 }}
            animate={reduce ? undefined : { y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: 32, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="min-h-full flex items-start justify-center px-4 md:px-8 py-10 md:py-16">
              <article className="relative w-full max-w-[780px] bg-[#0a0a0a] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] px-6 md:px-16 py-10 md:py-20">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    ×
                  </span>
                </button>

                <header className="mb-10 md:mb-14">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/45">
                    <span className="text-white/70">
                      &#8470;&nbsp;{String(post.number).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Fyreworks Journal</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h1
                    id="journal-modal-title"
                    className="mt-8 text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-[-0.015em] font-semibold text-white max-w-[24ch]"
                  >
                    {post.title}
                  </h1>
                </header>

                <div className="prose-invert text-[17px] md:text-[18px] leading-[1.75] text-white/85">
                  {renderMarkdown(post.content)}
                </div>

                <ShareBlock post={post} />
              </article>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

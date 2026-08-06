import { Link } from "wouter";
import { SOCIAL_LINKS, SITE } from "@/data/site";
import FyreworksMark from "@/components/FyreworksMark";

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <Link href="/" aria-label="Fyreworks home" className="text-white/90 hover:text-white transition-colors">
            <FyreworksMark className="h-7 w-7 md:h-8 md:w-8" />
          </Link>

          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-3 text-base md:text-lg text-white hover:opacity-70 transition-opacity"
          >
            <EnvelopeIcon />
            {SITE.email}
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-2 text-sm md:text-base">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative text-white/75 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:right-full after:-bottom-0.5 after:h-px after:bg-white hover:after:right-0 after:transition-[right] after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sign-off, composed rather than run together as one copyright sentence. */}
      <div className="mt-16 md:mt-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-[14vw] md:text-[10vw] lg:text-[8.5vw] uppercase">
            {SITE.name}
          </p>
          <p className="mt-4 md:mt-6 font-display text-xl md:text-3xl lg:text-4xl leading-tight tracking-[-0.02em] text-white/75 text-balance max-w-[22ch] mx-auto">
            Helping visionaries build brands that matter.
          </p>
          <p className="mt-6 md:mt-8 text-[10px] md:text-xs uppercase tracking-[0.28em] text-white/40">
            Since 2016 &mdash; Tmrw.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-10 md:pt-14 pb-8 md:pb-10 flex flex-col items-center text-center gap-2 md:flex-row md:items-center md:justify-between md:text-left text-[11px] text-white/35">
        <p>© {year} {SITE.name}. All rights reserved.</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}

import { SOCIAL_LINKS, SITE } from "@/data/site";

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

      <div className="mt-20 md:mt-32 px-6 lg:px-12">
        <h2 className="font-display font-extrabold leading-[0.92] tracking-[-0.035em] text-[9.5vw] md:text-[7vw] lg:text-[5.5vw] uppercase text-center max-w-[1400px] mx-auto text-balance">
          ©{SITE.name} Helping visionaries build brands that matter. Since 2016&ndash;tmrw.
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-6 pb-8 md:pb-10 flex flex-col items-center text-center gap-2 md:flex-row md:items-center md:justify-between md:text-left text-xs text-white/40">
        <p>All rights reserved. © {year}.</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}

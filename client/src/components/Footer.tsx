import { Link } from "wouter";
import { NAV_ITEMS, SOCIAL_LINKS, SITE } from "@/data/site";

function ArrowOut() {
  return (
    <span aria-hidden="true" className="inline-block translate-y-[-0.05em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-[0.2em]">
      &#8599;
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 md:pt-24">
        <div className="grid gap-12 md:gap-10 md:grid-cols-12">
          {/* Navigation carries the left column's weight, set large — it is the
              structural counterpart to the reference's grid of office codes,
              and the only list we have that earns type at this size. */}
          <nav className="md:col-span-6" aria-label="Footer">
            {/* Flows down each column, not across: filling row-major would make the
                  first column read Studio/Approach/Journal and skip every other
                  item. One column on phones, where two would overflow at this size. */}
              <ul className="grid grid-flow-col grid-rows-6 md:grid-rows-3 gap-x-8 gap-y-1 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.12] tracking-[-0.025em]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-white/85 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-5 md:col-start-8 space-y-8 md:space-y-9">
            <p className="text-base md:text-lg leading-relaxed max-w-[42ch] text-white/85">
              If you&rsquo;re building something the world doesn&rsquo;t have yet, we&rsquo;re here
              to listen.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-baseline gap-2 text-lg md:text-xl text-white hover:opacity-70 transition-opacity"
            >
              {SITE.email}
              <ArrowOut />
            </a>

            <ul className="space-y-1.5 text-base md:text-lg">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline gap-1.5 text-white/85 hover:text-white transition-colors"
                  >
                    {s.label}
                    <ArrowOut />
                  </a>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs md:text-sm text-white/40">
              <p>{SITE.location}</p>
              <p>All rights reserved. &copy; {year}.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-32 px-6 lg:px-12 pb-8 md:pb-10">
        <h2 className="font-display font-extrabold leading-[0.92] tracking-[-0.035em] text-[8.5vw] md:text-[7.5vw] lg:text-[5.5vw] uppercase text-center max-w-[1400px] mx-auto text-balance">
          &copy;{SITE.name} Helping visionaries build brands that matter. Since{" "}
          {/* Held together: broken at the en-dash it strands "tmrw." on a line
              of its own and leaves the dash hanging. */}
          <span className="whitespace-nowrap">2016&ndash;tmrw.</span>
        </h2>
      </div>
    </footer>
  );
}

import { readFile, writeFile, mkdir, cp, access, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { JOURNAL_MANIFEST } from "../client/src/data/journal-manifest.ts";
import { SITE, SOCIAL_LINKS } from "../client/src/data/site.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist", "public");
const BASE_URL = SITE.baseUrl;

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  publishedISO?: string;
  jsonLd?: Record<string, unknown>;
}

const staticRoutes: RouteMeta[] = [
  {
    path: "/",
    title: "Fyreworks — The creative studio for visionaries",
    description:
      "We help visionaries turn bold ideas into brands people believe in. Creative direction for founders, builders and culture-makers.",
    // Identity for the whole site, not just this page: it is what ties the
    // name, the mark, the founder and the social accounts together for search,
    // and there was no organisation-level schema anywhere before this.
    // sameAs is read straight from SOCIAL_LINKS so the two cannot drift.
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: BASE_URL,
      logo: `${BASE_URL}/android-chrome-512x512.png`,
      image: `${BASE_URL}${SITE.defaultOgImage}`,
      description:
        "Creative direction for founders, builders and culture-makers. Fyreworks helps visionaries turn bold ideas into brands people believe in.",
      email: SITE.email,
      founder: { "@type": "Person", name: "Jesse Dan-Yusuf" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressCountry: "NG",
      },
      sameAs: SOCIAL_LINKS.map((s) => s.href),
    },
  },
  {
    path: "/studio",
    title: "About Fyreworks — Led by Jesse Dan-Yusuf",
    description:
      "A studio of one, a practice of many. Nearly two decades of creative work, distilled into one discipline: creative direction.",
  },
  {
    path: "/work",
    title: "Work — Fyreworks",
    description: "Selected creative direction projects from Fyreworks. Brands built to matter.",
  },
  {
    path: "/approach",
    title: "How we work — Fyreworks",
    description:
      "One discipline, whatever the brand needs. Full brand engagements, embedded creative direction, and focused projects. No rate cards.",
  },
  {
    path: "/lab",
    title: "Lab — Fyreworks",
    description:
      "Creative experiments from Fyreworks — the work we make for ourselves. Concept brands, speculative identities, and ideas still taking shape.",
  },
  {
    path: "/journal",
    title: "Journal — Fyreworks",
    description:
      "Thoughts on creative direction, the taste economy, and building brands people believe in. From Jesse Dan-Yusuf.",
  },
  {
    path: "/contact",
    title: "Let's talk — Fyreworks",
    description:
      "Fyreworks takes on a limited number of engagements each year. Tell us what you're building.",
  },
];

const journalRoutes: RouteMeta[] = JOURNAL_MANIFEST.map((post) => ({
  path: `/journal/${post.slug}`,
  title: `${post.title} — Fyreworks Journal`,
  description: post.dek,
  ogType: "article",
  publishedISO: post.publishedISO,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: post.publishedISO,
    author: { "@type": "Person", name: "Jesse Dan-Yusuf" },
    publisher: { "@type": "Organization", name: "Fyreworks" },
    url: `${BASE_URL}/journal/${post.slug}`,
    mainEntityOfPage: `${BASE_URL}/journal/${post.slug}`,
  },
}));

const allRoutes = [...staticRoutes, ...journalRoutes];

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function injectMeta(html: string, meta: RouteMeta): string {
  const url = `${BASE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const title = esc(meta.title);
  const description = esc(meta.description);
  const ogType = meta.ogType ?? "website";

  let out = html;

  // <title>
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // name="title"
  out = out.replace(
    /<meta\s+name="title"[^>]*>/,
    `<meta name="title" content="${title}">`
  );

  // name="description"
  out = out.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${description}">`
  );

  // og:title
  out = out.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${title}">`
  );

  // og:description
  out = out.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${description}">`
  );

  // og:url
  out = out.replace(
    /<meta\s+property="og:url"[^>]*>/,
    `<meta property="og:url" content="${url}">`
  );

  // og:type
  out = out.replace(
    /<meta\s+property="og:type"[^>]*>/,
    `<meta property="og:type" content="${ogType}">`
  );

  // twitter:title / description / url
  out = out.replace(
    /<meta\s+name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${title}">`
  );
  out = out.replace(
    /<meta\s+name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${description}">`
  );
  out = out.replace(
    /<meta\s+name="twitter:url"[^>]*>/,
    `<meta name="twitter:url" content="${url}">`
  );

  // canonical link (add if not present)
  if (/rel="canonical"/.test(out)) {
    out = out.replace(
      /<link\s+rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${url}">`
    );
  } else {
    out = out.replace(
      /<\/head>/,
      `  <link rel="canonical" href="${url}">\n  </head>`
    );
  }

  // article:* (article only). LinkedIn reads these to render a post as an
  // article rather than a plain link, and they are what surfaces a byline and
  // date in the card.
  if (ogType === "article" && meta.publishedISO) {
    out = out.replace(
      /<\/head>/,
      `  <meta property="article:published_time" content="${meta.publishedISO}">\n` +
        `  <meta property="article:author" content="Jesse Dan-Yusuf">\n` +
        `  <meta property="article:publisher" content="${BASE_URL}">\n  </head>`
    );
  }

  // JSON-LD: Article on journal posts, Organization on the homepage.
  if (meta.jsonLd) {
    const ldJson = JSON.stringify(meta.jsonLd);
    out = out.replace(
      /<\/head>/,
      `  <script type="application/ld+json">${ldJson}</script>\n  </head>`
    );
  }

  return out;
}

async function exists(p: string) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(DIST))) {
    console.error(`[build-seo] dist directory not found at ${DIST}. Run 'vite build' first.`);
    process.exit(1);
  }

  const baseHtml = await readFile(join(DIST, "index.html"), "utf8");

  // Write per-route HTML stubs (keep the root / as-is)
  for (const route of allRoutes) {
    if (route.path === "/") {
      // Still rewrite the base index.html to have correct home meta.
      const home = injectMeta(baseHtml, route);
      await writeFile(join(DIST, "index.html"), home);
      continue;
    }
    const dir = join(DIST, route.path.replace(/^\//, ""));
    await mkdir(dir, { recursive: true });
    const html = injectMeta(baseHtml, route);
    await writeFile(join(dir, "index.html"), html);
  }

  // sitemap.xml
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = allRoutes
    .map((r) => {
      const loc = `${BASE_URL}${r.path === "/" ? "/" : r.path}`;
      const mod = r.publishedISO ?? lastmod;
      const priority =
        r.path === "/" ? "1.0" : r.path.startsWith("/journal/") ? "0.7" : "0.8";
      const changefreq = r.path.startsWith("/journal") ? "weekly" : "monthly";
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${mod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  await writeFile(join(DIST, "sitemap.xml"), sitemap);

  // robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  await writeFile(join(DIST, "robots.txt"), robots);

  console.log(`[build-seo] Wrote ${allRoutes.length} route stubs, sitemap.xml, robots.txt`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Plain metadata for every journal post.
// No Vite imports here — safe to read from Node build scripts via tsx.

export interface JournalMeta {
  number: number;
  slug: string;
  title: string;
  dek: string;
  date: string; // Human-readable
  publishedISO: string; // ISO 8601 for schema.org / sitemap lastmod
  readTime: string;
  file: string; // markdown filename in content/journal/
}

export const JOURNAL_MANIFEST: JournalMeta[] = [
  {
    number: 11,
    slug: "why-your-brand-needs-a-creative-director",
    title: "Why Your Brand Needs a Creative Director",
    dek: "On why cheap logos and freelance social posts don't add up to a brand — and what happens when nobody is holding the line.",
    date: "April 22, 2026",
    publishedISO: "2026-04-22",
    readTime: "6 min read",
    file: "11_why_creative_director.md",
  },
  {
    number: 10,
    slug: "luxury-the-most-abused-word",
    title: "Luxury, the Most Abused Word in Branding Right Now",
    dek: "Gold foil and marble are not luxury. A note on what the word actually means — and why most Nigerian brands using it are really selling aspiration.",
    date: "April 8, 2026",
    publishedISO: "2026-04-08",
    readTime: "5 min read",
    file: "10_luxury_abused.md",
  },
  {
    number: 9,
    slug: "cultural-intelligence-101",
    title: "Cultural Intelligence 101: How to Launch a Brand Movement in Nigeria",
    dek: "Brand movements don't start with design. They start with listening — closely enough to notice the jokes, the suspicions, and the status games.",
    date: "March 25, 2026",
    publishedISO: "2026-03-25",
    readTime: "6 min read",
    file: "09_cultural_intelligence_101.md",
  },
  {
    number: 8,
    slug: "stop-telling-bad-stories",
    title: "Stop Telling Bad Stories",
    dek: "Every brand has a story. Most of them are terrible. Here's why yours isn't landing — and what to do instead.",
    date: "March 11, 2026",
    publishedISO: "2026-03-11",
    readTime: "5 min read",
    file: "08_stop_telling_bad_stories.md",
  },
  {
    number: 7,
    slug: "how-to-create-a-brand-people-believe-in",
    title: "How to Create a Brand People Believe In",
    dek: "Attention is cheap. Belief is earned. On building brands people don't just buy from — they fight for.",
    date: "February 25, 2026",
    publishedISO: "2026-02-25",
    readTime: "4 min read",
    file: "07_how_to_create_a_brand_people_believe_in.md",
  },
  {
    number: 6,
    slug: "how-to-start-a-movement",
    title: "How to Start a Movement",
    dek: "Movements aren't viral campaigns or trending hashtags. They're what happens when people organize around a shared belief and act on it.",
    date: "February 11, 2026",
    publishedISO: "2026-02-11",
    readTime: "6 min read",
    file: "06_how_to_start_a_movement.md",
  },
  {
    number: 5,
    slug: "why-your-brand-needs-a-community",
    title: "Why Your Brand Needs a Community",
    dek: "Brands rely on transactions. Movements grow from belief. On why every brand worth building needs a community baked in from day one.",
    date: "January 28, 2026",
    publishedISO: "2026-01-28",
    readTime: "5 min read",
    file: "05_why_your_brand_needs_a_community.md",
  },
  {
    number: 4,
    slug: "how-to-take-ais-job",
    title: "How to Take AI's Job",
    dek: "Everyone's worried about AI taking their job. That's the wrong question.",
    date: "January 14, 2026",
    publishedISO: "2026-01-14",
    readTime: "4 min read",
    file: "04_how_to_take_ais_job.md",
  },
  {
    number: 3,
    slug: "chatgpt-isnt-your-creative-director",
    title: "I Don't Need a Creative Director, I Have ChatGPT",
    dek: "Smart founders telling me they've replaced creative direction with an LLM. Here's why that's a trap.",
    date: "December 31, 2025",
    publishedISO: "2025-12-31",
    readTime: "4 min read",
    file: "03_chatgpt_isnt_your_creative_director.md",
  },
  {
    number: 2,
    slug: "the-art-and-practice-of-creative-direction",
    title: "The Art & Practice of Creative Direction",
    dek: "The industry has done a terrible job explaining creative direction. Here's what it actually is — and why you need it.",
    date: "December 17, 2025",
    publishedISO: "2025-12-17",
    readTime: "3 min read",
    file: "02_the_art_and_practice_of_creative_direction.md",
  },
  {
    number: 1,
    slug: "welcome-to-the-taste-economy",
    title: "Welcome to the Taste Economy",
    dek: "There was an attention economy. Then a trust economy. Then a creator economy. All crowded, noisy, exhausted. Welcome to what's next.",
    date: "December 3, 2025",
    publishedISO: "2025-12-03",
    readTime: "3 min read",
    file: "01_welcome_to_the_taste_economy.md",
  },
];

import p01 from "../content/journal/01_welcome_to_the_taste_economy.md?raw";
import p02 from "../content/journal/02_the_art_and_practice_of_creative_direction.md?raw";
import p03 from "../content/journal/03_chatgpt_isnt_your_creative_director.md?raw";
import p04 from "../content/journal/04_how_to_take_ais_job.md?raw";
import p05 from "../content/journal/05_why_your_brand_needs_a_community.md?raw";
import p06 from "../content/journal/06_how_to_start_a_movement.md?raw";
import p07 from "../content/journal/07_how_to_create_a_brand_people_believe_in.md?raw";
import p08 from "../content/journal/08_stop_telling_bad_stories.md?raw";
import p09 from "../content/journal/09_cultural_intelligence_101.md?raw";
import p10 from "../content/journal/10_luxury_abused.md?raw";
import p11 from "../content/journal/11_why_creative_director.md?raw";
import { JOURNAL_MANIFEST, type JournalMeta } from "./journal-manifest";

export interface JournalPost extends JournalMeta {
  content: string;
}

const CONTENT: Record<string, string> = {
  "01_welcome_to_the_taste_economy.md": p01,
  "02_the_art_and_practice_of_creative_direction.md": p02,
  "03_chatgpt_isnt_your_creative_director.md": p03,
  "04_how_to_take_ais_job.md": p04,
  "05_why_your_brand_needs_a_community.md": p05,
  "06_how_to_start_a_movement.md": p06,
  "07_how_to_create_a_brand_people_believe_in.md": p07,
  "08_stop_telling_bad_stories.md": p08,
  "09_cultural_intelligence_101.md": p09,
  "10_luxury_abused.md": p10,
  "11_why_creative_director.md": p11,
};

export const JOURNAL: JournalPost[] = JOURNAL_MANIFEST.map((meta) => ({
  ...meta,
  content: CONTENT[meta.file] ?? "",
}));

export function getPostBySlug(slug: string) {
  return JOURNAL.find((p) => p.slug === slug);
}

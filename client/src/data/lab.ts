import toritori from "../assets/toritori.webp";

export type LabStatus = "Concept" | "Experiment" | "In progress" | "Live" | "Archived";

export interface LabProject {
  number: number;
  slug: string;
  name: string;
  year: string;
  status: LabStatus;
  descriptor: string;
  cover?: string;
  premise?: string;
  direction?: string;
  why?: string;
}

// Ordered newest first. `number` is the persistent catalogue index — assigned
// chronologically so LAB.001 is always the earliest entry.
export const LAB: LabProject[] = [
  {
    number: 13,
    slug: "campfyre",
    name: "Campfyre",
    year: "2025",
    status: "In progress",
    descriptor:
      "A community for creators — and a way to make a living doing what they love.",
  },
  {
    number: 21,
    slug: "lantern",
    name: "Lantern",
    year: "2026",
    status: "In progress",
    descriptor:
      "Capital for Africa's creators — and the support that comes with it.",
  },
  {
    number: 20,
    slug: "the-creators-playbook",
    name: "The Creator's Playbook",
    year: "2026",
    status: "In progress",
    descriptor:
      "A free guide for creators making a real living doing what they love.",
  },
  {
    number: 19,
    slug: "casuwa",
    name: "Casuwa",
    year: "2026",
    status: "In progress",
    descriptor: "Africa's creator marketplace.",
  },
  {
    number: 18,
    slug: "cuddles",
    name: "Cuddles",
    year: "2026",
    status: "Experiment",
    descriptor: "A play-date app for parents and kids who need their tribe nearby.",
  },
  {
    number: 17,
    slug: "matchbox",
    name: "Matchbox",
    year: "2025",
    status: "In progress",
    descriptor: "Brand strategy for small businesses with big ambitions.",
  },
  {
    number: 16,
    slug: "onetake",
    name: "OneTake",
    year: "2025",
    status: "Experiment",
    descriptor: "Short films built around one moment, captured in one go.",
  },
  {
    number: 15,
    slug: "blackboard",
    name: "Blackboard",
    year: "2025",
    status: "Concept",
    descriptor:
      "Edutech for African children. Great learning, made to feel like it belongs to everyone.",
  },
  {
    number: 14,
    slug: "bonfyre",
    name: "Bonfyre",
    year: "2025",
    status: "Concept",
    descriptor: "A creative festival for Africa's creative class.",
  },
  {
    number: 12,
    slug: "viewing-center",
    name: "Viewing Center",
    year: "2025",
    status: "Concept",
    descriptor: "Football, watched the way Africans watch it — loud, together, and with stakes.",
  },
  {
    number: 11,
    slug: "mangoro",
    name: "Mangoro",
    year: "2025",
    status: "In progress",
    descriptor:
      "African high fashion streetwear, built for a generation moving between two worlds.",
  },
  {
    number: 10,
    slug: "fire-nation",
    name: "Fire Nation",
    year: "2024",
    status: "Concept",
    descriptor: "Nation building, in brand form. What a country looks like when it believes in itself.",
  },
  {
    number: 9,
    slug: "dream-factory",
    name: "Dream Factory",
    year: "2024",
    status: "Concept",
    descriptor: "A studio for ideas that don't have a category yet.",
  },
  {
    number: 8,
    slug: "fyreworks-foundation",
    name: "Fyreworks Foundation",
    year: "2024",
    status: "In progress",
    descriptor:
      "Shaping Africa's future by connecting and empowering the people building it — its youth.",
  },
  {
    number: 7,
    slug: "baki",
    name: "Baki",
    year: "2024",
    status: "Concept",
    descriptor: "Mother-tongue learning app identity.",
    premise:
      "A language app shouldn't feel like Duolingo for languages Duolingo doesn't care about. Baki is a concept identity for an app to learn Nigerian languages, built for the diaspora and the curious.",
    direction:
      "The visual system is a writing system. Each language gets its own typographic treatment inside one consistent structure. The brand frame is quiet; the letters are loud.",
    why: "Most learning tools design for scale. We wanted to design one that felt like a gift from a relative.",
  },
  {
    number: 6,
    slug: "ministry-of-enjoyment",
    name: "Ministry of Enjoyment",
    year: "2024",
    status: "Concept",
    descriptor: "Satirical identity for a fictional Nigerian federal ministry.",
    premise:
      "If Nigeria had a ministry charged with producing public joy on purpose, what would its brand look like? The Ministry of Enjoyment is a satirical identity with the full bureaucratic treatment — seal, letterhead, policy briefs, public signage.",
    direction:
      "Play it completely straight. No wink. The comedy is in the commitment to the format. Deadpan typography, civic colour palette, photography that treats a jollof competition with the same gravity as a state function.",
    why: "Because the funniest satire in branding is the kind that refuses to break character.",
  },
  {
    number: 5,
    slug: "katako",
    name: "Katako",
    year: "2024",
    status: "Concept",
    descriptor: "Afro-Japandi furniture brand concept.",
    premise:
      "What happens when the quiet restraint of Japanese joinery meets the material honesty of West African craft? Katako is a concept brand for furniture that doesn't choose between the two.",
    direction:
      "Identity stripped to the bone. Wood, paper, shadow. No illustrated ornament, no pattern, no logomark trying too hard. Typography does the work.",
    why: "To prove a category positioning that doesn't exist yet can be built purely through creative direction, before a single piece is made.",
  },
  {
    number: 4,
    slug: "toritori",
    name: "Toritori",
    year: "2024",
    status: "Concept",
    descriptor: "An African storytelling platform, imagined as a brand.",
    cover: toritori,
    premise:
      "What if African folklore was treated with the same editorial rigour as The Criterion Collection? Toritori is a concept brand for a platform that archives, reinterprets, and broadcasts African stories for a generation that grew up online.",
    direction:
      "Editorial, not ethnographic. The identity treats folklore as literature — typographic, restrained, confident — rather than leaning on the usual visual shorthand of African design.",
    why: "Because the default way African stories get packaged for the world is almost always the wrong way.",
  },
  {
    number: 3,
    slug: "lava",
    name: "Lava",
    year: "2024",
    status: "Live",
    descriptor: "Energy drink built on instinct, not algorithm.",
  },
  {
    number: 2,
    slug: "yanga",
    name: "YANGA",
    year: "2024",
    status: "Live",
    descriptor:
      "An editorial home for African fashion, culture, and the women shaping both.",
  },
  {
    number: 1,
    slug: "young",
    name: "YOUNG!",
    year: "2024",
    status: "Live",
    descriptor:
      "A storytelling brand documenting the stories of Africa's rising generation.",
  },
];

export function getLabBySlug(slug: string) {
  return LAB.find((p) => p.slug === slug);
}

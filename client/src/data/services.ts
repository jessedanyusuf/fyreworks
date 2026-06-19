export interface Service {
  word: string;
  outcome: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    word: "Identity",
    outcome: "Stop being forgettable. Start being recognized.",
    description:
      "Naming, logos, graphic design, typography, color, systems. The visual and verbal language that makes a brand recognizable before a word is read.",
  },
  {
    word: "Story",
    outcome: "Say it like you mean it.",
    description:
      "The brand telling its own story — Photography, film, social media, podcast, long-form writing. Content that carries a point of view, in its own voice.",
  },
  {
    word: "Web",
    outcome: "A site where your story finds its voice.",
    description:
      "From strategy to structure, copy to code — we build digital spaces that breathe like the brand.",
  },
  {
    word: "Campaign",
    outcome: "Don't make noise. Make a movement.",
    description:
      "Creative direction for launches, repositions, and campaigns. Defined-moment engagements that move the brand forward.",
  },
  {
    word: "Product",
    outcome: "Where taste becomes tangible.",
    description:
      "Packaging, interfaces, printed matter, physical goods. The brand at the point where it meets the world.",
  },
  {
    word: "Experience",
    outcome: "What people say about you when you leave the room.",
    description:
      "Events, environments, and the arc of how a brand feels over time. The compound of every touchpoint, directed.",
  },
  {
    word: "Direction",
    outcome: "A creative director on call.",
    description: "Ongoing creative direction tied to the outcomes that matter.",
  },
];

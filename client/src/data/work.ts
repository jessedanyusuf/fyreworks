import lavaIce from "../assets/lava-ice.webp";
import philipDadaJr from "../assets/philip-dada-jr.webp";
import yanga from "../assets/yanga.webp";
import young from "../assets/young.webp";
import shushi from "../assets/shushi.jpg";
import ebeweleBrown from "../assets/ebewele-brown.webp";
import smcStethoscope from "../assets/smc-stethoscope.webp";
import shenation from "../assets/shenation.webp";

export interface WorkProject {
  slug: string;
  name: string;
  descriptor: string;
  year?: string;
  roles: string[];
  cover: string;
  featured?: boolean;
  brief?: string;
  direction?: string[];
  outcome?: string;
  credits?: { role: string; name: string }[];
}

export const WORK: WorkProject[] = [
  {
    slug: "lava",
    name: "LAVA",
    descriptor: "Energy drink brand built on instinct, not algorithm.",
    roles: ["Brand identity", "Strategy", "Creative direction"],
    cover: lavaIce,
    featured: true,
  },
  {
    slug: "young",
    name: "YOUNG!",
    descriptor: "A storytelling platform documenting Africa's youth.",
    roles: ["Brand identity", "Content strategy", "Editorial direction"],
    cover: young,
    featured: true,
  },
  {
    slug: "shenation",
    name: "SheNation",
    descriptor: "Brand and digital presence for a women's empowerment platform.",
    roles: ["Brand identity", "Website", "Creative direction"],
    cover: shenation,
    featured: true,
  },
  {
    slug: "yanga",
    name: "YANGA",
    descriptor: "Social-first magazine and lifestyle brand for women.",
    roles: ["Brand identity", "Content", "Strategy"],
    cover: yanga,
    featured: true,
  },
  {
    slug: "philip-dada-jr",
    name: "Philip Dada Jr.",
    descriptor: "Menswear brand identity and positioning.",
    roles: ["Brand identity", "Strategy", "Creative direction"],
    cover: philipDadaJr,
  },
  {
    slug: "shushi",
    name: "SHUSHI",
    descriptor: "Eyewear brand built around a single design idea.",
    roles: ["Brand identity", "Creative direction", "Strategy"],
    cover: shushi,
  },
  {
    slug: "ebewele-brown",
    name: "Ebewele Brown",
    descriptor: "Menswear brand creative direction and content strategy.",
    roles: ["Creative direction", "Content strategy"],
    cover: ebeweleBrown,
  },
  {
    slug: "siloan-medical",
    name: "Siloan Medical Center",
    descriptor: "Healthcare brand creative and digital presence.",
    roles: ["Creative direction", "Website"],
    cover: smcStethoscope,
  },
];

export const FEATURED_WORK = WORK.filter((p) => p.featured);

export function getWorkBySlug(slug: string) {
  return WORK.find((p) => p.slug === slug);
}

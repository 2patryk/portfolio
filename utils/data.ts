import enLocale from "./pano/en.json";
import plLocale from "./pano/pl.json";

// ─── Enums ────────────────────────────────────────────────────────────────────

export enum PanoCountry {
  Greece = "greece",
  Spain = "spain",
  Portugal = "portugal",
  Poland = "poland",
}

export enum PanoRegion {
  Crete = "crete",
  Fuerteventura = "fuerteventura",
  Lisbon = "lisbon",
  Lodz = "lodz",
  Wroclaw = "wroclaw",
}

export enum PanoCategory {
  Beach = "beach",
  City = "city",
  Nature = "nature",
  Architecture = "architecture",
}

// ─── Locales ──────────────────────────────────────────────────────────────────

export type PanoLang = "en" | "pl";

export const panoCopy: Record<PanoLang, typeof enLocale> = { en: enLocale, pl: plLocale };

// ─── Types ────────────────────────────────────────────────────────────────────

export type PanoType = {
  src: string;
  planet: string;
  slug: string;
  region: PanoRegion;
  country: PanoCountry;
  categories: PanoCategory[];
  hidden?: boolean;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const withPlanet = (entry: Omit<PanoType, "planet">): PanoType => ({
  ...entry,
  planet: entry.src.replace("/images/pano/", "/images/pano/planets/"),
});

export const getPanoText = (pano: PanoType, lang: PanoLang = "en") => {
  const l = panoCopy[lang];
  const en = panoCopy.en;
  return {
    place: l.places[pano.slug as keyof typeof en.places] ?? en.places[pano.slug as keyof typeof en.places],
    region: l.regions[pano.region] ?? en.regions[pano.region],
    country: l.countries[pano.country] ?? en.countries[pano.country],
  };
};

export const getPanoCategoryLabel = (category: PanoCategory, lang: PanoLang = "en") =>
  panoCopy[lang].categories[category];

// ─── Data ─────────────────────────────────────────────────────────────────────

export const PANO_DATA: PanoType[] = [
  withPlanet({ src: "/images/pano/balos.jpg", slug: "balos", region: PanoRegion.Crete, country: PanoCountry.Greece, categories: [PanoCategory.Beach, PanoCategory.Nature] }),
  withPlanet({ src: "/images/pano/ela.jpg", slug: "elafonissi", region: PanoRegion.Crete, country: PanoCountry.Greece, categories: [PanoCategory.Beach, PanoCategory.Nature] }),
  withPlanet({ src: "/images/pano/fue.jpg", slug: "costa-calma", region: PanoRegion.Fuerteventura, country: PanoCountry.Spain, categories: [PanoCategory.Beach, PanoCategory.Nature] }),
  withPlanet({ src: "/images/pano/liz.jpg", slug: "alfama", region: PanoRegion.Lisbon, country: PanoCountry.Portugal, categories: [PanoCategory.City, PanoCategory.Architecture] }),
  withPlanet({ src: "/images/pano/liz2.jpg", slug: "lisbon", region: PanoRegion.Lisbon, country: PanoCountry.Portugal, categories: [PanoCategory.City, PanoCategory.Architecture] }),
  withPlanet({ src: "/images/pano/lks.jpg", slug: "lks-lodz", region: PanoRegion.Lodz, country: PanoCountry.Poland, categories: [PanoCategory.City, PanoCategory.Architecture] }),
  withPlanet({ src: "/images/pano/vul.jpg", slug: "calderon-hondo", region: PanoRegion.Fuerteventura, country: PanoCountry.Spain, categories: [PanoCategory.Nature] }),
  withPlanet({ src: "/images/pano/wro.jpg", slug: "wroclaw", region: PanoRegion.Wroclaw, country: PanoCountry.Poland, categories: [PanoCategory.City, PanoCategory.Architecture] }),
  withPlanet({ src: "/images/pano/fue2.jpg", slug: "playa-pared", region: PanoRegion.Fuerteventura, country: PanoCountry.Spain, categories: [PanoCategory.Beach, PanoCategory.Nature] }),
  withPlanet({ src: "/images/pano/wro2.jpg", slug: "wroclaw-odra", region: PanoRegion.Wroclaw, country: PanoCountry.Poland, categories: [PanoCategory.City, PanoCategory.Nature] }),
  withPlanet({ src: "/images/pano/m1.jpg", slug: "maczka-1", region: PanoRegion.Lodz, country: PanoCountry.Poland, categories: [PanoCategory.Architecture], hidden: true }),
  withPlanet({ src: "/images/pano/m2.jpg", slug: "maczka-2", region: PanoRegion.Lodz, country: PanoCountry.Poland, categories: [PanoCategory.Architecture], hidden: true }),
];

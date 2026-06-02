export type PanoType = {
  src: string;
  planet: string;
  place: string;
  country: string;
  region: string;
  slug: string;
  hidden?: boolean;
};

const withPlanet = (entry: Omit<PanoType, "planet">): PanoType => ({
  ...entry,
  planet: entry.src.replace("/images/pano/", "/images/pano/planets/"),
});

export const PANO_DATA: PanoType[] = [
  withPlanet({ src: "/images/pano/balos.jpg", place: "Balos", country: "Greece", region: "Crete", slug: "balos" }),
  withPlanet({ src: "/images/pano/ela.jpg", place: "Elafonissi", country: "Greece", region: "Crete", slug: "elafonissi" }),
  withPlanet({ src: "/images/pano/fue.jpg", place: "Costa Calma", region: "Fuerteventura", country: "Spain", slug: "costa-calma" }),
  withPlanet({ src: "/images/pano/liz.jpg", place: "Alfama", region: "Lisbon", country: "Portugal", slug: "alfama" }),
  withPlanet({ src: "/images/pano/liz2.jpg", place: "Ponte 25 de Abril", region: "Lisbon", country: "Portugal", slug: "lisbon" }),
  withPlanet({ src: "/images/pano/lks.jpg", place: "ŁKS Stadium", region: "Łódź", country: "Poland", slug: "lks-lodz" }),
  withPlanet({ src: "/images/pano/vul.jpg", place: "Calderón Hondo", region: "Fuerteventura", country: "Spain", slug: "calderon-hondo" }),
  withPlanet({ src: "/images/pano/wro.jpg", place: "Market Square", region: "Wrocław", country: "Poland", slug: "wroclaw" }),
  withPlanet({ src: "/images/pano/fue2.jpg", place: "Playa de la Pared", region: "Fuerteventura", country: "Spain", slug: "playa-pared" }),
  withPlanet({ src: "/images/pano/wro2.jpg", place: "Odra sunset", region: "Wrocław", country: "Poland", slug: "wroclaw-odra" }),
  withPlanet({ src: "/images/pano/m1.jpg", place: "Maczka budowa", region: "Łódź", country: "Poland", slug: "maczka-1", hidden: true }),
  withPlanet({ src: "/images/pano/m2.jpg", place: "Maczka budowa", region: "Łódź", country: "Poland", slug: "maczka-2", hidden: true }),
];

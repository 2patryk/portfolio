import { PANO_DATA, getPanoText } from "@/utils/data";
import { Metadata } from "next";
import Pano from "@/components/organisms/Pano/PanoClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PANO_DATA.map((pano) => ({ slug: pano.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pano = PANO_DATA.find((p) => p.slug === slug);

  if (!pano) return { title: "Pano – Patryk Ordon" };

  const { place, region, country } = getPanoText(pano);
  const title = `${place}, ${region} – Pano by Patryk Ordon`;
  const description = `360° panorama of ${place}, ${region}, ${country}. An immersive panoramic photograph by Patryk Ordon.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [pano.planet],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pano.planet],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pano = PANO_DATA.find((p) => p.slug === slug);

  return <>{pano && <Pano pano={pano} />}</>;
}

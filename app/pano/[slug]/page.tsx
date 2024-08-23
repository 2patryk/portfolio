import { PANO_DATA, PanoType } from "@/utils/data";
import dynamic from "next/dynamic";

const Pano = dynamic(() => import("@/components/organisms/Pano/Pano"), { ssr: false });

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
};

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
  return PANO_DATA.map((pano) => ({
    slug: pano.slug,
    pano: pano.country,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: PageProps) {
  const pano = PANO_DATA.find((_pano) => _pano.slug === params.slug);

  return <>{pano && <Pano pano={pano} />}</>;
}

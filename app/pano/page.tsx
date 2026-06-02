import PanoGrid from "@/components/organisms/PanoGrid/PanoGrid";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pano – Patryk Ordon",
  description:
    "A collection of 360° panoramic photographs by Patryk Ordon. Explore immersive panoramas from Greece, Spain, Portugal, Poland and more.",
  openGraph: {
    title: "Pano – Patryk Ordon",
    description:
      "A collection of 360° panoramic photographs by Patryk Ordon. Explore immersive panoramas from Greece, Spain, Portugal, Poland and more.",
    images: ["/images/pano/planets/balos.jpg"],
  },
};

export default function PanoPage() {
  return (
    <Suspense>
      <PanoGrid />
    </Suspense>
  );
}

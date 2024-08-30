import HomePage from "@/containers/HomePage/HomePage";
import { globalCopy } from "@/utils/copy";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...globalCopy.meta.index,
  openGraph: {
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return <HomePage />;
}

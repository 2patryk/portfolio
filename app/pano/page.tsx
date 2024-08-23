import PanoNavigation from "@/components/PanoNavigation/PanoNavigation";
import dynamic from "next/dynamic";

const Pano = dynamic(() => import("@/components/organisms/Pano/Pano"), { ssr: false });

export default function Home() {
  return (
    <main>
      <PanoNavigation />
    </main>
  );
}

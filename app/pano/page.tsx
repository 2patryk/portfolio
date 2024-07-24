import Navigation from "@/components/Navigation/Navigation";
import dynamic from "next/dynamic";

const Pano = dynamic(() => import("@/components/Pano/Pano"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navigation />
    </main>
  );
}

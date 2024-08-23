import { globalCopy } from "@/utils/copy";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...globalCopy.meta.index,
};

export default function Home() {
  return null;
  // <main>
  //   <Header />
  // </main>
}

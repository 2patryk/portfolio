import HomePage from "@/containers/HomePage/HomePage";
import { globalCopy } from "@/utils/copy";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...globalCopy.meta.index,
};

export default function Home() {
  return <HomePage />;
}

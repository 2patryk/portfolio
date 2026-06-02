"use client";

import Loading from "@/components/molecules/Loading/Loading";
import Header from "@/components/molecules/Header/Header";
import { useGlobalStore } from "@/utils/global.store";
import { useEffect } from "react";
import { checkIfMobile } from "@/utils/platform";
import { AnimatePresence } from "framer-motion";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, setIsLoading, setIsDesktop, headerTheme } =
    useGlobalStore();

  useEffect(() => {
    setIsLoading(false);
    setIsDesktop(!checkIfMobile());
  }, []);

  return (
    <>
      <Header overrideTheme={headerTheme} />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <Loading isLoading={isLoading} />
    </>
  );
}

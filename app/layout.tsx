"use client";

import { Figtree, Syne } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils/styles/theme";
import GlobalStyles from "@/utils/styles/globalStyles";
import { getTheme } from "@/utils/styles/getTheme";
import Loading from "@/components/molecules/Loading/Loading";
import { useGlobalStore } from "@/utils/global.store";
import Header from "@/components/molecules/Header/Header";
import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { checkIfMobile } from "@/utils/platform";
import { AnimatePresence } from "framer-motion";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--syne",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--figtree",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, setIsLoading, setIsDesktop, isDesktop, headerTheme } =
    useGlobalStore();

  useEffect(() => {
    setIsLoading(false);
    setIsDesktop(!checkIfMobile());
  }, []);

  return (
    <html
      suppressHydrationWarning
      className={`${figtree.variable} ${syne.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header overrideTheme={headerTheme} />
            <AnimatePresence mode="wait">{children}</AnimatePresence>
            <Loading isLoading={isLoading} />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-VDMMJE25JQ" />
    </html>
  );
}

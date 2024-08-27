"use client";

import { Figtree, Syne } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils/styles/theme";
import GlobalStyles from "@/utils/styles/globalStyles";
import { getTheme } from "@/utils/styles/getTheme";
import Loading from "@/components/molecules/Loading/Loading";
import { useGlobalStore } from "@/utils/global.store";
// import { useTimer } from "use-timer";
import Header from "@/components/molecules/Header/Header";
import { useEffect } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'


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
  const { isLoading, setIsLoading } = useGlobalStore();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // useTimer({
  //   autostart: true,
  //   initialTime: 0,
  //   endTime: 0,
  //   timerType: "INCREMENTAL",
  //   onTimeOver: () => {
  //     setIsLoading(false);
  //   },
  // });

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
            <Header />
            {children}
            <Loading isLoading={isLoading} />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-VDMMJE25JQ" />
    </html>
  );
}

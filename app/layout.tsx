"use client";

import { Space_Grotesk, Figtree } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils/styles/theme";
import GlobalStyles from "@/utils/styles/globalStyles";
import { getTheme } from "@/utils/styles/getTheme";
import Loading from "@/components/molecules/Loading/Loading";
import { useGlobalStore } from "@/utils/global.store";
import { useEffect } from "react";
import { useTimer } from "use-timer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--space-grotesk",
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

  useTimer({
    autostart: true,
    initialTime: 0,
    endTime: 1,
    timerType: "INCREMENTAL",
    onTimeOver: () => {
      setIsLoading(false);
    },
  });

  return (
    <html
      suppressHydrationWarning
      className={`${figtree.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
            <Loading isLoading={isLoading} />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

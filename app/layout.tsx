"use client";

import { Figtree, Syne } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils/styles/theme";
import GlobalStyles from "@/utils/styles/globalStyles";
import { getTheme } from "@/utils/styles/getTheme";
import { criticalThemeCss } from "@/utils/styles/criticalThemeCss";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  return (
    <html
      suppressHydrationWarning
      className={`${figtree.variable} ${syne.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalThemeCss }} />
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-VDMMJE25JQ" />
    </html>
  );
}

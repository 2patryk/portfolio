"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import usePrefersColorScheme from "@/hooks/usePrefersColorScheme";
import { darkTheme, lightTheme } from "@/utils/styles/theme";
import GlobalStyles from "@/utils/styles/globalStyles";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Patryk Ordon site",
//   description: "---",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorScheme = usePrefersColorScheme();

  return (
    <html>
      <body>
        <main>
          <StyledComponentsRegistry>
            <ThemeProvider
              theme={colorScheme === "dark" ? darkTheme : lightTheme}
            >
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}

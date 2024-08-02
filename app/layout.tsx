"use client";

import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils/styles/theme";
import GlobalStyles from "@/utils/styles/globalStyles";
import { getTheme } from "@/utils/styles/getTheme";

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
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body>
        <main>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}

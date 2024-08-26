import { darkTheme, lightTheme } from "../utils/styles/theme";
import type { Preview } from "@storybook/react";
import GlobalStyles from "../utils/styles/globalStyles";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";

import { Figtree, Syne } from "next/font/google";
import React from "react";

export const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--syne",
});

export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--figtree",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
    (Story) => (
      <div className={`${figtree.variable} ${syne.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

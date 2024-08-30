import { RuleSet } from "styled-components";
import { breakpointDesktop } from "../vars";
import { processTypography } from "./mixins";

export enum ColorNames {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  textPrimary = "textPrimary",
  textSecondary = "textSecondary",
  textInverted = "textInverted",
  background = "background",
  backgroundExtra = "backgroundExtra",
  light = "light",
  dark = "dark",
}

export enum Font {
  figtree = "var(--figtree)",
  syne = "var(--syne)",
}

export type Typography = {
  fontFamily: Font;
  size: number; // rem
  lineHeight?: number;
  fontWeight?: number;
};

export const typography = {
  h1: {
    fontFamily: Font.syne,
    size: 36,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h1Extra: {
    fontFamily: Font.syne,
    size: 28,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: Font.syne,
    size: 20,
    fontWeight: 750,
  },
  h3: {
    fontFamily: Font.syne,
    size: 18,
    fontWeight: 400,
  },
  h4: {
    fontFamily: Font.syne,
    size: 14,
    fontWeight: 720,
    lineHeight: 1,
  },
  h5: {
    fontFamily: Font.syne,
    size: 12,
    fontWeight: 720,
    lineHeight: 1,
  },
  body: {
    fontFamily: Font.figtree,
    size: 11.5,
    fontWeight: 300,
    lineHeight: 1.4,
  },
  cta: {
    fontFamily: Font.syne,
    size: 12,
    fontWeight: 700,
    lineHeight: 1,
  },
} satisfies Record<string, Typography>;

export type Theme = {
  colors: Record<ColorNames, string>;
  fonts: Record<keyof typeof Font, string>;
  spacing: (multiplier: number) => string;
  layout: {
    maxWidth: string;
  };
  zIndex: {
    loading: number;
    header: number;
  };
  typography: (name: keyof typeof typography) => RuleSet<object>;
};

export const lightColors: Record<ColorNames, string> = {
  primary: "#52B788",
  secondary: "#74C69D",
  tertiary: "#40916C",
  textPrimary: "#081C15",
  textSecondary: "#394943",
  textInverted: "#B7E4C7",
  background: "#e5e1dd",
  backgroundExtra: "#ddd8d2",
  light: "#D8F3DC",
  dark: "#1a1d20",
};

export const darkColors: Record<ColorNames, string> = {
  primary: "#52B788",
  secondary: "#74C69D",
  tertiary: "#40916C",
  textPrimary: "#D8F3DC",
  textSecondary: "#acc2b0",
  textInverted: "#1B4332",
  background: "#1a1d20",
  backgroundExtra: "#212529",
  light: "#D8F3DC",
  dark: "#1a1d20",
};

export const theme: Theme = {
  colors: Object.keys(lightColors).reduce(
    (a, v) => ({ ...a, [v]: `var(--${v})` }),
    {}
  ) as Record<ColorNames, string>,
  spacing: (multiplier) => `${multiplier * 8}rem`,
  layout: {
    maxWidth: `${breakpointDesktop}px`,
  },
  zIndex: {
    loading: 5,
    header: 4,
  },
  fonts: {
    figtree: Font.figtree,
    syne: Font.syne,
  },
  typography: (name) => processTypography(typography[name]),
};

export const lightTheme = { ...theme, colors: lightColors };

export const darkTheme = { ...theme, colors: darkColors };

const colorPalette = {
  primary: "#1A1A2E", // Deep Navy Blue
  secondary: "#0F3460", // Electric Blue
  accent: "#00D2FF", // Vibrant Cyan
  complementary: "#FF6B6B", // Soft Coral
  neutral: "#F0F0F0", // Light Grey
  text: "#F5F5F5", // Off-White
  shadow: "#2E2E3A", // Dark Slate Gray
};

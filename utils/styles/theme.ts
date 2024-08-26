import { breakpointDesktop } from "../vars";

export enum ColorNames {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  textPrimary = "textPrimary",
  textSecondary = "textSecondary",
  textInverted = "textInverted",
  background = "background",
  backgroundExtra = "backgroundExtra",
}

export type Theme = {
  colors: Record<ColorNames, string>;
  fonts: {
    text: string;
    heading: string;
  };
  spacing: (multiplier: number) => string;
  layout: {
    maxWidth: string;
  };
  zIndex: {
    loading: number;
    header: number;
  };
};

export const lightColors: Record<ColorNames, string> = {
  primary: "#52B788",
  secondary: "#74C69D",
  tertiary: "#40916C",
  textPrimary: "#081C15",
  textSecondary: "#1B4332",
  textInverted: "#B7E4C7",
  background: "#e5e1dd",
  backgroundExtra: "#ddd8d2",
};

export const darkColors: Record<ColorNames, string> = {
  primary: "#52B788",
  secondary: "#74C69D",
  tertiary: "#40916C",
  textPrimary: "#D8F3DC",
  textSecondary: "#95D5B2",
  textInverted: "#1B4332",
  background: "#1a1d20",
  backgroundExtra: "#212529",
};

export const theme: Theme = {
  colors: Object.keys(lightColors).reduce(
    (a, v) => ({ ...a, [v]: `var(--${v})` }),
    {}
  ) as Record<ColorNames, string>,
  fonts: {
    text: "var(--figtree)",
    heading: "var(--syne)",
  },
  spacing: (multiplier: number) => `${multiplier * 8}rem`,
  layout: {
    maxWidth: `${breakpointDesktop}px`,
  },
  zIndex: {
    loading: 5,
    header: 4,
  },
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

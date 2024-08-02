import { breakpointDesktop } from "../vars";

export enum ColorNames {
  primary = "primary",
  secondary = "secondary",
  textPrimary = "textPrimary",
  textSecondary = "textSecondary",
  textInverted = "textInverted",
  background = "background",
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
};

export const lightColors: Record<ColorNames, string> = {
  primary: "#000",
  secondary: "#fff",
  textPrimary: "#000",
  textSecondary: "#fff",
  textInverted: "#fff",
  background: "#f8f4f4",
};

export const darkColors: Record<ColorNames, string> = {
  primary: "#fff",
  secondary: "#000",
  textPrimary: "#fff",
  textSecondary: "#000",
  textInverted: "#000",
  background: "#201c1c",
};

export const theme = {
  colors: Object.keys(lightColors).reduce(
    (a, v) => ({ ...a, [v]: `var(--${v})` }),
    {}
  ) as Record<ColorNames, string>,
  fonts: {
    text: "var(--figtree)",
    heading: "var(--space-grotesk)",
  },
  spacing: (multiplier: number) => `${multiplier * 8}rem`,
  layout: {
    maxWidth: `${breakpointDesktop}px`,
  },
};

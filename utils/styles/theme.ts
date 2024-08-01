import { breakpointDesktop } from "../vars";

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    text: {
      primary: string;
      secondary: string;
      inverted: string;
    };
    background: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  spacing: (multiplier: number) => string;
  layout: {
    maxWidth: string;
  };
};

export const commonTheme = {
  colors: {
    primary: "",
    secondary: "",
    text: {
      primary: "",
      secondary: "",
      inverted: "",
    },
    background: "",
  },
  fonts: {
    primary: "",
    secondary: "",
  },
  spacing: (multiplier: number) => `${multiplier * 8}rem`,
  layout: {
    maxWidth: `${breakpointDesktop}px`,
  },
};

export const lightTheme: Theme = {
  ...commonTheme,
  colors: {
    primary: "#000",
    secondary: "#fff",
    text: {
      primary: "#000",
      secondary: "#fff",
      inverted: "#fff",
    },
    background: "#f8f4f4",
  },
};

export const darkTheme: Theme = {
  ...commonTheme,
  colors: {
    primary: "#fff",
    secondary: "#000",
    text: {
      primary: "#fff",
      secondary: "#000",
      inverted: "#000",
    },
    background: "#201c1c",
  },
};

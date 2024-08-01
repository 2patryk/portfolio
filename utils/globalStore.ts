import { create } from "zustand";
import { LOCAL_STORAGE_COLOR_SCHEME_KEY } from "./vars";

type ColorScheme = "light" | "dark";

interface GlobalStore {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
}

export const getInitialColorScheme = (): ColorScheme => {
  const savedPreference = localStorage.getItem(
    LOCAL_STORAGE_COLOR_SCHEME_KEY
  ) as ColorScheme | null;
  if (savedPreference) {
    return savedPreference;
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

export const useGlobalStore = create<GlobalStore>()((set) => ({
  colorScheme: getInitialColorScheme(),
  setColorScheme: (colorScheme) => set(() => ({ colorScheme: colorScheme })),
}));

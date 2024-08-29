import { create } from "zustand";

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isDesktop: boolean;
  setIsDesktop: (isDesktop: boolean) => void;
  headerTheme?: "light" | "dark"; // Use only for override default color theme
  setHeaderTheme: (theme?: "light" | "dark") => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
  isDesktop: false,
  setIsDesktop: (state) => set({ isDesktop: state }),
  headerTheme: undefined,
  setHeaderTheme: (theme) => set({ headerTheme: theme }),
}));

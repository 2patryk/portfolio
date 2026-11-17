import { create } from "zustand";

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isDesktop: boolean;
  setIsDesktop: (isDesktop: boolean) => void;
  isLoaderVisible: boolean; // Loading overlay is shown (until it starts leaving)
  setIsLoaderVisible: (isLoaderVisible: boolean) => void;
  headerTheme?: "light" | "dark"; // Use only for override default color theme
  setHeaderTheme: (theme?: "light" | "dark") => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
  isDesktop: false,
  setIsDesktop: (state) => set({ isDesktop: state }),
  isLoaderVisible: true,
  setIsLoaderVisible: (state) => set({ isLoaderVisible: state }),
  headerTheme: undefined,
  setHeaderTheme: (theme) => set({ headerTheme: theme }),
}));

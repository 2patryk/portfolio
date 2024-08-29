import { create } from "zustand";

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isDesktop: boolean;
  setIsDesktop: (isDesktop: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
  isDesktop: false,
  setIsDesktop: (state) => set({ isDesktop: state }),
}));

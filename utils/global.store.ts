import { create } from "zustand";

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
}));

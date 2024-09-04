import { create } from "zustand";

// global state store for all components
export interface Store {
  activeSection: string;
  setActiveSection: (val: string) => void;
}

const initialStore = {
  activeSection: "design",
};

export const useStore = create<Store>()((set) => ({
  ...initialStore,
  setActiveSection: (val) => set(() => ({ activeSection: val })),
}));

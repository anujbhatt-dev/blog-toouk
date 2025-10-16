// store/sidebarStore.ts
import { create } from "zustand";

interface SidebarState {
  enabled: boolean; // open/closed for both desktop + mobile
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  enabled: false,

  toggle: () => set((state) => ({ enabled: !state.enabled })),
  open: () => set({ enabled: true }),
  close: () => set({ enabled: false }),
}));

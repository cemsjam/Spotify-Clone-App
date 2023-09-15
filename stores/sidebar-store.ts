import { create } from "zustand";

interface SidebarStates {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStates>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

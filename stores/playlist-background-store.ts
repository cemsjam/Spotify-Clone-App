import { create } from "zustand";

interface BackgroundStoreStates {
	currentPlaylistCoverUrl: string;
	setCurrentPlaylistCoverUrl: (url: string) => void;
}

export const useBackgroundStore = create<BackgroundStoreStates>((set) => ({
	currentPlaylistCoverUrl: "",
	setCurrentPlaylistCoverUrl: (url: string) => set({ currentPlaylistCoverUrl: url }),
}));

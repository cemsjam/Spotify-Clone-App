import { Track } from "@/types";
import { create } from "zustand";

interface TrackState {
	currentTrack: string | null | Track;
	setCurrentTrack: (track: string) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
	currentTrack: null,
	setCurrentTrack: (newTrack: string) => set({ currentTrack: newTrack }),
}));

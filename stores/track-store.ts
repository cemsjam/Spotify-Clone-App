import { Track } from "@/types";
import { create } from "zustand";

interface TrackState {
	currentTrack: string;
	setCurrentTrack: (track: string) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
	currentTrack: "spotify:artist:3q7HBObVc0L8jNeTe5Gofh",
	setCurrentTrack: (newTrack: string) => set({ currentTrack: newTrack }),
}));

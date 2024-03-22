import { Track } from "@/types";
import { create } from "zustand";

interface TrackState {
	currentTrack: string;
	setCurrentTrack: (track: string) => void;
	currentState: string;
	setCurrentState: (track: string) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
	currentTrack: "spotify:artist:3q7HBObVc0L8jNeTe5Gofh",
	currentState: "paused",
	setCurrentTrack: (newTrack: string) => set({ currentTrack: newTrack }),
	setCurrentState: (newState: string) => set({ currentState: newState }),
}));

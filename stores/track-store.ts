import { Track } from "@/types";
import { create } from "zustand";

// interface TrackState {
// 	currentTrack: string;
// 	setCurrentTrack: (track: string) => void;
// 	currentState: string;
// 	setCurrentState: (track: string) => void;
// }

// export const useTrackStore = create<TrackState>((set) => ({
// 	currentTrack: "spotify:artist:3q7HBObVc0L8jNeTe5Gofh",
// 	currentState: "paused",
// 	setCurrentTrack: (newTrack: string) => set({ currentTrack: newTrack }),
// 	setCurrentState: (newState: string) => set({ currentState: newState }),
// }));
interface TrackState {
	currentPlaylist: string;
	currentTrack: string; // Store the URI of the currently playing track
	isPlaying: boolean; // Store the playback state (playing or paused)
	setCurrentTrack: (trackUri: string) => void;
	setCurrentPlaylist: (playlistUri: string) => void;
	setIsPlaying: (currentState: boolean) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
	currentTrack: "", // Initialize with empty string
	currentPlaylist: "",
	isPlaying: false, // Initialize with false
	setCurrentTrack: (trackUri: string) => set({ currentTrack: trackUri }),
	setCurrentPlaylist: (playlistUri: string) => set({ currentPlaylist: playlistUri }),
	setIsPlaying: (currentState: boolean) => set({ isPlaying: currentState }),
}));

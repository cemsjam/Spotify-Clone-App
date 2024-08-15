import { create } from "zustand";

interface TrackState {
	offset: number;
	setOffset: (number: number) => void;
	currentPlaylist: string;
	currentTrack: string; // Store the URI of the currently playing track
	isPlaying: boolean; // Store the playback state (playing or paused)

	setCurrentTrack: (trackUri: string) => void;
	setCurrentPlaylist: (playlistUri: string) => void;
	setIsPlaying: (value: boolean) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
	currentTrack: "", // Initialize with empty string
	currentPlaylist: "",
	isPlaying: false, // Initialize with false
	offset: 0,

	setOffset: (number) => set({ offset: number }),
	setCurrentTrack: (trackUri: string) => set({ currentTrack: trackUri }),
	setCurrentPlaylist: (playlistUri: string) => set({ currentPlaylist: playlistUri }),
	setIsPlaying: (value: boolean) => set({ isPlaying: value }),
}));

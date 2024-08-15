"use client";

import { useTrackStore } from "@/stores/track-store";
import SpotifyPlayer from "react-spotify-web-playback";

interface FooterPlayerProps {
	token: string;
}
export const FooterPlayer = ({ token }: FooterPlayerProps) => {
	const { currentPlaylist, isPlaying, setIsPlaying, setCurrentTrack, currentTrack, offset } = useTrackStore();

	return (
		<SpotifyPlayer
			token={token}
			uris={currentPlaylist}
			play={isPlaying}
			offset={offset}
			callback={(state) => {
				console.log(state);
				if (state.track.uri !== currentTrack) {
					setCurrentTrack(state.track.uri);
				}
				// player clicks are handled here
				// if (state.isPlaying !== isPlaying) {
				// 	setIsPlaying(true);
				// }
			}}
			inlineVolume
			initialVolume={0.5}
			styles={{
				activeColor: "#1ed760",
				bgColor: "#000",
				color: "#a7a7a7",
				loaderColor: "#fff",
				sliderColor: "#fff",
				trackArtistColor: "#b3b3b3",
				trackNameColor: "#fff",
				sliderHandleColor: "#fff",
				sliderTrackColor: "#ffffff4d",
				height: 64,
			}}
		/>
	);
};

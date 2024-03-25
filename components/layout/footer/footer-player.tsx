"use client";
import { useTrackStore } from "@/stores/track-store";
import SpotifyPlayer from "react-spotify-web-playback";

interface FooterPlayerProps {
	token: string;
}
export const FooterPlayer = ({ token }: FooterPlayerProps) => {
	const { currentPlaylist, isPlaying, setIsPlaying, setCurrentTrack } = useTrackStore();
	return (
		<SpotifyPlayer
			token={token}
			uris={currentPlaylist}
			key={"spotify-player"}
			syncExternalDevice
			play={isPlaying}
			callback={(state) => {
				console.log(state);
				setIsPlaying(state.isPlaying);
				setCurrentTrack(state.track.uri);
			}}
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

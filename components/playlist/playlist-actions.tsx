"use client";
import { BiPlay, BiPause } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

import { useTrackStore } from "@/stores/track-store";

import { Button } from "@/components/shadcn/button";
import { ActionTooltip } from "@/components/ActionTooltip";
import { useToast } from "@/hooks/use-toast";

export const PlaylistActions = ({ label, playlistUri }: { label: string; playlistUri: string }) => {
	const { currentPlaylist, setCurrentPlaylist, isPlaying, setIsPlaying } = useTrackStore();
	const { toast } = useToast();

	const handlePlayButtonClick = () => {
		if (currentPlaylist !== playlistUri) {
			setCurrentPlaylist(playlistUri);
			setIsPlaying(true);
		} else {
			setIsPlaying(!isPlaying);
		}
	};

	const isPlaylistActivePlaying = currentPlaylist === playlistUri && isPlaying;
	return (
		<div className="p-6 flex items-center">
			<ActionTooltip side="bottom" label={`Play ${label}`}>
				<Button
					type="button"
					className="w-14 h-14 rounded-full bg-primary mr-6 lg:mr-8 hover:bg-primaryHighlight hover:scale-110"
					onClick={handlePlayButtonClick}
				>
					<span className="w-6 h-6 text-black">
						{isPlaylistActivePlaying ? (
							<>
								<BiPause className="w-full h-full" />
								<span className="sr-only">Pause</span>
							</>
						) : (
							<>
								<BiPlay className="w-full h-full" />
								<span className="sr-only">Play</span>
							</>
						)}
					</span>
				</Button>
			</ActionTooltip>
			<ActionTooltip side="top" label={`More Options For ${label}`}>
				<button
					onClick={(e) => {
						e.preventDefault();
						toast({
							description: "“For demonstration purposes only, no functionality is active.”",
						});
					}}
					type="button"
					className="py-3 text-subduedText hover:text-baseText hover:scale-105"
				>
					<span>
						<FiMoreHorizontal className="w-8 h-8" />
					</span>
					<span className="sr-only">More Options</span>
				</button>
			</ActionTooltip>
		</div>
	);
};

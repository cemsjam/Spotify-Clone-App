"use client";
import { BiPlay, BiPause } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

import { useTrackStore } from "@/stores/track-store";

import { Button } from "@/components/shadcn/button";
import { ActionTooltip } from "@/components/ActionTooltip";

export const PlaylistActions = ({ label, playlistUri }: { label: string; playlistUri: string }) => {
	const { currentPlaylist, setCurrentPlaylist, togglePlaying, isPlaying } = useTrackStore();

	const isPlaylistActivePlaying = currentPlaylist === playlistUri && isPlaying;
	return (
		<div className="p-6 flex items-center">
			<ActionTooltip side="bottom" label={`Play ${label}`}>
				<Button
					type="button"
					className="w-14 h-14 rounded-full bg-primary mr-6 lg:mr-8 hover:bg-primaryHighlight hover:scale-110"
					onClick={() => {
						setCurrentPlaylist(playlistUri);
						togglePlaying();
					}}
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
				<button type="button" className="py-3 text-subduedText hover:text-baseText hover:scale-105">
					<span>
						<FiMoreHorizontal className="w-8 h-8" />
					</span>
					<span className="sr-only">More Options</span>
				</button>
			</ActionTooltip>
		</div>
	);
};

"use client";
import { BiPlay, BiPause } from "react-icons/bi";

import { FiMoreHorizontal } from "react-icons/fi";

import { Button } from "@/components/shadcn/button";
import { ActionTooltip } from "@/components/ActionTooltip";
import { Track } from "@/types";
import { useTrackStore } from "@/stores/track-store";

export const PlaylistActions = ({
	label,
	firstTrack,
}: {
	label: string;
	firstTrack: Track;
}) => {
	const { currentState, setCurrentTrack, setCurrentState } = useTrackStore();
	return (
		<div className="p-6 flex items-center">
			<ActionTooltip side="bottom" label={`Play ${label}`}>
				<Button
					type="button"
					className="w-14 h-14 rounded-full bg-primary mr-6 lg:mr-8 hover:bg-primaryHighlight hover:scale-110"
					onClick={() => {
						setCurrentTrack(firstTrack.track.uri);
						setCurrentState(currentState === "play" ? "paused" : "play");
					}}
				>
					<span className="w-6 h-6 text-black">
						{currentState === "paused" ? (
							<>
								<BiPlay className="w-full h-full" />
								<span className="sr-only">Play</span>
							</>
						) : (
							<>
								<BiPause className="w-full h-full" />
								<span className="sr-only">Play</span>
							</>
						)}
					</span>
				</Button>
			</ActionTooltip>
			<ActionTooltip side="top" label={`More Options For ${label}`}>
				<button
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

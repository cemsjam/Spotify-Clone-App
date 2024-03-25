"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

import { Track as TrackType } from "@/types";
import { formatDate } from "@/utils/format-date";
import { ActionTooltip } from "@/components/ActionTooltip";
import { msToDuration } from "@/utils/ms-to-duration";
import { cn } from "@/utils/cn";
import { useTrackStore } from "@/stores/track-store";

const savedTrackIcon = (
	<svg
		role="img"
		height="16"
		width="16"
		aria-hidden="true"
		viewBox="0 0 16 16"
		data-encore-id="icon"
		fill="currentColor"
	>
		<path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z" />
	</svg>
);

const notSavedTrackIcon = (
	<svg
		role="img"
		height="16"
		width="16"
		aria-hidden="true"
		viewBox="0 0 16 16"
		data-encore-id="icon"
		fill="currentColor"
	>
		<path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z" />
	</svg>
);
interface TrackWithIndex extends TrackType {
	index: number;
}

export const Track = ({
	data,
	playlistUri,
}: {
	data: TrackWithIndex;
	playlistUri: string;
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isTrackSaved, setIsTrackSaved] = useState(false);
	const { setCurrentPlaylist, currentTrack, setCurrentTrack, isPlaying, setIsPlaying } =
		useTrackStore();
	const { added_at, track, index } = data;
	const { album } = track;

	const isActivelyPlaying = currentTrack === track.uri && isPlaying;
	return (
		<li
			className="track-table-body hover:bg-contextBg rounded-sm group"
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative">
				<span
					className={cn("text-subduedText text-base", {
						"text-primary": isActivelyPlaying,
					})}
				>
					{!isHovered && index + 1}
				</span>
				{isHovered && (
					<ActionTooltip side="top" label={isActivelyPlaying ? "Pause" : "Play " + track.name}>
						<button
							type="button"
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							onClick={() => {
								setCurrentTrack(track.uri);
								setCurrentPlaylist(playlistUri);
								setIsPlaying((prev) => !prev);
								console.log("onclick-current", track.uri);

								console.log("onclick", currentTrack);
							}}
						>
							{isActivelyPlaying ? (
								<BiPause className="w-6 h-6" />
							) : (
								<BiPlay className="w-6 h-6" />
							)}
						</button>
					</ActionTooltip>
				)}
			</div>
			<div className="flex gap-4">
				<div className="flex-shrink-0">
					{album.images && album.images.length > 0 && (
						<Image
							src={album.images[2]?.url ? album.images[2]?.url : album.images[0]?.url}
							alt={album.name + "cover photo"}
							width={40}
							height={40}
						/>
					)}
				</div>
				<div className="flex flex-col max-w-[280px]">
					<Link
						href={`/track/${track.id}`}
						className={cn("text-base truncate hover:underline", {
							"text-baseText": isHovered && !isActivelyPlaying,
							"text-primary": isActivelyPlaying,
						})}
					>
						{track.name}
					</Link>
					<span className="text-subduedText truncate">
						{track.artists.map((artist, i) =>
							i === track.artists.length - 1 ? (
								<Link
									className={cn("hover:underline hover:text-baseText", {
										"text-baseText": isHovered,
									})}
									key={artist.id}
									href={`/artist/${artist.id}`}
								>
									{artist.name}
								</Link>
							) : (
								<Link
									className={cn("hover:underline hover:text-baseText", {
										"text-baseText": isHovered,
									})}
									key={artist.id}
									href={`/artist/${artist.id}`}
								>
									{artist.name},
								</Link>
							)
						)}
					</span>
				</div>
			</div>
			<Link
				href={`/album/${album.id}`}
				className={cn("truncate text-subduedText hover:underline hover:text-baseText", {
					"text-baseText": isHovered,
				})}
			>
				{album.name}
			</Link>
			<span className="text-subduedText">{formatDate(new Date(added_at))}</span>
			<div className="text-subduedText col-[last]">
				{isTrackSaved && (
					<ActionTooltip side="top" label="Remove from Your Library">
						<button type="button" className="mr-4 text-primary">
							{savedTrackIcon}
						</button>
					</ActionTooltip>
				)}
				{!isTrackSaved && (
					<ActionTooltip side="top" label="Save to Your Library">
						<button
							type="button"
							className="mr-4 text-subuedText hover:text-baseText invisible group-hover:visible"
						>
							{notSavedTrackIcon}
						</button>
					</ActionTooltip>
				)}
				<span className="ml-4">{msToDuration(track.duration_ms)}</span>
				{isHovered && (
					<ActionTooltip side="top" label={"More Options for" + track.name}>
						<button type="button">
							<FiMoreHorizontal className="ml-4 text-baseText w-4 h-4" />
						</button>
					</ActionTooltip>
				)}
			</div>
		</li>
	);
};

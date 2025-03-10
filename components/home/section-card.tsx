"use client";
import Image from "next/image";
import { BiPlay, BiPause } from "react-icons/bi";

import { type Playlist } from "@/types";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { useTrackStore } from "@/stores/track-store";

export type SectionCardVariants = "default" | "vertical";

export const SectionCard = ({ playlist, variant }: { playlist: Playlist; variant: SectionCardVariants }) => {
	const { currentPlaylist, setCurrentPlaylist, isPlaying, setIsPlaying } = useTrackStore();
	const { images, description, name, id } = playlist;

	const handlePlayButtonClick = () => {
		if (currentPlaylist !== playlist.uri) {
			setCurrentPlaylist(playlist.uri);
			setIsPlaying(true);
		} else {
			setIsPlaying(!isPlaying);
		}
	};
	const isPlaylistActivePlaying = currentPlaylist === playlist.uri && isPlaying;
	if (variant === "default") {
		return (
			<div className="p-4 bg-highlightBg rounded-base hover:bg-contextBg transition-colors group cursor-pointer">
				<div className="relative w-full aspect-square rounded-base overflow-hidden mb-4">
					<Link href={`/playlist/${id}`}>
						<Image
							fill
							src={images[1]?.url ? images[1]?.url : images[0]?.url}
							alt={"Playlist" + name + "cover image"}
						/>
					</Link>
					<Button
						onClick={handlePlayButtonClick}
						className="w-12 h-12 rounded-full bg-primary absolute right-2 bottom-2 translate-y-2 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-300 shadow-[0_8px_8px_rgba(0,0,0,.3)]"
					>
						<span className="flex items-center justify-center w-6 h-6 text-black">
							{isPlaylistActivePlaying ? <BiPause className="w-6 h-6" /> : <BiPlay className="w-6 h-6" />}
						</span>
					</Button>
				</div>
				<Link href={`/playlist/${id}`} className="overflow-hidden">
					<span className="text-base font-bold">{name}</span>
					<p className="text-subduedText hidden lg:line-clamp-2 ">{description}</p>
				</Link>
			</div>
		);
	} else if (variant === "vertical") {
		return (
			<div className="overflow-hidden bg-[#ffffff12] rounded-base hover:bg-contextBg transition-colors group cursor-pointer flex items-center h-16 pr-2">
				<Link href={`/playlist/${id}`} className="relative block w-16 h-16 flex-shrink-0 ">
					<Image fill src={images[1]?.url ? images[1]?.url : images[0]?.url} alt={"Playlist" + name + "cover image"} />
				</Link>
				<Link
					href={`/playlist/${id}`}
					className="text-base font-bold flex-1 line-clamp-2 pl-4 h-full flex items-center"
				>
					{name}
				</Link>
				<Button
					onClick={handlePlayButtonClick}
					className="self-center w-12 h-12 rounded-full bg-primary  opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-300 shadow-[0_8px_8px_rgba(0,0,0,.3)]"
				>
					<span className="flex items-center justify-center w-6 h-6 text-black">
						{isPlaylistActivePlaying ? <BiPause className="w-6 h-6" /> : <BiPlay className="w-6 h-6" />}
					</span>
				</Button>
			</div>
		);
	}
};

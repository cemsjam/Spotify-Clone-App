"use client";

import Link from "next/link";
import Image from "next/image";

import { useSidebarStore } from "@/stores/sidebar-store";

import { ActionTooltip } from "@/components/ActionTooltip";

export const LibraryItemBodyLikedSongs = ({ total }: { total: number }) => {
	const { isOpen } = useSidebarStore();
	if (!total) return null;
	return (
		<>
			{isOpen ? (
				<div className="isolate">
					<Link
						href="/collection/tracks"
						className="flex items-center gap-panelGap relative after:content-[''] after:rounded-base after:absolute after:left-0 after:-right-0 after:-bottom-1 after:-top-1 after:bg-highlightBg after:-z-10 after:opacity-0 hover:after:opacity-100"
					>
						{/* image container */}
						<div className="w-12 h-12 relative overflow-hidden rounded-[4px] flex-shrink-0">
							<Image
								fill={true}
								src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
								alt="liked songs"
							/>
						</div>
						{/* content container */}
						<p className="flex flex-col gap-0.5">
							<span className="capitalize">Liked Songs</span>
							<span className="text-subduedText flex gap-1">
								<span className="capitalize">Playlist</span>
								<span>
									<span className="mr-1">•</span>
									<span>{total} songs</span>
								</span>
							</span>
						</p>
					</Link>
				</div>
			) : (
				<ActionTooltip
					side="right"
					label={
						<p className="flex flex-col gap-0.5 p-1">
							<span className="capitalize">Liked Songs</span>
							<span className="text-subduedText flex gap-1">
								<span className="capitalize">Playlist</span>
								<span>
									<span className="mr-1">•</span>
									<span>{total} songs</span>
								</span>
							</span>
						</p>
					}
				>
					<Link
						href="/collection/tracks"
						className="block w-12 h-12 relative overflow-hidden rounded-md flex-shrink-0 m-auto"
					>
						<Image
							fill={true}
							src={"https://misc.scdn.co/liked-songs/liked-songs-64.png"}
							alt={"liked songs"}
						/>
					</Link>
				</ActionTooltip>
			)}
		</>
	);
};

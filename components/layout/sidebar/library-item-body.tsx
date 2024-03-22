"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/utils/cn";

import { useSidebarStore } from "@/stores/sidebar-store";

import { ActionTooltip } from "@/components/ActionTooltip";
import { type Playlist } from "@/types";

interface LibraryItemBodyProps {
	item: Playlist;
}

export const LibraryItemBody = ({ item }: LibraryItemBodyProps) => {
	const { isOpen } = useSidebarStore();
	// console.log(item);
	return (
		<>
			{isOpen ? (
				<div className="isolate">
					<Link
						href={`/playlist/${item.id}`}
						className="flex items-center gap-panelGap relative after:content-[''] after:absolute after:left-0 after:-right-0 after:-bottom-1 after:-top-1 after:bg-highlightBg after:rounded-base after:-z-10 after:opacity-0 hover:after:opacity-100"
					>
						{/* image container */}
						<div
							className={cn("w-12 h-12 relative overflow-hidden rounded-md flex-shrink-0 ", {
								"rounded-full": item.type === "artist",
							})}
						>
							<Image
								fill={true}
								src={item.images[2]?.url ? item.images[2]?.url : item.images[0]?.url}
								alt={item.name + "cover photo"}
								sizes="48px"
							/>
						</div>
						{/* content container */}
						<p className="flex flex-col gap-0.5">
							<span className="capitalize">{item.name}</span>
							<span className="text-subduedText flex gap-1">
								<span className="capitalize">{item.type}</span>
								<span>
									{item.type === "playlist" && item.name !== "liked songs" && (
										<>
											<span className="mr-1">•</span>
											<span className="capitalize">{item.owner.display_name}</span>
										</>
									)}
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
							<span className="capitalize">{item.name}</span>
							<span className="text-subduedText flex gap-1">
								<span className="capitalize">{item.type}</span>
								<span>
									{item.type === "playlist" && item.name !== "liked songs" && (
										<>
											<span className="mr-1">•</span>
											<span className="capitalize">{item.owner.display_name}</span>
										</>
									)}
								</span>
							</span>
						</p>
					}
				>
					<Link
						href={`/playlist/${item.id}`}
						className={cn(
							"block w-12 h-12 relative overflow-hidden rounded-md flex-shrink-0 m-auto",
							{
								"rounded-full": item.type === "artist",
							}
						)}
					>
						<Image
							fill={true}
							sizes="48px"
							src={item.images[2]?.url ? item.images[2]?.url : item.images[0].url}
							alt={item.name + "cover photo"}
						/>
					</Link>
				</ActionTooltip>
			)}
		</>
	);
};

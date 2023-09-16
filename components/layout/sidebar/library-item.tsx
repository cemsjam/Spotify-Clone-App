"use client";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";

import { useSidebarStore } from "@/stores/sidebar-store";

import { mockPlaylistAndArtists } from "@/constants/mockData";

import { ActionTooltip } from "@/components/ActionTooltip";

export const LibraryItem = () => {
	const { isOpen } = useSidebarStore();
	return (
		<div className="p-2 flex flex-col gap-panelGap">
			{mockPlaylistAndArtists.map((item) => (
				<div key={item.id}>
					{isOpen ? (
						<div className="isolate">
							<Link
								href="/todo"
								className="flex items-center gap-panelGap relative after:content-[''] after:absolute after:-inset-2 after:bg-highlightBg after:-z-10 after:opacity-0 hover:after:opacity-100"
							>
								{/* image container */}
								<div
									className={cn(
										"w-12 h-12 relative overflow-hidden rounded-[4px] flex-shrink-0 ",
										{
											"rounded-full": item.type === "artist",
										}
									)}
								>
									<Image fill={true} src={item.coverImage} alt={item.name + "cover photo"} />
								</div>
								{/* content container */}
								<p className="flex flex-col gap-0.5">
									<span className="capitalize">{item.name}</span>
									<div className="text-subduedText flex gap-1">
										<span className="capitalize">{item.type}</span>
										<span>
											{item.type === "playlist" && item.name !== "liked songs" && (
												<>
													<span className="mr-1">•</span>
													<span className="capitalize">{item.creator}</span>
												</>
											)}
											{item.type === "album" && (
												<>
													<span className="mr-1">•</span>
													<span className="capitalize">{item.artist}</span>
												</>
											)}
											{item.type === "podcast" && (
												<>
													<span className="mr-1">•</span>
													<span className="capitalize">{item.creator}</span>
												</>
											)}
										</span>
									</div>
								</p>
							</Link>
						</div>
					) : (
						<ActionTooltip
							side="right"
							label={
								<p className="flex flex-col gap-0.5 p-1">
									<span className="capitalize">{item.name}</span>
									<div className="text-subduedText flex gap-1">
										<span className="capitalize">{item.type}</span>
										<span>
											{item.type === "playlist" && item.name !== "liked songs" && (
												<>
													<span className="mr-1">•</span>
													<span className="capitalize">{item.creator}</span>
												</>
											)}
											{item.type === "album" && (
												<>
													<span className="mr-1">•</span>
													<span className="capitalize">{item.artist}</span>
												</>
											)}
											{item.type === "podcast" && (
												<>
													<span className="mr-1">•</span>
													<span className="capitalize">{item.creator}</span>
												</>
											)}
										</span>
									</div>
								</p>
							}
						>
							<Link
								href="/todo"
								className={cn(
									"block w-12 h-12 relative overflow-hidden rounded-[4px] flex-shrink-0 m-auto",
									{
										"rounded-full": item.type === "artist",
									}
								)}
							>
								<Image fill={true} src={item.coverImage} alt={item.name + "cover photo"} />
							</Link>
						</ActionTooltip>
					)}
				</div>
			))}
		</div>
	);
};

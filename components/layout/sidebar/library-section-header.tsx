"use client";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";

import { useSidebarStore } from "@/stores/sidebar-store";

import { ActionTooltip } from "@/components/ActionTooltip";
import { useSession } from "next-auth/react";
import { cn } from "@/utils/cn";

const collapseIcon = (
	<svg
		role="img"
		height="24"
		width="24"
		aria-hidden="true"
		viewBox="0 0 24 24"
		data-encore-id="icon"
		className="fill-baseText"
	>
		<path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" />
	</svg>
);
const expandIcon = (
	<svg
		role="img"
		height="24"
		width="24"
		aria-hidden="true"
		viewBox="0 0 24 24"
		data-encore-id="icon"
		className="fill-baseText"
	>
		<path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z" />
	</svg>
);

export const LibrarySectionHeader = () => {
	const { isOpen, toggleSidebar } = useSidebarStore();
	const { status } = useSession();

	const isLoggedIn = status === "authenticated";
	return (
		<header className="flex items-center gap-panelGap py-2 px-4">
			<div className="flex-1">
				<ActionTooltip
					side={isOpen ? "top" : "right"}
					label={isOpen ? "Collapse Your Library" : "Expand Your Library"}
					disabled={!isLoggedIn}
				>
					<button
						type="button"
						className="flex items-center py-1 px-2"
						onClick={() => {
							if (status === "authenticated") {
								toggleSidebar();
							}
						}}
					>
						<span>{isOpen ? collapseIcon : expandIcon}</span>
						{isOpen && (
							<>
								<span className="text-subduedText font-bold hover:text-baseText transition-colors ml-3">
									Your Library
								</span>
							</>
						)}
					</button>
				</ActionTooltip>
			</div>

			{isOpen && (
				<div className="flex gap-panelGap">
					<ActionTooltip label="Create playlist or folder" disabled={!isLoggedIn}>
						<button
							disabled={!isLoggedIn}
							className={cn(
								"disabled:cursor-not-allowed p-2 rounded-full text-subduedText   transition-colors",
								{
									"hover:text-baseText hover:bg-highlightBg": isLoggedIn,
								}
							)}
						>
							<AiOutlinePlus />
							<span className="sr-only">Create Playlist or folder</span>
						</button>
					</ActionTooltip>
					{status === "authenticated" && (
						<ActionTooltip label="Show More">
							<button className="p-2 rounded-full text-subduedText hover:text-baseText hover:bg-highlightBg transition-colors">
								<AiOutlineArrowRight />
								<span className="sr-only">Show More</span>
							</button>
						</ActionTooltip>
					)}
				</div>
			)}
		</header>
	);
};

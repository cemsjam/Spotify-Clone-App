"use client";
import { useSidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/utils/cn";

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
	const { isOpen } = useSidebarStore();

	return (
		<div
			className={cn("sidebar-parent-grid flex-grow-[4] lg:w-3/4 xl:w-full", {
				"max-w-leftSideBarMinifiedWidth": !isOpen,
				"max-w-leftSideBarWidth": isOpen,
			})}
		>
			{children}
		</div>
	);
};

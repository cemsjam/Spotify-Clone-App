"use client";
import { NavigationSection } from "./sidebar/navigation-section";
import { LibrarySection } from "./sidebar/library-section";
import { useSidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/utils/cn";

export const Sidebar = () => {
	const { isOpen } = useSidebarStore();
	return (
		<div
			className={cn("sidebar-parent-grid flex-1", {
				"max-w-leftSideBarMinifiedWidth": !isOpen,
				"max-w-leftSideBarWidth": isOpen,
			})}
		>
			<aside className="h-full flex flex-col gap-panelGap">
				<div className="py-2 px-3 bg-componentBg rounded-base">
					<NavigationSection />
				</div>
				<div className="flex-1 bg-componentBg rounded-base">
					<LibrarySection />
				</div>
			</aside>
		</div>
	);
};

import React from "react";
import { NavigationSection } from "./sidebar/navigation-section";

export const Sidebar = () => {
	return (
		<div className="h-full flex flex-col gap-panelGap">
			<div className="py-2 px-3 bg-componentBg rounded-base">
				<NavigationSection />
			</div>
			<div className="flex-1 bg-componentBg rounded-base">Your Library</div>
		</div>
	);
};

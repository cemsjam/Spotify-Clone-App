import { NavigationSection } from "./sidebar/navigation-section";
import { LibrarySection } from "./sidebar/library-section";
import { SidebarLayout } from "./sidebar/sidebar-layout";

export const Sidebar = () => {
	return (
		<SidebarLayout>
			<aside className="h-full grid grid-rows-[auto,1fr] gap-panelGap">
				<div className="py-2 px-3 bg-componentBg rounded-base">
					<NavigationSection />
				</div>
				<div className="flex-1 bg-componentBg rounded-base overflow-hidden">
					<LibrarySection />
				</div>
			</aside>
		</SidebarLayout>
	);
};

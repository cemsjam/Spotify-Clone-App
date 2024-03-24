import { NavigationSection } from "./navigation-section";
import { LibrarySection } from "./library-section";
import { SidebarLayout } from "./sidebar-layout";
import { getServerAuthSession } from "@/utils/auth";
import { cn } from "@/utils/cn";

export const Sidebar = async () => {
	const session = await getServerAuthSession();
	return (
		<SidebarLayout>
			<aside className="h-full grid grid-rows-[auto,1fr] gap-panelGap">
				<div className="py-2 px-3 bg-componentBg rounded-base">
					<NavigationSection />
				</div>
				<div
					className={cn("flex-1 bg-componentBg rounded-base ", {
						"overflow-hidden": session,
					})}
				>
					<LibrarySection />
				</div>
			</aside>
		</SidebarLayout>
	);
};

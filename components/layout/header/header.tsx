import React from "react";
import { HistoryActions } from "./history-actions";
import { SearchBar } from "./search-bar";
import { Auth } from "./auth";
import { getServerAuthSession } from "@/utils/auth";

export const Header = async () => {
	const session = await getServerAuthSession();
	return (
		<header className="h-headerHeight py-4 px-6 sticky top-0 z-[50] bg-componentBg flex items-center">
			<div className="flex-1 flex items-center justify-between gap-panelGap">
				<div className="flex items-center gap-panelGap">
					<HistoryActions />
					{session && <SearchBar />}
				</div>
				<Auth />
			</div>
		</header>
	);
};

import React from "react";
import { HistoryActions } from "./header/history-actions";
import { SearchBar } from "./header/search-bar";

export const Header = () => {
	return (
		<header className="h-headerHeight py-4 px-6">
			<div className="flex items-center gap-panelGap">
				<HistoryActions />
				<SearchBar />
			</div>
		</header>
	);
};

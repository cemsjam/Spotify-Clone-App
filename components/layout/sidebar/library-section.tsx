import React from "react";
import { LibrarySectionHeader } from "./library-section-header";
import { LibraryItems } from "./library-items";
import { getServerAuthSession } from "@/utils/auth";
import ExploreSection from "./explore-section";

export const LibrarySection = async () => {
	const session = await getServerAuthSession();
	return (
		<div className="grid grid-rows-[auto,1fr]">
			<LibrarySectionHeader />
			{!session ? <ExploreSection /> : <LibraryItems />}
		</div>
	);
};

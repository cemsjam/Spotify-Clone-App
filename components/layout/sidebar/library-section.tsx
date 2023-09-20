import React from "react";
import { LibrarySectionHeader } from "./library-section-header";
import { LibraryItems } from "./library-items";

export const LibrarySection = () => {
	return (
		<div className="grid grid-rows-[auto,1fr]">
			<LibrarySectionHeader />
			<LibraryItems />
		</div>
	);
};

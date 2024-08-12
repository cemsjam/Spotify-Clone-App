import React from "react";

import { PlaylistApiResponse } from "@/types";

import { fetchDataInServer } from "@/utils/server-service";
import { SectionCard, SectionCardVariants } from "./section-card";

export type SectionListTypes = {
	variant: SectionCardVariants;
};

export const SectionList = async ({
	variant,
	sectionClasses,
	limit = 12,
}: {
	variant: SectionCardVariants;
	sectionClasses: string;
	limit?: number;
}) => {
	const data: PlaylistApiResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/me/playlists?limit=${limit}&offset=0`,
		"[FETCH_CURRENT_USER_PLAYLIST_SECTION_LIST]"
	);

	if (!data) {
		return null;
	}
	return (
		<>
			<section className={sectionClasses}>
				{data.items.map((item) => (
					<SectionCard key={item.id} playlist={item} variant={variant} />
				))}
			</section>
		</>
	);
};

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
	limit = 10,
}: {
	variant: SectionCardVariants;
	sectionClasses: string;
	limit?: number;
}) => {
	const data: PlaylistApiResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/me/playlists?limit=${limit}&offset=0`,
		`${process.env.SPOTIFY_API_URL}v1/me/playlists?limit=10&offset=0`,
		"[FETCH_CURRENT_USER_PLAYLIST_SECTION_LIST]"
	);

	if (!data) {
		return null;
	}
	return (
		<section className={sectionClasses}>
			{data.items.map((item) => (
				<SectionCard key={item.id} playlist={item} variant={variant} />
			))}
		</section>
		<div className="px-2 lg:px-4 pt-2">
			<SectionHeader
				href="/"
				label="Recently Played"
				containerClasses="mb-4"
				headingClasses="font-bold text-3xl"
			/>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-panelGap md:gap-4 lg:gap-6">
				{data.items.map((item) => (
					<SectionCard key={item.id} {...item} />
				))}
				{data.items.map((item) => (
					<SectionCard key={item.id} {...item} />
				))}
			</section>
		</div>
	);
};

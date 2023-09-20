import { PlaylistApiResponse } from "@/types";
import { fetchDataInServer } from "@/utils/server-service";
import React from "react";
import { SectionCard } from "./section-card";
import { SectionHeader } from "../section-header";

export const SectionList = async () => {
	const data: PlaylistApiResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/me/playlists?limit=5&offset=0`,
		"[FETCH_CURRENT_USER_PLAYLIST_SECTION_LIST]"
	);
	if (!data) return null;
	return (
		<>
			<SectionHeader
				href="/"
				label="Recently Played"
				containerClasses="mb-4"
				headingClasses="font-bold text-3xl"
			/>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-panelGap md:gap-4 lg:gap-6">
				{data.items.map((item) => (
					<SectionCard key={item.id} {...item} />
				))}
				{data.items.map((item) => (
					<SectionCard key={item.id} {...item} />
				))}
			</section>
		</>
	);
};

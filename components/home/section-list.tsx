import { fetchDataInServer } from "@/utils/server-service";
import React from "react";

export const SectionList = async () => {
	const data = fetchDataInServer(`${process.env.SPOTIFY_API_URL}v1/browse/categories`);
	if (!data || true) return null;
	return (
		<div>
			{data.map((item) => (
				<SectionCard key={item.id} />
			))}
		</div>
	);
};

export const SectionCard = () => {
	return <div>card</div>;
};

import { PlaylistByIdResponse } from "@/types";
import { fetchDataInServer } from "@/utils/server-service";

import { PlaylistHero } from "@/components/playlist/playlist-hero";
import { PlaylistActions } from "@/components/playlist/playlist-actions";
import { TrackTable } from "@/components/playlist/track-table";
import BackgroundSetter from "@/components/playlist/background-setter";

const PlaylistIdPage = async ({ params }: { params: { playlistId: string } }) => {
	const { playlistId } = params;
	const data: PlaylistByIdResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/playlists/${playlistId}`,
		"[FETCH_PLAYLIST_ID_PAGE]"
	);

	if (!data) return null;
	// console.log("playlistId", data.tracks.items);

	const { name, owner, images, description } = data;
	const { total } = data.tracks;
	const heroProps = { name, owner, images, total, description };

	// console.log(images[1]?.url ? images[1]?.url : images[0]?.url);
	return (
		<div className="relative h-[calc(100vh-var(--header-height)-var(--footer-height)-var(--panel-gap))] overflow-y-auto">
			{/* <BackgroundSetter imageUrl={images[1]?.url ? images[1]?.url : images[0]?.url} /> */}
			<PlaylistHero {...heroProps} />
			<PlaylistActions label={name} playlistUri={data.uri} />
			<TrackTable tracks={data.tracks.items} playlistUri={data.uri} />
		</div>
	);
};

export default PlaylistIdPage;

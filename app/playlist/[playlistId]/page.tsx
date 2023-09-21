import { PlaylistByIdResponse } from "@/types";
import { fetchDataInServer } from "@/utils/server-service";

import { PlaylistHero } from "@/components/playlist/playlist-hero";
import { PlaylistActions } from "@/components/playlist/playlist-actions";

const PlaylistIdPage = async ({ params }: { params: { playlistId: string } }) => {
	const { playlistId } = params;
	const data: PlaylistByIdResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/playlists/${playlistId}`,
		"[FETCH_PLAYLIST_ID_PAGE]"
	);
	if (!data) return null;
	// console.log("playlistId", data);
	const { name, owner, images, description } = data;
	const { total } = data.tracks;
	const heroProps = { name, owner, images, total, description };

	// console.log(data);
	return (
		<div>
			<PlaylistHero {...heroProps} />
			<PlaylistActions />
		</div>
	);
};

export default PlaylistIdPage;

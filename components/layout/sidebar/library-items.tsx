import { LibraryItemBody } from "./library-item-body";
import { LikedSongsApiResponse, type PlaylistApiResponse } from "@/types";
import { fetchDataInServer } from "@/utils/server-service";
import { LibraryItemBodyLikedSongs } from "./library-item-body-liked-songs";

export const LibraryItems = async () => {
	const data: PlaylistApiResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/me/playlists`,
		"[FETCH_CURRENT_USER_PLAYLIST_LIBRARY_ITEM]"
	);
	const tracksData: LikedSongsApiResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/me/tracks?limit=1&offset=0`,
		"[FETCH_CURRENT_USER_LIKED_SONGS_LIBRARY_ITEM]"
	);
	if (!data) return null;
	return (
		<ul
			role="list"
			className="library-section p-2 flex flex-col gap-panelGap max-h-[calc(100vh-var(--footer-height)-112px-66px)] overflow-y-auto overflow-x-hidden"
		>
			<LibraryItemBodyLikedSongs total={tracksData.total} />
			{data.items.map((item) => (
				<li key={item.id}>
					<LibraryItemBody item={item} />
				</li>
			))}
		</ul>
	);
};

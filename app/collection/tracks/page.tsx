import { LikedSongsApiResponse } from "@/types";
import { fetchDataInServer } from "@/utils/server-service";

import { PlaylistActions } from "@/components/playlist/playlist-actions";
import { TrackTable } from "@/components/playlist/track-table";
import { getServerAuthSession } from "@/utils/auth";
import Image from "next/image";

const LikedSongsPage = async () => {
	const data: LikedSongsApiResponse = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/me/tracks`,
		"[FETCH_PLAYLIST_ID_PAGE]"
	);
	const session = await getServerAuthSession();
	if (!data) return null;

	return (
		<div className="h-[calc(100vh-var(--header-height)-var(--footer-height)-var(--panel-gap))] overflow-y-auto">
			<div className=" max-h-[400px] min-height-[340px] p-4 lg:p-[1.125rem_1.5rem]">
				<div className="flex gap-4">
					{/* image */}
					<div className="relative max-w-[232px] aspect-square w-full shadow-[0_4px_60px_rgba(0,0,0,.5)]">
						<Image
							src={"https://misc.scdn.co/liked-songs/liked-songs-300.png"}
							fill
							alt={"liked songs cover photo"}
						/>
					</div>
					{/* info */}
					<div className="flex flex-col justify-end">
						<span className="text-sm">Playlist</span>
						<div className="mt-2">
							<h1 className="text-baseText text-3xl xl:text-5xl 2xl:text-7xl font-bold line-clamp-3 leading-normal mt-[0.08em] mb-[0.12em]">
								Liked Songs
							</h1>
						</div>
						{/* {description && <p className="text-subduedText">{description}</p>} */}
						<div className="flex text-sm mt-2">
							{session?.user?.image && (
								<Image
									src={session.user.image}
									width={24}
									height={24}
									className="rounded-full mr-1 object-cover"
									alt={"liked songs cover photo"}
								/>
							)}
							<div className="font-bold">{session?.user?.name}</div>
							<span className="before:content-['•'] before:mx-1 font-bold">
								{data.total} songs
							</span>
						</div>
					</div>
				</div>
			</div>
			<PlaylistActions label={"test"} />
			<TrackTable tracks={data.items} />
		</div>
	);
};

export default LikedSongsPage;

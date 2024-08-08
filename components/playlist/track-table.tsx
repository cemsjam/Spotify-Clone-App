import { Track as TrackType } from "@/types";
import { Track } from "./track";
import { TrackTableHeader } from "./track-table-header";

export const TrackTable = ({ tracks, playlistUri }: { tracks: TrackType[]; playlistUri: string }) => {
	console.log(tracks);
	return (
		<div className="track-table text-sm">
			<TrackTableHeader />
			<ul className="px-6">
				{tracks.map(({ added_at, track }, index) => {
					const trackProps = { track, added_at, index };
					return <Track key={track.id} data={trackProps} playlistUri={playlistUri} />;
				})}
			</ul>
		</div>
	);
};

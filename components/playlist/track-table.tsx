import { Track as TrackType } from "@/types";
import { Track } from "./track";
import { TrackTableHeader } from "./track-table-header";

export const TrackTable = ({ tracks }: { tracks: TrackType[] }) => {
	return (
		<div className="track-table text-sm">
			<TrackTableHeader />
			<ul className="px-6">
				{tracks.map(({ added_at, track }, index) => {
					const trackProps = { track, added_at, index };
					return <Track key={track.id} data={trackProps} />;
				})}
			</ul>
		</div>
	);
};

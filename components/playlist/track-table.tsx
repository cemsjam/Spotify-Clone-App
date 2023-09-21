import { Track as TrackType } from "@/types";
import { Track } from "./track";

export const TrackTable = ({ tracks }: { tracks: TrackType[] }) => {
	return (
		<div className="track-table text-sm">
			<div className="track-table-header">
				<div>#</div>
				<div>title</div>
				<div>album</div>
				<div>date added</div>
				<div>icon</div>
			</div>
			<ul className="px-6">
				{tracks.map(({ added_at, track }, index) => {
					const trackProps = { track, added_at, index };
					return <Track key={track.id} data={trackProps} />;
				})}
			</ul>
		</div>
	);
};

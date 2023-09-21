import Image from "next/image";

import { Track as TrackType } from "@/types";
import { formatDate } from "@/utils/format-date";

type TrackProps = {
	data: TrackType & {
		index: string;
	};
};

function convertTimeToString(time: number) {
	const totalNumberOfSeconds = Math.floor(time);
	const hours = totalNumberOfSeconds / 3600;
	const minutes = (totalNumberOfSeconds - hours * 3600) / 60;
	const seconds = Math.floor(totalNumberOfSeconds - (hours * 3600 + minutes * 60));
	const result =
		(minutes < 10 ? +minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
	return result;
}

export const Track = ({ data }: TrackProps) => {
	// console.log(data);
	const { added_at, track, index } = data;
	const { album } = track;
	return (
		<li className="track-table-body">
			<span>{index}</span>
			<div className="flex gap-4">
				<div className="flex-shrink-0">
					{album.images && album.images.length > 0 && (
						<Image
							src={album.images[2]?.url ? album.images[2]?.url : album.images[0]?.url}
							alt={album.name + "cover photo"}
							width={40}
							height={40}
						/>
					)}
				</div>
				<div className="flex flex-col max-w-[280px]">
					<span className="text-base truncate">{track.name}</span>
					<span className="text-subduedText truncate">
						{track.artists.map((artist, i) =>
							i === track.artists.length - 1 ? artist.name : artist.name + ","
						)}
					</span>
				</div>
			</div>
			<span className="truncate">{album.name}</span>
			<span>{formatDate(new Date(added_at))}</span>
			<span>{track.duration_ms}</span>
		</li>
	);
};

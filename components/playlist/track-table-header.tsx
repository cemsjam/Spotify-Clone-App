"use client";
import { useRef } from "react";
import { LuClock3 } from "react-icons/lu";

import { useDetectSticky } from "@/hooks/useDetectSticky";
import { ActionTooltip } from "../ActionTooltip";

export const TrackTableHeader = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { isSticky } = useDetectSticky(targetRef);
	// console.log(isSticky);
	return (
		<div ref={targetRef} className="track-table-header">
			<div>#</div>
			<div>title</div>
			<div>album</div>
			<div>date added</div>
			<div className="justify-self-end col-[last]">
				<ActionTooltip side="top" label="Duration">
					<span className="mr-12">
						<LuClock3 className="w-4 h-4" />
					</span>
				</ActionTooltip>
			</div>
		</div>
	);
};

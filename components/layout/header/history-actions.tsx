"use client";
import { useRouter } from "next/navigation";

import { ActionTooltip } from "@/components/ActionTooltip";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

export const HistoryActions = () => {
	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};

	const handleForward = () => {
		router.forward();
	};

	return (
		<div className="flex gap-panelGap">
			<ActionTooltip side="bottom" label="Go Back">
				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center bg-black/70 rounded-full"
				>
					<PiCaretLeftLight />
				</button>
			</ActionTooltip>
			<ActionTooltip side="bottom" label="Go Forward">
				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center bg-black/70 rounded-full"
				>
					<PiCaretRightLight />
				</button>
			</ActionTooltip>
		</div>
	);
};

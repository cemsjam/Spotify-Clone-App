import { ActionTooltip } from "@/components/ActionTooltip";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

export const HistoryActions = () => {
	return (
		<div className="flex gap-panelGap">
			<ActionTooltip label="Go Back">
				<button
					type="button"
					className="w-8 h-8 flex items-center justify-center bg-black/70 rounded-full"
				>
					<PiCaretLeftLight />
				</button>
			</ActionTooltip>
			<ActionTooltip label="Go Forward">
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

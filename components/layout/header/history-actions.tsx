import { ActionTooltip } from "@/components/ActionTooltip";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";

export const HistoryActions = () => {
	const { status } = useSession();

	const isDisabled = status === "unauthenticated" || status === "loading";

	return (
		<div className="flex gap-panelGap">
			<ActionTooltip side="bottom" label="Go Back" disabled={isDisabled}>
				<button
					type="button"
					disabled={isDisabled}
					className={cn("w-8 h-8 flex items-center justify-center bg-black/70 rounded-full", {
						"bg-transparent cursor-not-allowed": isDisabled,
					})}
				>
					<PiCaretLeftLight size={22} />
				</button>
			</ActionTooltip>
			<ActionTooltip side="bottom" label="Go Forward" disabled={isDisabled}>
				<button
					type="button"
					disabled={isDisabled}
					className={cn("w-8 h-8 flex items-center justify-center bg-black/70 rounded-full", {
						"bg-transparent cursor-not-allowed": isDisabled,
					})}
				>
					<PiCaretRightLight size={22} />
				</button>
			</ActionTooltip>
		</div>
	);
};

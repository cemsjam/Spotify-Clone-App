"use client";

import { ActionTooltip } from "@/components/ActionTooltip";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const HistoryActions = () => {
	const { status } = useSession();
	const router = useRouter();
	const pathname = usePathname();

	const [history, setHistory] = useState([pathname]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const isDisabled = status === "unauthenticated" || status === "loading";

	useEffect(() => {
		if (pathname !== history[currentIndex]) {
			setHistory((prev) => [...prev.slice(0, currentIndex + 1), pathname]);
			setCurrentIndex((prev) => prev + 1);
		}
	}, [pathname]);

	const handlePrev = () => {
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
			router.push(history[newIndex]);
		}
	};

	const handleNext = () => {
		if (currentIndex < history.length - 1) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			router.push(history[newIndex]);
		}
	};

	return (
		<div className="flex gap-panelGap">
			<ActionTooltip side="bottom" label="Go Back" disabled={isDisabled || currentIndex <= 0}>
				<button
					type="button"
					disabled={isDisabled || currentIndex <= 0}
					onClick={handlePrev}
					className={cn("w-8 h-8 disabled:opacity-50 flex items-center justify-center bg-black/70 rounded-full", {
						"bg-transparent cursor-not-allowed": isDisabled || currentIndex <= 0,
					})}
				>
					<PiCaretLeftLight size={22} />
				</button>
			</ActionTooltip>
			<ActionTooltip side="bottom" label="Go Forward" disabled={isDisabled || currentIndex >= history.length - 1}>
				<button
					type="button"
					disabled={isDisabled || currentIndex >= history.length - 1}
					onClick={handleNext}
					className={cn("w-8 h-8 disabled:opacity-50 flex items-center justify-center bg-black/70 rounded-full", {
						"bg-transparent cursor-not-allowed": isDisabled || currentIndex >= history.length - 1,
					})}
				>
					<PiCaretRightLight size={22} />
				</button>
			</ActionTooltip>
		</div>
	);
};

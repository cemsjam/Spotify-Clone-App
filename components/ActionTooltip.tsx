"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/shadcn/tooltip";
import { cn } from "@/utils/cn";

interface ActionTooltipProps {
	children: React.ReactNode;
	label: string | JSX.Element;
	side?: "top" | "right" | "bottom" | "left";
	delay?: number;
	disabled?: boolean;
}

export const ActionTooltip = ({
	children,
	label,
	delay = 225,
	side = "top",
	disabled = false,
}: ActionTooltipProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={delay}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					className={cn(
						"py-1 px-2 bg-contextBg border-none rounded-[4px] max-w-[50ch] text-baseText text-sm shadow-tooltip z-[100]",
						{
							"opacity-0 invisible": disabled,
						}
					)}
					side={side}
				>
					<span className="line-clamp-4">{label}</span>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/shadcn/tooltip";

interface ActionTooltipProps {
	children: React.ReactNode;
	label: string | JSX.Element;
	side?: "top" | "right" | "bottom" | "left";
	delay?: number;
}

export const ActionTooltip = ({
	children,
	label,
	delay = 225,
	side = "top",
}: ActionTooltipProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={delay}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					className="p-1 bg-contextBg border-none rounded-sm text-sm"
					side={side}
				>
					{label}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

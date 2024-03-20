import { cn } from "@/utils/cn";
import Link from "next/link";

interface SectionHeaderProps {
	href?: string;
	label: string;
	hideButton?: boolean;
	headingClasses?: string;
	containerClasses?: string;
}

export const SectionHeader = ({
	href = "",
	label,
	hideButton = false,
	headingClasses,
	containerClasses,
}: SectionHeaderProps) => {
	return (
		<div className={cn("flex items-center justify-between", containerClasses)}>
			<h2 className={cn("capitalize", headingClasses)}>{label}</h2>
			{!hideButton && (
				<Link className="text-[#b3b3b3] text-sm font-semibold" href={href}>
					Show all
				</Link>
			)}
		</div>
	);
};

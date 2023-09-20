import { cn } from "@/utils/cn";
import Link from "next/link";

interface SectionHeaderProps {
	href?: string;
	label: string;
	hideButton?: boolean;
	headingClasses?: string;
}

export const SectionHeader = ({
	href = "",
	label,
	hideButton = false,
	headingClasses,
}: SectionHeaderProps) => {
	return (
		<div className="flex items-center justify-between">
			<h2 className={cn("capitalize", headingClasses)}>{label}</h2>
			{!hideButton && (
				<Link className="text-subduedText" href={href}>
					Show all
				</Link>
			)}
		</div>
	);
};

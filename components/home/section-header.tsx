import Link from "next/link";

interface SectionHeaderProps {
	href: string;
	label: string;
}

export const SectionHeader = ({ href, label }: SectionHeaderProps) => {
	return (
		<div className="flex items-center justify-between">
			<h2 className="capitalize">{label}</h2>
			<Link className="text-subduedText" href={href}>
				Show all
			</Link>
		</div>
	);
};

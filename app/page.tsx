import { SectionHeader } from "@/components/section-header";
import { SectionList } from "@/components/home/section-list";

export default function Home() {
	return (
		<div className="px-2 lg:px-4 pt-2">
			<SectionHeader href="/" label="Recently Played" />
			<SectionList />
		</div>
	);
}

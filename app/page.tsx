import { SectionHeader } from "@/components/home/section-header";
import { SectionList } from "@/components/home/section-list";
import { mockPlaylistAndArtists } from "@/constants/mockData";

export default function Home() {
	return (
		<div className="px-2 lg:px-4 pt-2">
			<SectionHeader href="/" label="Recently Played" />
			<SectionList data={mockPlaylistAndArtists} />
		</div>
	);
}

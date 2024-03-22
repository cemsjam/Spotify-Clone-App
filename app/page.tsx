import { SectionList } from "@/components/home/section-list";
import FooterNavigation from "@/components/layout/footer-navigation";
import { SectionHeader } from "@/components/section-header";
import { getServerAuthSession } from "@/utils/auth";

export default async function Home() {
	const session = await getServerAuthSession();
	if (!session) return <FooterNavigation />;
	return (
		<>
			<div className="mt-16 flex flex-col gap-6">
				<div className="px-2 lg:px-4 pt-2">
					<SectionList
						variant="vertical"
						sectionClasses="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[12px]"
						limit={8}
					/>
				</div>
				<div className="px-2 lg:px-4 pt-2">
					<SectionHeader
						href={"/"}
						label={"Your Playlists"}
						containerClasses="mb-4"
						headingClasses="font-bold text-3xl"
					/>
					<SectionList
						variant="default"
						sectionClasses="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-panelGap md:gap-4 lg:gap-6"
					/>
				</div>
				<FooterNavigation containerClasses="bg-none pt-0" />
			</div>
		</>
	);
}

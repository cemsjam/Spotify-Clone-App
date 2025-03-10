import { SectionList } from "@/components/home/section-list";
import FooterNavigation from "@/components/layout/footer/footer-navigation";
import { LoginComponent } from "@/components/login-component";
import { SectionHeader } from "@/components/section-header";
import { getServerAuthSession } from "@/utils/auth";

export default async function Home() {
	const session = await getServerAuthSession();
	if (!session)
		return (
			<div className="flex flex-col h-full">
				<LoginComponent />
				<FooterNavigation />
			</div>
		);
	return (
		<>
			<div className="mt-16 flex flex-col gap-6">
				<div className="px-2 lg:px-4 pt-2">
					<SectionList
						variant="vertical"
						sectionClasses="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-[12px]"
						limit={8}
					/>
				</div>
				<div className="px-2 lg:px-4 pt-2">
					<SectionHeader
						href={"/"}
						hideButton
						label={"Your Playlists"}
						containerClasses="mb-4"
						headingClasses="font-bold text-3xl"
					/>
					<div className="overflow-hidden">
						<SectionList
							variant="default"
							sectionClasses="overflow-slider grid grid-flow-col lg:grid-flow-row auto-cols-[170px] lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-panelGap md:gap-4 lg:gap-6"
						/>
					</div>
				</div>
				<FooterNavigation containerClasses="bg-none pt-0" />
			</div>
		</>
	);
}

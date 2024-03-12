import { SectionList } from "@/components/home/section-list";
import FooterNavigation from "@/components/layout/footer-navigation";
import { getServerAuthSession } from "@/utils/auth";
import { cn } from "@/utils/cn";

export default async function Home() {
	const session = await getServerAuthSession();
	return (
		<div className={cn("px-2 lg:px-4 pt-2")}>
			{!session ? <FooterNavigation /> : <SectionList />}
		</div>
	);
}

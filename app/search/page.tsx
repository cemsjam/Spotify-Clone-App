import { CategoryCard } from "@/components/search/category-card";
import { SectionHeader } from "@/components/section-header";
import { SpotifyCategoryApiResponse } from "@/types";
import { fetchDataInServer } from "@/utils/server-service";

async function SearchPage() {
	const data = await fetchDataInServer(
		`${process.env.SPOTIFY_API_URL}v1/browse/categories?offset=0&limit=20`,
		"[SEARCH_PAGE_GET_FETCH_BROWSE_CATEGORIES]"
	);
	if (!data) return null;
	const { categories }: { categories: SpotifyCategoryApiResponse } = data;
	return (
		<div className="px-2 lg:px-4 pt-2 mt-8">
			<SectionHeader label="Browse All" headingClasses="text-2xl font-bold" hideButton />
			<ul
				role="list"
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4"
			>
				{categories.items.map((item) => (
					<CategoryCard key={item?.id} item={item} />
				))}
			</ul>
		</div>
	);
}

export default SearchPage;

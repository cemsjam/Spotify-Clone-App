import Image from "next/image";
import Link from "next/link";

import { SpotifyCategoryItem } from "@/types";

export const CategoryCard = ({ item }: { item: SpotifyCategoryItem }) => {
	return (
		<li className="aspect-square">
			<Link href="/" className="block relative w-full h-full overflow-hidden rounded-sm group">
				<div className="absolute inset-0">
					<Image
						fill
						src={item.icons[0].url}
						alt={item.name + "cover"}
						className="group-hover:scale-110 transition duration-1000"
					/>
				</div>
				<span className="absolute top-[calc(50%+3rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-medium">
					{item.name}
				</span>
			</Link>
		</li>
	);
};

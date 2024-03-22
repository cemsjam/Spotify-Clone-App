import Image from "next/image";

import { Image as ImageType, Owner } from "@/types";
import { getServerAuthSession } from "@/utils/auth";

interface PlaylistHeroProps {
	total: number;
	owner: Owner;
	name: string;
	images?: ImageType[];
	description?: string;
}

export const PlaylistHero = async ({
	total,
	owner,
	name,
	images,
	description,
}: PlaylistHeroProps) => {
	const session = await getServerAuthSession();
	return (
		<div className=" max-h-[400px] min-height-[340px] p-4 lg:p-[1.125rem_1.5rem]">
			<div className="flex gap-4">
				{/* image */}
				<div className="relative max-w-[232px] aspect-square w-full shadow-[0_4px_60px_rgba(0,0,0,.5)]">
					{images && images.length > 0 && (
						<Image
							src={images[1]?.url ? images[1]?.url : images[0]?.url}
							fill
							alt={name + "cover photo"}
						/>
					)}
				</div>
				{/* info */}
				<div className="flex flex-col justify-end">
					<span className="text-sm">Playlist</span>
					<div className="mt-2">
						<h1 className="text-baseText text-3xl xl:text-5xl 2xl:text-7xl font-bold line-clamp-3 leading-normal mt-[0.08em] mb-[0.12em]">
							{name}
						</h1>
					</div>
					{description && <p className="text-subduedText">{description}</p>}
					<div className="flex text-sm mt-2">
						{session?.user?.image && (
							<Image
								src={session.user.image}
								width={24}
								height={24}
								className="rounded-full mr-1 object-cover"
								alt={"liked songs cover photo"}
							/>
						)}
						<div className="font-bold">{owner.display_name}</div>
						<span className="before:content-['•'] before:mx-1 font-bold">{total} songs</span>
					</div>
				</div>
			</div>
		</div>
	);
};

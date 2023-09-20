import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

import { type Playlist } from "@/types";
import { Button } from "@/components/shadcn/button";

export const SectionCard = ({ images, description, name }: Playlist) => {
	return (
		<div className="p-4 bg-highlightBg rounded-base hover:bg-contextBg transition-colors group cursor-pointer">
			<div className="relative w-full aspect-square rounded-base overflow-hidden mb-4">
				<Image
					fill
					src={images[1]?.url ? images[1]?.url : images[0]?.url}
					alt={"Playlist" + name + "cover image"}
				/>
				<Button className="w-12 h-12 rounded-full bg-primary absolute right-2 bottom-2 translate-y-2 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-300 shadow-[0_8px_8px_rgba(0,0,0,.3)]">
					<span className="flex items-center justify-center w-6 h-6 text-black">
						<BsPlayFill className="w-6 h-6" />
					</span>
				</Button>
			</div>
			<div className="overflow-hidden">
				<span className="text-base font-bold">{name}</span>
				<p className="text-subduedText line-clamp-2">{description}</p>
			</div>
		</div>
	);
};

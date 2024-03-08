import Link from "next/link";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";

const ExploreSection = () => {
	return (
		<div className="p-4 flex flex-col gap-4">
			<ExploreCard
				key="Create Your First Playlist"
				title="Create your first playlist"
				description="It's easy, we'll help you"
			>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button
							type="button"
							className="py-1 px-4 leading-normal h-8 text-sm rounded-full bg-white text-black font-bold hover:scale-105"
						>
							Create playlist
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						side="right"
						className="bg-contextBg hover:bg-highlightBg border-none rounded-sm transition"
					>
						content
					</DropdownMenuContent>
				</DropdownMenu>
			</ExploreCard>
			<ExploreCard
				key="Let's find some podcasts to follow"
				title="Let's find some podcasts to follow"
				description="We'll keep you updated on new episodes"
			>
				<Link
					href="/todo/genres/browse"
					className="py-1 px-4 leading-normal h-8 text-sm rounded-full bg-white text-black font-bold hover:scale-105"
				>
					Browse podcasts
				</Link>
			</ExploreCard>
		</div>
	);
};

export default ExploreSection;

type ExploreCardTypes = {
	title: string;
	description: string;
	children: React.ReactNode;
};

function ExploreCard({ title, description, children }: ExploreCardTypes) {
	return (
		<div className="bg-[#242424] p-4 rounded-base flex flex-col items-start gap-5">
			<div className="flex flex-col gap-2">
				<div className="font-bold">{title}</div>
				<p className="text-sm">{description}</p>
			</div>

			{children}
		</div>
	);
}

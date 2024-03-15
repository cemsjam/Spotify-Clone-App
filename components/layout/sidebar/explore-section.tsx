"use client";

import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/shadcn/button";

const ExploreSection = () => {
	return (
		<div className="p-4 flex flex-col gap-4">
			<div>
				<div className="bg-[#242424] p-4 rounded-base flex flex-col items-start gap-5">
					<div className="group relative w-full flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<div className="font-bold">Create your first playlist</div>
							<p className="text-sm">It&apos;s easy, we&apos;ll help you</p>
						</div>

						<button
							type="button"
							className="py-1 px-4 flex items-center justify-center w-fit h-8 text-sm rounded-full bg-white text-black font-bold hover:scale-105"
						>
							Create playlist
						</button>
						<div className="invisible p-4 bg-[#0d72ea] min-w-[330px] absolute left-[calc(100%+2rem)] top-1/2 -translate-y-1/2 translate-x-2 h-[calc(100%+2rem)] opacity-10 group-focus-within:visible group-focus-within:translate-x-0 group-focus-within:opacity-100 transition-all duration-500 rounded-base flex flex-col gap-5">
							<div className="flex flex-col gap-2">
								<div className="font-bold whitespace-nowrap">Create a playlist</div>
								<p className="text-sm whitespace-nowrap">
									Log in to create and share playlists.
								</p>
							</div>
							<div className="ml-auto">
								<Button
									onClick={() => signIn("spotify")}
									className="py-1 px-4  flex items-center justify-center w-fit h-8 text-sm rounded-full bg-white text-black font-bold hover:scale-105"
								>
									Log in
								</Button>
							</div>
							<span className="absolute top-1/2 -left-[calc(0.5rem+8px)] -translate-y-1/2 border-[8px] border-transparent border-r-[#0d72ea]"></span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="bg-[#242424] p-4 rounded-base flex flex-col items-start gap-5">
					<div className="group relative w-full flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<div className="font-bold">Let&apos;s find some podcasts to follow</div>
							<p className="text-sm">We&apos;ll keep you updated on new episodes</p>
						</div>
						<Link
							href="/todo/genres/browse"
							className="py-1 px-4 leading-normal flex items-center justify-center w-fit h-8 text-sm rounded-full bg-white text-black font-bold hover:scale-105"
						>
							Browse podcasts
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreSection;

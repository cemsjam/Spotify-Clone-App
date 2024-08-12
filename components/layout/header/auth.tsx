"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { ActionTooltip } from "@/components/ActionTooltip";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Button } from "@/components/shadcn/button";

export const Auth = () => {
	const { data: session, status } = useSession();
	if (status === "loading") {
		return null;
	}
	if (session) {
		return (
			<>
				<DropdownMenu>
					<ActionTooltip side="bottom" label={session.user?.name!}>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								className="h-8 w-8 border-none p-1 outline-none flex items-center justify-center bg-black rounded-full cursor-pointer"
							>
								<Image
									width={24}
									height={24}
									src={session.user?.image!}
									alt={"Profile picture of" + session.user?.name}
									className="rounded-full object-cover h-full w-full"
								/>
							</button>
						</DropdownMenuTrigger>
					</ActionTooltip>
					<DropdownMenuContent className="bg-contextBg hover:bg-highlightBg border-none rounded-sm transition">
						<ul>
							<li>
								<DropdownMenuItem asChild>
									<button className="cursor-pointer" type="button" onClick={() => signOut()}>
										Logout
									</button>
								</DropdownMenuItem>
							</li>
						</ul>
					</DropdownMenuContent>
				</DropdownMenu>
			</>
		);
	}
	return (
		<div className="ml-auto">
			<Button
				onClick={() => signIn("spotify")}
				className=" py-2 text-base h-12 w-[110px] rounded-full bg-white text-black font-bold hover:scale-105 "
			>
				Log in
			</Button>
		</div>
	);
};

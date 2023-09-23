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
	const { data: session } = useSession();

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
		<>
			<Button
				onClick={() => signIn("spotify")}
				className="p-0 h-12 w-[110px] rounded-full bg-white text-black font-bold hover:scale-105"
			>
				<span className="px-8 py-2 ">Log in</span>
			</Button>
		</>
	);
};

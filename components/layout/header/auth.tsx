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
import { useEffect, useState } from "react";
import { JWT } from "next-auth/jwt";

export const Auth = () => {
	const { data: session } = useSession();
	const [token, setToken] = useState<JWT | null>(null);

	useEffect(() => {
		if (session && session.user && session.user.token) {
			setToken(session.user.token);
			console.log("token", token);
		}
		// if (token) {
		// 	fetch("https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa", {
		// 		headers: {
		// 			Authentication: `Bearer ${JSON.stringify(token)}`,
		// 		},
		// 	})
		// 		.then((res) => res.json())
		// 		.then((json) => console.log(JSON.stringify(json)));
		// }
	}, [token, session]);

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

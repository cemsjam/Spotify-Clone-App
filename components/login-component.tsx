"use client";
import React from "react";
import { signIn } from "next-auth/react";

import { Button } from "./shadcn/button";

export const LoginComponent = () => {
	return (
		<div className="signup-bg-gradient min-h-[200px] px-4 py-8 lg:p-4 flex-1 flex flex-col justify-center items-center gap-8 lg:gap-10">
			<h1 className="text-xl lg:text-[2rem] leading-[1.5] max-w-[50ch] text-center font-bold">
				Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
			</h1>
			<Button
				onClick={() => signIn("spotify")}
				className=" py-2 text-base h-12 w-[110px] lg:h-16 lg:w-[170px] rounded-full bg-white text-black lg:text-2xl font-bold hover:scale-105 "
			>
				Log in
			</Button>
		</div>
	);
};

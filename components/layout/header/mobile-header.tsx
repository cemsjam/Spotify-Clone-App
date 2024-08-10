"use client";
import React from "react";

import Logo from "@/components/Logo";
import { Button } from "@/components/shadcn/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { BREAKPOINTS_DOWN } from "@/constants/breakpoints";

const MobileHeader = () => {
	const isMobile = useMediaQuery(BREAKPOINTS_DOWN.lg);
	return (
		<div className="flex justify-between items-center h-[56px] bg-black px-4 ">
			<Logo size={32} hideText />
			<Button
				disabled
				className="disabled:cursor-not-allowed disabled:opacity-100 pointer-events-none text-sm whitespace-nowrap h-[32px] w-[93px] rounded-full bg-white text-black font-bold "
			>
				Open App
			</Button>
		</div>
	);
};

export default MobileHeader;

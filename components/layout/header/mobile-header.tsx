import React from "react";

import Logo from "@/components/Logo";
import { Button } from "@/components/shadcn/button";

const MobileHeader = () => {
	return (
		<div className="sticky top-0 lg:hidden z-[60]">
			<div className="flex justify-between items-center h-[56px] bg-black px-4 ">
				<Logo size={32} hideText />
				<Button
					disabled
					className="disabled:cursor-not-allowed disabled:opacity-100 pointer-events-none text-sm whitespace-nowrap h-[32px] w-[93px] rounded-full bg-white text-black font-bold "
				>
					Open App
				</Button>
			</div>
		</div>
	);
};

export default MobileHeader;

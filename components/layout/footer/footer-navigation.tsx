import React from "react";
import Link from "next/link";

import { footerColumns, socialLinks } from "@/constants/footerNavigationData";

import { capitalizeStr } from "@/utils/capitalize";
import { cn } from "@/utils/cn";
const FooterNavigation = ({ containerClasses = "" }: { containerClasses?: string }) => {
	return (
		<div
			className={cn(
				"px-2 lg:px-4  bg-gradient-to-b from-[#53535330] to-transparent pt-[200px]",
				containerClasses
			)}
		>
			<footer className="flex flex-col  m-4 pt-2">
				<div className="flex justify-between">
					<div className="flex-[8] grid grid-cols-3">
						{footerColumns.map((col) => (
							<ul className="flex flex-col gap-2" key={col.title}>
								<li>
									<Link className="font-bold" href={col.title}>
										{capitalizeStr(col.title)}
									</Link>
								</li>
								{col.subitems.map((item) => (
									<li key={item.label}>
										<Link
											className="text-subduedText hover:text-white hover:underline"
											href={item.href}
										>
											{capitalizeStr(item.label)}
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>
					<div className="flex-[4]">
						<ul className="flex justify-end gap-4">
							{socialLinks.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										title={capitalizeStr(item.label)}
										className="w-10 h-10 bg-[#242424] flex items-center justify-center rounded-full hover:bg-[#727272]"
									>
										<item.component size={16} />
										<span className="sr-only">{item.label}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="h-[1px] bg-contextBg w-full mt-8" />
			</footer>
		</div>
	);
};

export default FooterNavigation;

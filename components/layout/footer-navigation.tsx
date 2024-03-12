import React from "react";
import Link from "next/link";

import { footerColumns, socialLinks } from "@/constants/footerNavigationData";

import { capitalizeStr } from "@/utils/capitalize";
const FooterNavigation = () => {
	return (
		<footer className="flex flex-col mt-[200px] p-4">
			<div className="flex justify-between">
				<div className="flex-[8] grid grid-cols-3">
					{footerColumns.map((col) => (
						<ul key={col.title}>
							<li>
								<Link className="font-bold" href={col.title}>
									{capitalizeStr(col.title)}
								</Link>
							</li>
							{col.subitems.map((item) => (
								<li key={item.label}>
									<Link href={item.href}>{capitalizeStr(item.label)}</Link>
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
									className="w-10 h-10 bg-[#242424] flex items-center justify-center rounded-full"
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
	);
};

export default FooterNavigation;

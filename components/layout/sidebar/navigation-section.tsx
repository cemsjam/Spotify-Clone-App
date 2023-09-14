"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationRoutes } from "./navigation-routes";

export const NavigationSection = () => {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="flex flex-col" role="list">
				{navigationRoutes.map((item) => (
					<li key={item.label} className="py-1 px-3">
						<Link
							href={item.route}
							className="flex items-center gap-5 text-subduedText hover:text-baseText transition-colors"
						>
							{pathname === item.route ? item.activeIcon : item.icon}
							<span>{item.label}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

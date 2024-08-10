"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationRoutes } from "./navigation-routes";
import { useSidebarStore } from "@/stores/sidebar-store";
import { ActionTooltip } from "@/components/ActionTooltip";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";
import Logo from "@/components/Logo";

export const NavigationSection = () => {
	const pathname = usePathname();
	const { isOpen } = useSidebarStore();
	const { status } = useSession();

	return (
		<nav>
			<ul className="flex flex-col" role="list">
				{status === "unauthenticated" && (
					<li className="py-1 px-3">
						<Logo size={24} />
					</li>
				)}
				{navigationRoutes.map((item) => {
					if (isOpen) {
						return (
							<li key={item.label} className="py-1 px-3">
								<Link
									href={item.route}
									className={cn(
										"flex items-center gap-5 h-10 font-bold text-subduedText hover:text-baseText transition-colors",
										{
											"text-bold": pathname === item.route,
										}
									)}
								>
									{pathname === item.route ? item.activeIcon : item.icon}
									<span>{item.label}</span>
								</Link>
							</li>
						);
					} else {
						return (
							<ActionTooltip key={item.label} side="right" label={item.label}>
								<li key={item.label} className="py-1 px-3">
									<Link
										href={item.route}
										className="flex items-center gap-5 h-10 font-bold text-subduedText hover:text-baseText transition-colors"
									>
										{pathname === item.route ? item.activeIcon : item.icon}
									</Link>
								</li>
							</ActionTooltip>
						);
					}
				})}
			</ul>
		</nav>
	);
};

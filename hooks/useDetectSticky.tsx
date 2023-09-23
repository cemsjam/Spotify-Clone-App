"use client";

import { RefObject, useEffect, useState } from "react";

type targetProp = RefObject<HTMLElement>;

interface useDetectStickyPropsResult {
	isSticky: boolean;
}

export const useDetectSticky = (target: targetProp): useDetectStickyPropsResult => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const mainTarget = target?.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsSticky(entry.intersectionRatio < 1);
				});
			},
			{ threshold: 1 }
		);
		if (mainTarget) {
			observer.observe(mainTarget);
		}
		return () => {
			if (mainTarget) {
				observer.unobserve(mainTarget);
			}
		};
	}, [target]);

	return { isSticky };
};

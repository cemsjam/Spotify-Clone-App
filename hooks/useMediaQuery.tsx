"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (propQuery: string) => {
	const [matches, setMatches] = useState<boolean>(
		() => typeof window !== "undefined" && window.matchMedia(propQuery).matches
	);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const mqList = window.matchMedia(propQuery);
		const queryListener = () => setMatches(mqList.matches);
		mqList.addEventListener("change", queryListener);
		return () => mqList.removeEventListener("change", queryListener);
	}, [propQuery]);
	return matches;
};

export default useMediaQuery;

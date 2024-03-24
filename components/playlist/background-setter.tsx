"use client";
import React from "react";

import useColorExtraction from "@/hooks/useColorExtraction";
import { useBackgroundStore } from "@/stores/playlist-background-store";

const BackgroundSetter = () => {
	const imageUrl = useBackgroundStore((state) => state.currentPlaylistCoverUrl);
	// if (!imageUrl) return null;
	const { dominantColor } = useColorExtraction(imageUrl);
	return (
		dominantColor && (
			<div
				style={{ backgroundColor: dominantColor }}
				className="absolute h-[calc(var(--header-height)+400px)] -top-[var(--header-height)] left-0 right-0 z-[555]"
			>
				test
			</div>
		)
	);
};

export default BackgroundSetter;

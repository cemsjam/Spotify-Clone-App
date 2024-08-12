"use client";
import React from "react";

import useColorExtraction from "@/hooks/useColorExtraction";
import { useBackgroundStore } from "@/stores/playlist-background-store";

const BackgroundSetter = ({ imageUrl }: { imageUrl: string }) => {
	// if (!imageUrl) return null;
	const { dominantColor } = useColorExtraction(imageUrl);
	return (
		dominantColor && (
			<div
				style={{ backgroundColor: dominantColor }}
				className="absolute inset-0 pt-[var(--header-height)] -top-[var(--header-height)] "
			/>
		)
	);
};

export default BackgroundSetter;
// h-[calc(var(--header-height)+400px)] -top-[var(--header-height)]

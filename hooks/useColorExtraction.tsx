import { useState, useEffect } from "react";

interface ColorExtractorSettings {
	quality?: number; // You can add more settings if needed
}

interface ColorExtractorResult {
	dominantColor: string | null;
}

const useColorExtraction = (
	imageUrl: string,
	settings?: ColorExtractorSettings
): ColorExtractorResult => {
	const [dominantColor, setDominantColor] = useState<string | null>(null);

	useEffect(() => {
		const image = new Image();
		image.crossOrigin = "Anonymous"; // Enable CORS for the image
		image.src = imageUrl;

		image.onload = () => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");

			if (!ctx) {
				console.error("Unable to get 2D context");
				return;
			}

			// Set canvas dimensions to match the image
			canvas.width = image.width;
			canvas.height = image.height;

			// Draw the image onto the canvas
			ctx.drawImage(image, 0, 0, image.width, image.height);

			// Get image data from the canvas
			const imageData = ctx.getImageData(0, 0, image.width, image.height).data;

			// Analyze the image data to find the dominant color
			const color = findDominantColor(imageData);

			// Set the dominant color in state
			setDominantColor(color);
		};
	}, [imageUrl, settings]);

	const findDominantColor = (imageData: Uint8ClampedArray): string | null => {
		// Your logic to analyze imageData and find the dominant color
		// This can be a simple algorithm or more complex color analysis

		// For simplicity, let's just get the average color
		let totalRed = 0;
		let totalGreen = 0;
		let totalBlue = 0;

		for (let i = 0; i < imageData.length; i += 4) {
			totalRed += imageData[i];
			totalGreen += imageData[i + 1];
			totalBlue += imageData[i + 2];
		}

		const averageRed = totalRed / (imageData.length / 4);
		const averageGreen = totalGreen / (imageData.length / 4);
		const averageBlue = totalBlue / (imageData.length / 4);

		return `rgb(${averageRed}, ${averageGreen}, ${averageBlue})`;
	};

	return { dominantColor };
};

export default useColorExtraction;

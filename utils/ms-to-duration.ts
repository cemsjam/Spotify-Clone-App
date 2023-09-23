export function msToDuration(ms: number) {
	const seconds = Math.floor(ms / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const formattedMinutes = String(minutes % 60).padStart(2, "0");

	if (hours === 0) {
		return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
	} else {
		const formattedHours = hours < 10 ? String(hours) : String(hours).padStart(2, "0");
		return `${formattedHours}:${formattedMinutes}`;
	}
}

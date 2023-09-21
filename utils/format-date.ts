export const formatDate = (value: number | Date) =>
	Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(
		value
	);

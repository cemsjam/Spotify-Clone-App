import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				baseText: "var(--text-base)",
				subduedText: "var(--text-subdued)",
				baseBg: "var(--background-base)",
				componentBg: "var(--background-component)",
			},
			width: {
				leftSideBarWidth: "var(--left-sidebar-width)",
				headerWidth: "var(--header-width)",
				footerWidth: "var(--footer-width)",
			},
			spacing: {
				panelGap: "var(--panel-gap)",
			},
			borderRadius: {
				base: "var(--border-radius-base)",
			},
		},
	},
	plugins: [],
};
export default config;

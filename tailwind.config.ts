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
				primaryHighlight: "var(--primary-highlight)",
				baseText: "var(--text-base)",
				subduedText: "var(--text-subdued)",
				baseBg: "var(--background-base)",
				componentBg: "var(--background-component)",
				contextBg: "var(--background-context)",
				highlightBg: "var(--background-highlight)",
			},
			maxWidth: {
				leftSideBarWidth: "var(--left-sidebar-width)",
				leftSideBarMinifiedWidth: "var(--left-sidebar-minified-width)",
			},
			width: {
				leftSideBarWidth: "var(--left-sidebar-width)",
				leftSideBarMinifiedWidth: "var(--left-sidebar-minified-width)",
			},
			height: {
				footerHeight: "var(--footer-height)",
				headerHeight: "var(--header-height)",
			},
			spacing: {
				panelGap: "var(--panel-gap)",
			},
			borderRadius: {
				base: "var(--border-radius-base)",
			},
			boxShadow: {
				tooltip: "var(--action-tooltip-box-shadow)",
			},
		},
	},
	plugins: [],
};
export default config;

// import { Instagram, Twitter, Facebook } from "lucide-react";
import { RiFacebookCircleFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const company = {
	title: "company",
	subitems: [
		{
			label: "about",
			href: "/",
		},
		{
			label: "jobs",
			href: "/",
		},
		{
			label: "for the record",
			href: "/",
		},
	],
} as const;

const communities = {
	title: "communities",
	subitems: [
		{
			label: "for Artists",
			href: "/",
		},
		{
			label: "Developers",
			href: "/",
		},
		{
			label: "Advertising",
			href: "/",
		},
		{
			label: "Investors",
			href: "/",
		},
		{
			label: "Vendors",
			href: "/",
		},
	],
} as const;

const useFullLinks = {
	title: "useful links",
	subitems: [
		{
			label: "support",
			href: "/",
		},
		{
			label: "free Mobile App",
			href: "/",
		},
		{
			label: "consumer rights",
			href: "/",
		},
	],
} as const;

export const footerColumns = [company, communities, useFullLinks];

export const socialLinks = [
	{
		label: "instagram",
		component: RiInstagramLine,
		href: "/inactive",
	},
	{
		label: "twitter",
		component: RiTwitterFill,
		href: "/inactive",
	},
	{
		label: "facebook",
		component: RiFacebookCircleFill,
		href: "/inactive",
	},
];

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/utils/cn";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone App",
	description: "Spotify Clone By Cems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(font.className, "")}>
				<div className="layout-grid">
					<div className="sidebar-parent-grid">
						<Sidebar />
					</div>
					<div className="main-parent-grid">
						<Header />
						<main>{children}</main>
					</div>
					<div className="footer-parent-grid">
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}

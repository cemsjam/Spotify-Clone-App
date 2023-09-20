import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import { cn } from "@/utils/cn";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import AuthProvider from "@/providers/auth-provider";

// const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone App",
	description: "Spotify Clone By Cems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={cn("font-sans p-panelGap !h-screen flex flex-col")}>
					<div className="flex-1 flex gap-panelGap">
						<Sidebar />
						<div className="flex-grow-[1.5] bg-componentBg">
							<Header />
							<main>{children}</main>
						</div>
					</div>
					<Footer />
				</body>
			</AuthProvider>
		</html>
	);
}

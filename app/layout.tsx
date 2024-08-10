import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import { cn } from "@/utils/cn";

import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import AuthProvider from "@/providers/auth-provider";
import BackgroundSetter from "@/components/playlist/background-setter";
import MobileHeader from "@/components/layout/header/mobile-header";

// const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone App",
	description: "Spotify Clone By Cems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={cn("font-sans lg:p-panelGap !h-screen flex flex-col lg:overflow-hidden")}>
					<div className="flex-1 flex gap-panelGap">
						<Sidebar />
						<div className="flex-grow-[9] bg-componentBg rounded-base lg:overflow-hidden">
							<div className="hidden lg:block">
								<Header />
							</div>
							<div className="sticky top-0 lg:hidden">
								<MobileHeader />
							</div>

							<main className="h-[calc(100vh-var(--header-height)-var(--footer-height)-var(--panel-gap))] overflow-y-auto">
								{children}
							</main>

							{/* <BackgroundSetter /> */}
						</div>
					</div>
					<Footer />
				</body>
			</AuthProvider>
		</html>
	);
}

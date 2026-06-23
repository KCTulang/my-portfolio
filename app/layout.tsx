import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "My Portfolio",
	description:
		"Portfolio website showcasing my projects and skills as a software developer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<header className="p-4 border-b">
					<nav>
						<h1 className="font-bold text-xl">My Portfolio</h1>
					</nav>
				</header>

				<main className="flex-1">{children}</main>

				<footer className="bg-white text-black text-center py-4 mt-auto">
					<p>
						&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
					</p>
				</footer>
			</body>
		</html>
	);
}

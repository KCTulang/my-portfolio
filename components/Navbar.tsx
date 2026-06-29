"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "About Me", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact ME", path: "/contact" },
	];

	return (
		<header
			className={`fixed left-0 right-0 z-80 mx-auto flex justify-center will-change-transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
				isScrolled ? "top-6 w-[calc(100%-2rem)] max-w-4xl" : "top-0 w-full"
			}`}
		>
			<nav
				className={`flex w-full flex-col md:flex-row items-center justify-between text-(--color-rich-black) transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-(--color-ivory) ${
					isScrolled
						? "rounded-3xl px-6 py-3 shadow-[0_2px_8px_rgb(0,0,0,0.40)]"
						: "px-8 py-4 shadow-[0_2px_4px_rgb(0,0,0,0.40)]"
				}`}
			>
				{/* Logo and Mobile Toggle */}
				<div className="flex w-full items-center justify-between md:w-auto">
					<Link
						href="/"
						onClick={() => {
							setIsMenuOpen(false);
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						className="text-xs font-bold tracking-[0.2em] uppercase"
					>
						<span className="hover:text-(--color-crimson) transition-colors duration-500">
							KC Tulang
						</span>
					</Link>
					<button
						type="button"
						className="md:hidden p-1 text-(--color-rich-black)"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? "✕" : "☰"}
					</button>
				</div>

				{/* Menu Container */}
				<div
					className={`${
						isMenuOpen ? "flex" : "hidden"
					} md:flex w-full md:w-auto flex-col md:flex-row items-center gap-1 mt-4 md:mt-0 pb-4 md:pb-0 z-50`}
				>
					{navLinks.map((item) => {
						const isActive = pathname === item.path;
						return (
							<div
								key={item.name}
								className="relative w-full md:w-auto text-center"
							>
								<Link
									href={item.path}
									onClick={() => setIsMenuOpen(false)}
									className={`block px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ease-in-out ${
										isActive
											? "font-bold text-(--color-crimson) bg-(--color-crimson)/10 rounded-full"
											: "font-bold text-[--color-charcoal] hover:bg-(--color-crimson)/10 hover:text-(--color-crimson) rounded-full"
									}`}
								>
									{item.name}
								</Link>
							</div>
						);
					})}
				</div>
			</nav>
		</header>
	);
}

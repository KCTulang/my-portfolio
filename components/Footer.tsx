import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-(--color-ivory) text-(--color-rich-black) px-8 md:px-16 lg:px-24 py-10 shadow-[0_-8px_10px_rgb(0,0,0,0.10)]">
			<div className="max-w-5xl mx-auto w-full">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8">
					<div className="space-y-2 max-w-sm">
						<Link
							href="/"
							className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-rich-black) hover:text-(--color-crimson) transition-colors duration-300"
						>
							Kenneth Claire Tulang
						</Link>
						<p className="text-sm text-[--color-charcoal] leading-relaxed">
							A CS student at PUP Sta. Mesa building her first personal project
							— one component at a time.
						</p>
					</div>
					<div className="space-y-2">
						<p className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-crimson)">
							Find me on
						</p>
						<ul className="space-y-2">
							{[
								{ label: "GitHub", href: "https://github.com/KCTulang" },
								{ label: "LinkedIn", href: "https://linkedin.com/kctulang" },
								{ label: "Email", href: "mailto:kctulang10@gmail.com" },
							].map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-[--color-charcoal] hover:text-(--color-crimson) transition-colors duration-300"
									>
										{item.label} →
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 mt-8 border-t border-[--color-charcoal]/10">
					<p className="text-xs text-[--color-charcoal]">
						© {new Date().getFullYear()} Kenneth Claire Tulang. All rights
						reserved.
					</p>
					<p className="text-xs text-[--color-charcoal]">
						Built with{" "}
						<span className="font-semibold text-(--color-rich-black)">
							Next.js
						</span>{" "}
						&{" "}
						<span className="font-semibold text-(--color-rich-black)">
							Tailwind CSS
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}

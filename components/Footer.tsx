import Link from "next/link";

export default function Footer() {
	return (
		<footer className="relative z-10 bg-(--color-ivory) text-rich-black dark:bg-black dark:text-ivory px-8 md:px-16 lg:px-24 py-10 shadow-[0_-8px_10px_rgb(0,0,0,0.10)] dark:shadow-[0_-8px_10px_rgb(255,255,255,0.03)]">
			<div className="max-w-5xl mx-auto w-full">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8">
					<div className="space-y-2 max-w-sm">
						<Link
							href="/"
							className="text-xs font-bold tracking-[0.2em] uppercase text-rich-black dark:text-ivory hover:text-crimson dark:hover:text-crimson transition-colors duration-300"
						>
							Kenneth Claire Tulang
						</Link>
						<p className="text-sm text-charcoal dark:text-ivory/70 leading-relaxed">
							A CS student at PUP Sta. Mesa building her first personal project
							— one component at a time.
						</p>
					</div>
					<div className="space-y-2">
						<p className="text-xs font-bold tracking-[0.2em] uppercase text-crimson dark:text-ivory">
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
										className="text-sm text-charcoal dark:text-ivory/70 hover:text-crimson dark:hover:text-crimson transition-colors duration-300"
									>
										{item.label} →
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 mt-8 border-t border-charcoal/10 dark:border-ivory/10">
					<p className="text-xs text-charcoal dark:text-ivory/70">
						© {new Date().getFullYear()} Kenneth Claire Tulang. All rights
						reserved.
					</p>
					<p className="text-xs text-charcoal dark:text-ivory/70">
						Built with{" "}
						<span className="font-semibold text-rich-black dark:text-ivory">
							Next.js
						</span>{" "}
						&{" "}
						<span className="font-semibold text-rich-black dark:text-ivory">
							Tailwind CSS
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}

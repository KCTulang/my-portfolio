import Contact from "./Contact";

export default function ContactPage() {
	return (
		<main className="min-h-screen w-full bg-ivory dark:bg-black transition-colors duration-500">
			<div className="bg-ruby dark:bg-white/5 dark:backdrop-blur-md px-6 sm:px-10 md:px-16 lg:px-24 pt-36 pb-20 rounded-b-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-none dark:border-b dark:border-white/10 transition-colors duration-500">
				<div className="max-w-5xl mx-auto">
					<p className="text-xs font-bold tracking-[0.3em] uppercase text-ivory/60 dark:text-watermelon mb-3 animate-fade-in transition-colors">
						Contact
					</p>
					<h1 className="text-5xl sm:text-6xl font-extrabold text-ivory dark:text-white tracking-tight leading-tight transition-colors">
						Let&apos;s talk
					</h1>
					<p className="mt-4 text-base sm:text-lg text-ivory/80 dark:text-white/70 leading-relaxed max-w-xl font-medium transition-colors">
						Whether you have a project in mind, a role to fill, or just want to
						connect — I&apos;d love to hear from you.
					</p>
				</div>
			</div>

			<div className="px-6 sm:px-10 md:px-16 lg:px-24 py-20">
				<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
					<aside className="flex flex-col gap-10 lg:pt-4 lg:sticky lg:top-28">
						<div className="flex flex-col gap-2">
							<p className="text-xs font-bold uppercase tracking-widest text-ruby/80 dark:text-watermelon/90 transition-colors">
								Email
							</p>
							<a
								href="mailto:kctulang10@gmail.com"
								className="text-base font-semibold text-rich-black dark:text-ivory hover:text-ruby dark:hover:text-watermelon transition-colors duration-200 underline underline-offset-4 decoration-ruby/30 dark:decoration-watermelon/30 hover:decoration-ruby dark:hover:decoration-watermelon"
							>
								kctulang10@gmail.com
							</a>
						</div>

						<div className="flex flex-col gap-3.5">
							<p className="text-xs font-bold uppercase tracking-widest text-ruby/80 dark:text-watermelon/90 transition-colors">
								Elsewhere
							</p>
							<ul className="flex flex-col gap-3">
								{[
									{ label: "GitHub", href: "https://github.com" },
									{ label: "LinkedIn", href: "https://linkedin.com" },
								].map(({ label, href }) => (
									<li key={label}>
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-base font-semibold text-rich-black/80 dark:text-ivory/80 hover:text-ruby dark:hover:text-watermelon transition-colors duration-200 group inline-flex items-center gap-1.5"
										>
											{label}
											<span className="text-ruby/60 dark:text-watermelon/60 group-hover:text-ruby dark:group-hover:text-watermelon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">
												↗
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</aside>

					<section className="w-full">
						<Contact />
					</section>
				</div>
			</div>
		</main>
	);
}

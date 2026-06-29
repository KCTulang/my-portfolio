import Contact from "./Contact";

export default function ContactPage() {
	return (
		<main className="min-h-screen w-full bg-(--color-ivory)">
			<div className="bg-(--color-ruby) px-6 sm:px-10 md:px-16 lg:px-24 pt-36 pb-20 rounded-b-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
				<div className="max-w-5xl mx-auto">
					<p className="text-xs font-bold tracking-[0.3em] uppercase text-(--color-ivory)/60 mb-3 animate-fade-in">
						Contact
					</p>
					<h1 className="text-5xl sm:text-6xl font-extrabold text-(--color-ivory) tracking-tight leading-tight">
						Let&apos;s talk
					</h1>
					<p className="mt-4 text-base sm:text-lg text-(--color-ivory)/80 leading-relaxed max-w-xl font-medium">
						Whether you have a project in mind, a role to fill, or just want to
						connect — I&apos;d love to hear from you.
					</p>
				</div>
			</div>

			<div className="px-6 sm:px-10 md:px-16 lg:px-24 py-20">
				<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
					<aside className="flex flex-col gap-10 lg:pt-4 lg:sticky lg:top-28">
						<div className="flex flex-col gap-2">
							<p className="text-xs font-bold uppercase tracking-widest text-(--color-ruby)/80">
								Email
							</p>
							<a
								href="mailto:kctulang10@gmail.com"
								className="text-base font-semibold text-(--color-rich-black) hover:text-(--color-ruby) transition-colors duration-200 underline underline-offset-4 decoration-(--color-ruby)/30 hover:decoration-(--color-ruby)"
							>
								kctulang10@gmail.com
							</a>
						</div>

						<div className="flex flex-col gap-3.5">
							<p className="text-xs font-bold uppercase tracking-widest text-(--color-ruby)/80">
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
											className="text-base font-semibold text-(--color-rich-black)/80 hover:text-(--color-ruby) transition-colors duration-200 group inline-flex items-center gap-1.5"
										>
											{label}
											<span className="text-(--color-ruby)/60 group-hover:text-(--color-ruby) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">
												↗
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-(--color-ruby)/15 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-crimson) opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-crimson)"></span>
							</span>
							<span className="text-xs text-(--color-rich-black)/70 font-semibold tracking-wide">
								Available for work
							</span>
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

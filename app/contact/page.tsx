"use client";

import { Mail } from "lucide-react";
import Contact from "./Contact";

function _GithubIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="GitHub Logo"
			{...props}
		>
			<title>GitHub</title>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}

function _LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="LinkedIn Logo"
			{...props}
		>
			<title>LinkedIn</title>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

export default function ContactPage() {
	return (
		<main className="min-h-screen w-full bg-ivory dark:bg-black transition-colors duration-500">
			<div className="relative overflow-hidden bg-ruby dark:bg-white/5 dark:backdrop-blur-md px-6 sm:px-10 md:px-16 lg:px-24 pt-36 pb-20 rounded-b-[2rem] shadow-xl dark:shadow-none dark:border-b dark:border-white/10 transition-colors duration-500">
				<div
					aria-hidden="true"
					className="pointer-events-none select-none absolute -top-8 -right-6 sm:right-4 font-mono font-black leading-none text-[clamp(140px,20vw,220px)] tracking-tighter text-ivory/10 dark:text-white/10"
				>
					@
				</div>

				<div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
					<p className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-ivory/60 dark:text-watermelon mb-3 flex items-center justify-center md:justify-start gap-2.5 after:content-[''] after:hidden md:after:block after:w-8 after:h-px after:bg-ivory dark:after:bg-watermelon after:opacity-40 transition-colors">
						Contact
					</p>
					<h1 className="text-5xl sm:text-6xl font-extrabold text-ivory dark:text-white tracking-[-0.03em] leading-[0.95] transition-colors">
						Let&apos;s talk
					</h1>
					<p className="mt-6 text-base sm:text-lg text-ivory/80 dark:text-white/70 leading-relaxed max-w-xl font-medium transition-colors mx-auto md:mx-0">
						Got a vision? Let&apos;s write the code for it. I&apos;m always open
						to new roles, wild projects, and good conversations—let&apos;s make
						it happen.
					</p>
				</div>
			</div>

			<div className="px-6 sm:px-10 md:px-16 lg:px-24 py-20">
				<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
					<aside className="lg:sticky lg:top-28">
						<div className="flex flex-col gap-6 rounded-2xl border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 p-7 transition-colors shadow-sm">
							<div className="flex flex-col gap-2">
								<p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ruby/80 dark:text-watermelon/90 flex items-center gap-1.5 transition-colors">
									<Mail className="h-3 w-3" strokeWidth={2.5} />
									Email
								</p>
								<a
									href="mailto:kctulang10@gmail.com"
									className="text-base font-semibold text-rich-black dark:text-ivory hover:text-ruby dark:hover:text-watermelon transition-colors duration-200 underline underline-offset-4 decoration-ruby/30 dark:decoration-watermelon/30 hover:decoration-ruby dark:hover:decoration-watermelon break-all"
								>
									kctulang10@gmail.com
								</a>
							</div>

							<div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-ruby/5 dark:bg-watermelon/10 border border-ruby/10 dark:border-watermelon/20 w-fit">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby dark:bg-watermelon opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-ruby dark:bg-watermelon"></span>
								</span>
							</div>
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

"use client";

import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	return (
		<div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16">
			<div className="max-w-5xl mx-auto w-full space-y-10">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
					<div className="max-w-5xl mx-auto w-full">
						<div className="flex-1 space-y-10">
							<div className="inline-flex items-center gap-2 px-8 py-1.5 rounded-full bg-[--color-charcoal]/5 border border-[--color-charcoal]/10 text-xs font-semibold tracking-widest uppercase text-[--color-charcoal] hover:border-(--color-crimson)/30 hover:text-(--color-crimson) hover:bg-(--color-crimson)/5 transition-all duration-300 cursor-default">
								📍 Taguig City
							</div>
							<div className="space-y-4">
								<p className="text-xs font-semibold tracking-[0.25em] uppercase text-(--color-crimson)">
									Aspiring Front-End Developer
								</p>
								<h1 className="text-[clamp(2.8rem,8vw,5rem)] font-black tracking-tighter text-(--color-rich-black) leading-[0.95]">
									Hello, I'm <span className="text-(--color-crimson)">KC.</span>{" "}
									Eager to build great things.
								</h1>
							</div>

							<div className="flex items-start gap-6 max-w-xl">
								<div className="w-px h-16 bg-(--color-crimson)/40 shrink-0 mt-1" />
								<p className="text-base md:text-lg text-[--color-charcoal] leading-relaxed">
									Still learning the ropes, but I genuinely enjoy building
									things for the web. Figuring it all out — one component at a
									time.
								</p>
							</div>
							<div className="flex flex-wrap items-center gap-1">
								<Link
									href="/projects"
									className="group relative overflow-hidden bg-(--color-rich-black) text-(--color-ivory) px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_8px_24px_rgb(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98]"
								>
									<span className="relative z-10 group-hover:text-white transition-colors duration-300">
										View My Work
									</span>
									<span className="absolute inset-0 bg-(--color-crimson) translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</Link>

								<Link
									href="/about"
									className="group relative overflow-hidden border border-[--color-charcoal]/30 text-(--color-rich-black) px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-(--color-crimson) hover:shadow-[0_4px_16px_rgb(145,47,64,0.15)] hover:scale-[1.02] active:scale-[0.98]"
								>
									<span className="relative z-10 group-hover:text-(--color-crimson) transition-colors duration-300">
										About Me
									</span>
									<span className="absolute inset-0 bg-(--color-crimson)/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</Link>

								<Link
									href="/contact"
									className="group relative overflow-hidden border border-[--color-charcoal]/30 text-(--color-rich-black) px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-(--color-crimson) hover:shadow-[0_4px_16px_rgb(145,47,64,0.15)] hover:scale-[1.02] active:scale-[0.98]"
								>
									<span className="relative z-10 group-hover:text-(--color-crimson) transition-colors duration-300">
										Get in Touch
									</span>
									<span className="absolute inset-0 bg-(--color-crimson)/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</Link>
							</div>
						</div>
					</div>

					<div className="relative shrink-0 w-64 md:w-72 lg:w-120">
						<div className="absolute inset-0 rounded-full scale-120" />
						<Image
							src="/Image/KC.png"
							alt="KC - Aspiring Front End Developer"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

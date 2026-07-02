import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	return (
		<div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16">
			<div className="max-w-5xl mx-auto w-full space-y-10">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
					<div className="max-w-5xl mx-auto w-full">
						<div className="flex-1 space-y-10">
							<div className="inline-flex items-center gap-2 px-8 py-1.5 rounded-full bg-charcoal/5 dark:bg-ivory/5 border border-charcoal/10 dark:border-ivory/10 text-xs font-semibold tracking-widest uppercase text-charcoal dark:text-ivory/80 hover:border-crimson/30 hover:text-crimson dark:hover:text-watermelon hover:bg-crimson/5 transition-all duration-300 cursor-default">
								📍 Taguig City
							</div>

							<div className="space-y-4">
								<p className="text-xs font-semibold tracking-widest uppercase text-crimson dark:text-watermelon">
									Aspiring Front-End Developer
								</p>
								<h1 className="text-[clamp(2.8rem,8vw,5rem)] font-black tracking-tighter text-rich-black dark:text-ivory leading-[0.95]">
									Hello, I'm{" "}
									<span className="text-crimson dark:text-watermelon">KC.</span>{" "}
									Eager to build great things.
								</h1>
							</div>

							<div className="flex items-start gap-6 max-w-xl">
								<div className="w-px h-16 bg-crimson/40 shrink-0 mt-1 dark:bg-watermelon/40" />
								<p className="text-base md:text-lg text-charcoal dark:text-ivory/70 leading-relaxed">
									Still learning the ropes, but I genuinely enjoy building
									things for the web. Figuring it all out — one component at a
									time.
								</p>
							</div>

							<div className="flex flex-wrap items-center gap-1">
								<Link
									href="/projects"
									className="group relative overflow-hidden bg-rich-black dark:bg-ivory text-ivory dark:text-rich-black px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_8px_24px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_8px_24px_rgb(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98]"
								>
									<span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
										View My Work
									</span>
									<span className="absolute inset-0 bg-crimson dark:bg-watermelon translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</Link>

								<Link
									href="/about"
									className="group relative overflow-hidden border border-charcoal/30 dark:border-ivory/30 text-rich-black dark:text-ivory px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-crimson dark:hover:border-crimson hover:shadow-[0_4px_16px_rgb(145,47,64,0.15)] hover:scale-[1.02] active:scale-[0.98]"
								>
									<span className="relative z-10 group-hover:text-crimson  dark:group-hover:text-watermelon transition-colors duration-300">
										About Me
									</span>
									<span className="absolute inset-0 bg-crimson/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</Link>

								<Link
									href="/contact"
									className="group relative overflow-hidden border border-charcoal/30 dark:border-ivory/30 text-rich-black dark:text-ivory px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-crimson dark:hover:border-crimson hover:shadow-[0_4px_16px_rgb(145,47,64,0.15)] hover:scale-[1.02] active:scale-[0.98]"
								>
									<span className="relative z-10 group-hover:text-crimson  dark:group-hover:text-watermelon transition-colors duration-300">
										Get in Touch
									</span>
									<span className="absolute inset-0 bg-crimson/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</Link>
							</div>
						</div>
					</div>

					<div className="relative shrink-0 w-64 md:w-72 lg:w-120">
						<div className="absolute inset-0 rounded-full scale-120 dark:bg-ivory/5 blur-3xl transition-colors duration-500" />
						<Image
							loading="eager"
							priority
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

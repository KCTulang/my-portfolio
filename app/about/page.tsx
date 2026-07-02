import Image from "next/image";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

import AboutSkeleton from "./loading";

export default function AboutPage() {
	return (
		<Suspense fallback={<AboutSkeleton />}>
			<AboutContent />
		</Suspense>
	);
}

async function AboutContent() {
	{
		/* throw new Error("This is a manual test to check the error boundary!"); For error testing */
	}

	await new Promise((resolve) => {
		setTimeout(() => {
			resolve("intentional delay");
		}, 500);
	});

	const cards = [
		{
			label: "Education",
			primary: "Polytechnic University of the Philippines",
			secondary: "Sta. Mesa, Manila",
		},
		{
			label: "Experience",
			primary: "Designer/Analyst Intern ",
			secondary: "@ DOST-PES",
		},
		{
			label: "Tech Stack",
			primary: "HTML, CSS, JavaScript, Java, PHP",
			secondary: "Other Tools: Laravel, Flask, Figma, Git",
		},
		{
			label: "Interests",
			primary: "UI/UX & Graphic Design, Web Development",
			secondary: "Hobbies: Gaming, Photography, Coffee Making",
		},
	];

	return (
		<section className="min-h-screen bg-ruby w-full pt-10 pb-10 relative overflow-hidden flex items-center justify-center">
			<div className="w-full relative flex flex-col items-center gap-5 mt-6 z-10 px-4 lg:block lg:max-w-[1600px] lg:h-187.5 xl:h-225 lg:mx-auto lg:mt-0 xl:px-16 lg:gap-0">
				<h1 className="relative order-first lg:absolute lg:order-0 z-0 flex w-full justify-center lg:justify-end text-[clamp(3.5rem,14vw,6rem)] lg:text-[clamp(4.5rem,11.5vw,12rem)] font-extrabold uppercase tracking-[-0.06em] text-ivory transform scale-y-120 origin-bottom pointer-events-none select-none mt-2 -mb-4 lg:mt-0 lg:mb-0 lg:right-4 xl:right-10 lg:top-5 lg:w-auto lg:whitespace-nowrap">
					About Me
				</h1>

				<div className="order-1 relative w-[75vw] max-w-75 aspect-4/5 lg:order-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:top-15 lg:z-20 lg:w-[32vw] xl:w-[38vw] 2xl:w-[40vw] lg:max-w-150 lg:-ml-2 xl:-ml-5 lg:aspect-auto">
					<Image
						loading="eager"
						src="/Image/KC-About.png"
						alt="KC - Aspiring Front End Developer"
						fill
						sizes="(max-width: 1024px) 75vw, (max-width: 1600px) 40vw, 600px"
						className="object-contain lg:object-bottom select-none pointer-events-none"
					/>
				</div>

				<div className="contents lg:absolute lg:right-4 xl:right-10 lg:top-60 xl:top-80 lg:z-30 lg:flex lg:w-full lg:max-w-75 xl:max-w-105 2xl:max-w-125 lg:flex-col lg:gap-4 xl:gap-8 lg:text-right text-ivory">
					<div className="order-2 flex flex-col gap-2 text-center w-full max-w-md px-2 lg:order-0 lg:gap-2 xl:gap-3 lg:text-right lg:max-w-none lg:px-0">
						<h2 className="text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl font-bold tracking-tight">
							Driven by Design. Powered by Code.
						</h2>
						<p className="text-m sm:text-base lg:text-xs xl:text-base 2xl:text-lg leading-relaxed opacity-90">
							I am a graduating Computer Science student at PUP Manila with a
							growing passion for Front-End Development and UI/UX. I am actively
							learning to build responsive, human-centric interfaces that bridge
							the gap between complex logic and beautiful aesthetics.
						</p>
					</div>

					<div className="order-3 w-full max-w-md border-t border-b border-ivory/15 py-4 grid grid-cols-2 text-center px-4 lg:order-0 lg:max-w-none lg:border-b-0 lg:border-ivory/20 lg:py-0 lg:pt-4 xl:pt-8 lg:gap-2 xl:gap-4 lg:text-right lg:px-0 lg:mt-0">
						<div className="border-r border-ivory/10 lg:border-none">
							<p className="text-[11px] lg:text-[9px] xl:text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
								Based In
							</p>
							<p className="text-s lg:text-sm xl:text-lg 2xl:text-xl font-semibold tracking-tight opacity-90">
								Taguig City, PH
							</p>
						</div>
						<div>
							<p className="text-[11px] lg:text-[9px] xl:text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
								Current Role
							</p>
							<p className="text-s lg:text-sm xl:text-lg 2xl:text-xl font-semibold tracking-tight opacity-90">
								Software Engineer Intern
							</p>
							<p className="text-[11px] lg:text-[9px] xl:text-[11px] 2xl:text-sm font-bold uppercase tracking-tight opacity-50 mb-1">
								Stratpoint
							</p>
						</div>
					</div>

					<div className="order-5 flex flex-col sm:flex-row gap-3 w-full max-w-md pt-2 lg:order-0 lg:w-full lg:max-w-none lg:justify-end lg:gap-2 xl:gap-4 lg:pt-2 xl:pt-4 lg:mt-0">
						<Button
							asChild
							variant="ghost"
							className="w-full sm:w-1/2 lg:w-auto px-6 py-4 rounded-xl bg-white/5 border border-ivory/25 text-sm font-bold tracking-wide text-ivory hover:bg-(--color-crimson) hover:border-(--color-crimson) hover:text-ivory transition-all duration-300 h-auto cursor-pointer lg:px-4 xl:px-6 2xl:px-8 lg:py-4 xl:py-6 lg:rounded-full lg:border-ivory/30 lg:text-[10px] xl:text-sm 2xl:text-base lg:active:scale-98"
						>
							<a href="/projects">View My Work</a>
						</Button>
						<Button
							asChild
							className="w-full sm:w-1/2 lg:w-auto px-6 py-4 rounded-xl bg-white/5 border border-ivory/25 text-sm font-bold tracking-wide text-ivory hover:bg-(--color-crimson) hover:border-(--color-crimson) hover:text-ivory transition-all duration-300 h-auto cursor-pointer lg:px-4 xl:px-6 2xl:px-8 lg:py-4 xl:py-6 lg:rounded-full lg:border-ivory/30 lg:text-[10px] xl:text-sm 2xl:text-base lg:active:scale-98"
						>
							<a href="/contact">Let&apos;s Talk</a>
						</Button>
					</div>
				</div>

				<div className="order-4 flex flex-col gap-3 w-full max-w-md lg:order-0 lg:absolute lg:left-2 xl:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:z-50 lg:gap-4 xl:gap-8 lg:max-w-65 xl:max-w-100 2xl:max-w-125">
					{cards.map((card, index) => {
						const isArcEdge = index === 0 || index === 3;

						return (
							<div
								key={card.label}
								className={`w-full bg-ivory/95 backdrop-blur-sm px-6 py-4 sm:py-5 rounded-2xl sm:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/30 transition-all duration-300 active:scale-98 flex flex-col text-center lg:justify-center lg:px-4 xl:px-8 lg:py-4 xl:py-6 lg:shadow-[0_8px_30px_rgb(0,0,0,0.08)] lg:border-white/40 lg:h-25 xl:h-35 2xl:h-40 lg:hover:scale-105 lg:active:scale-100 ${isArcEdge ? "lg:translate-x-4 xl:translate-x-10" : "lg:translate-x-0"}`}
							>
								<p className="text-[0.65rem] font-extrabold uppercase tracking-widest text-ruby/70 lg:text-[10px] xl:text-xs 2xl:text-sm lg:mb-1 xl:mb-2">
									{card.label}
								</p>
								<p className="text-sm font-bold tracking-tight text-ruby leading-snug mt-1 px-2 lg:px-0 lg:mt-0 lg:text-xs xl:text-base 2xl:text-lg">
									{card.primary}
									<span className="block text-xs font-medium opacity-80 mt-0.5 lg:text-[10px] xl:text-xs 2xl:text-sm xl:mt-1">
										{card.secondary}
									</span>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

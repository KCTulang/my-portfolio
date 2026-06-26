import Image from "next/image";

export default async function AboutPage() {
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
			primary: "SWE Intern @ Stratpoint Technologies",
			secondary: "Past: Designer/Analyst Intern @ DOST-PES",
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
		<section className="min-h-screen bg-(--color-ruby) w-full px-16 md:px-16 lg:px-24 pt-28 pb-30">
			<h1 className="absolute left-0 top-13 z-0 flex w-full justify-end pr-4 text-[clamp(2rem,20vw,10rem)] font-extrabold uppercase tracking-[-0.09em] text-(--color-ivory) transform scale-y-120 origin-bottom">
				About Me
			</h1>

			{/* Desktop */}
			<div className="hidden lg:block">
				<div className="absolute right-0 top-88 md:top-64 z-30 flex w-full max-w-md flex-col gap-2 pr-4 text-right text-(--color-ivory)">
					<h2 className="text-2xl font-bold tracking-tight">
						Driven by Design. Powered by Code.
					</h2>
					<p className="text-base leading-relaxed opacity-90">
						I am a graduating Computer Science student at PUP Manila with a
						growing passion for Front-End Development and UI/UX. I am actively
						learning to build responsive, human-centric interfaces that bridge
						the gap between complex logic and beautiful aesthetics.
					</p>
				</div>

				{/* Image */}
				<Image
					loading="eager"
					src="/Image/KC-About.png"
					alt="KC - Aspiring Front End Developer"
					width={500}
					height={500}
					className="relative left-120 top-12 z-20"
				/>

				{/* Cards */}
				<div className="absolute left-35 top-40 z-50 text-center bg-(--color-ivory)/95 backdrop-blur-sm px-8 py-1 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 h-35 w-120 transition-transform hover:scale-105">
					<p className="text-s font-extrabold uppercase tracking-widest text-(--color-ruby)/70 mt-10">
						Education
					</p>
					<p className="text-base font-bold tracking-tight text-(--color-ruby) leading-snug">
						Polytechnic University of the Philippines
						<span className="block text-sm font-medium opacity-80 -mt-1">
							Sta. Mesa, Manila
						</span>
					</p>
				</div>
				<div className="absolute left-20 top-80 z-50 text-center bg-(--color-ivory)/95 backdrop-blur-sm px-10 py-1 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 h-35 w-120 transition-transform hover:scale-105">
					<p className="text-s font-extrabold uppercase tracking-widest text-(--color-ruby)/70 mt-10">
						Experience
					</p>
					<p className="text-base font-bold tracking-tight text-(--color-ruby) leading-snug">
						SWE Intern @ Stratpoint Technologies
						<span className="block text-sm font-medium opacity-80 -mt-1">
							Past: Designer/Analyst Intern @ DOST-PES
						</span>
					</p>
				</div>
				<div className="absolute left-20 top-120 z-50 text-center bg-(--color-ivory)/95 backdrop-blur-sm px-10 py-1 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 h-35 w-120 transition-transform hover:scale-105">
					<p className="text-s font-extrabold uppercase tracking-widest text-(--color-ruby)/70 mt-10">
						Tech Stack
					</p>
					<p className="text-base font-bold tracking-tight text-(--color-ruby) leading-snug">
						HTML, CSS, JavaScript, Java, PHP
						<span className="block text-sm font-medium opacity-80 -mt-1">
							Other Tools: Laravel, Flask, Figma, Git
						</span>
					</p>
				</div>
				<div className="absolute left-35 top-160 z-50 text-center bg-(--color-ivory)/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 h-35 w-120 transition-transform hover:scale-105">
					<p className="text-s font-extrabold uppercase tracking-widest text-(--color-ruby)/70 mt-10">
						Interests:
					</p>
					<p className="text-base font-bold tracking-tight text-(--color-ruby) leading-snug">
						UI/UX & Graphic Design, Web Development
						<span className="block text-sm font-medium opacity-80 -mt-1">
							Hobbies: Gaming, Photography
						</span>
					</p>
				</div>
			</div>

			{/* Mobile */}
			<div className="flex flex-col items-center gap-6 lg:hidden mt-16">
				<Image
					loading="eager"
					src="/Image/KC-About.png"
					alt="KC - Aspiring Front End Developer"
					width={500}
					height={500}
					className="w-[80vw] max-w-sm h-auto z-20"
				/>

				<div className="flex flex-col gap-2 text-center text-(--color-ivory) w-full max-w-sm">
					<h2 className="text-xl font-bold tracking-tight">
						Driven by Design. Powered by Code.
					</h2>
					<p className="text-sm leading-relaxed opacity-90">
						I am a graduating Computer Science student at PUP Manila with a
						growing passion for Front-End Development and UI/UX. I am actively
						learning to build responsive, human-centric interfaces that bridge
						the gap between complex logic and beautiful aesthetics.
					</p>
				</div>

				{cards.map(({ label, primary, secondary }) => (
					<div
						key={label}
						className="w-full max-w-sm text-center bg-(--color-ivory)/95 backdrop-blur-sm px-8 py-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 transition-transform hover:scale-105"
					>
						<p className="text-[0.6rem] font-extrabold uppercase tracking-widest text-(--color-ruby)/70">
							{label}
						</p>
						<p className="text-sm font-bold tracking-tight text-(--color-ruby) leading-snug mt-1">
							{primary}
							<span className="block text-xs font-medium opacity-80">
								{secondary}
							</span>
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

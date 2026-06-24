"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	return (
		<section className="min-h-screen w-full bg-[--color-ivory] flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16">
			<div className="max-w-5xl mx-auto w-full space-y-10">
				{/* 1. Location Badge */}
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[--color-charcoal]/5 border border-[--color-charcoal]/10 text-xs font-semibold tracking-widest uppercase text-[--color-charcoal] hover:border-[#912F40]/30 hover:text-[#912F40] hover:bg-[#912F40]/5 transition-all duration-300 cursor-default">
					📍 Taguig City
				</div>

				{/* 2. Eyebrow + Headline */}
				<div className="space-y-4">
					<p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#912F40]">
						Aspiring Front-End Developer
					</p>
					<h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black tracking-tighter text-[--color-rich-black] leading-[0.95]">
						Hello, I'm <span className="text-[#912F40]">KC.</span>
						<br />
						Aspiring to build
						<br />
						great things.
					</h1>
				</div>

				{/* 3. Divider + Description */}
				<div className="flex items-start gap-6 max-w-xl">
					<div className="w-px h-16 bg-[#912F40]/40 shrink-0 mt-1" />
					<p className="text-base md:text-lg text-[--color-charcoal] leading-relaxed">
						Still learning the ropes, but I genuinely enjoy building things for
						the web. I'm a CS student at PUP Sta. Mesa figuring it all out — one
						component at a time.
					</p>
				</div>

				{/* 4. CTA Row */}
				<div className="flex flex-wrap items-center gap-3">
					{/* Primary */}
					<Link
						href="/projects"
						className="group relative overflow-hidden bg-[--color-rich-black] text-[--color-ivory] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_8px_24px_rgb(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98]"
					>
						<span className="relative z-10 group-hover:text-white transition-colors duration-300">
							View My Work
						</span>
						<span className="absolute inset-0 bg-[#912F40] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
					</Link>

					{/* Secondary — About */}
					<Link
						href="/about"
						className="group relative overflow-hidden border border-[--color-charcoal]/30 text-[--color-rich-black] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-[#912F40] hover:shadow-[0_4px_16px_rgb(145,47,64,0.15)] hover:scale-[1.02] active:scale-[0.98]"
					>
						<span className="relative z-10 group-hover:text-[#912F40] transition-colors duration-300">
							About Me
						</span>
						<span className="absolute inset-0 bg-[#912F40]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
					</Link>

					{/* Secondary — Contact */}
					<Link
						href="/contact"
						className="group relative overflow-hidden border border-[--color-charcoal]/30 text-[--color-rich-black] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-[#912F40] hover:shadow-[0_4px_16px_rgb(145,47,64,0.15)] hover:scale-[1.02] active:scale-[0.98]"
					>
						<span className="relative z-10 group-hover:text-[#912F40] transition-colors duration-300">
							Get in Touch
						</span>
						<span className="absolute inset-0 bg-[#912F40]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
					</Link>
				</div>

				{/* 5. Stats / Stack Row */}
				<div className="flex flex-wrap gap-10 border-t border-[--color-charcoal]/10 pt-10">
					{[
						{ value: "Next.js", label: "Primary Framework" },
						{ value: "React", label: "UI Library" },
						{ value: "Tailwind", label: "CSS Framework" },
					].map((stat) => (
						<div key={stat.label} className="group space-y-1 cursor-default">
							<p className="text-sm font-black tracking-tight text-[--color-rich-black] group-hover:text-[#912F40] transition-colors duration-300">
								{stat.value}
							</p>
							<p className="text-xs text-[--color-charcoal] tracking-wide group-hover:text-[--color-rich-black] transition-colors duration-300">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
	const { slug } = await params;

	const currentIndex = projects.findIndex(
		(p) => p.id.toLowerCase() === slug.toLowerCase(),
	);

	if (currentIndex === -1) {
		notFound();
	}

	const project = projects[currentIndex];
	const prevProject =
		projects[(currentIndex - 1 + projects.length) % projects.length];
	const nextProject = projects[(currentIndex + 1) % projects.length];

	return (
		<main className="w-full min-h-screen bg-(--color-ivory) dark:bg-rich-black text-rich-black dark:text-ivory font-sans antialiased selection:bg-crimson dark:selection:bg-watermelon selection:text-white pt-32 pb-24 transition-colors duration-500">
			<div className="max-w-275 mx-auto px-6 sm:px-12 md:px-16">
				<nav className="mb-12">
					<Link
						href="/projects"
						className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-charcoal/40 dark:text-ivory/40 no-underline transition-colors duration-200 hover:text-crimson dark:hover:text-watermelon"
					>
						<span className="inline-block transform transition-transform duration-200 group-hover:-translate-x-1">
							←
						</span>
						<span>Back to showcase</span>
					</Link>
				</nav>

				<header className="relative mb-12 overflow-hidden">
					<p className="font-mono text-s font-bold tracking-[0.35em] uppercase text-crimson dark:text-watermelon mb-3 flex items-center gap-2.5 after:content-[''] after:block after:w-8 after:h-px after:bg-crimson dark:after:bg-watermelon after:opacity-40 transition-colors">
						Project Details
					</p>

					<div className="relative">
						<div className="absolute -right-2.5 -top-5 font-mono text-[clamp(100px,18vw,180px)] font-black text-transparent leading-none select-none pointer-events-none tracking-[-0.04em] [-webkit-text-stroke:1.5px_rgba(196,30,58,0.12)] dark:[-webkit-text-stroke:1.5px_rgba(255,107,107,0.15)] transition-colors duration-500">
							{project.num}
						</div>

						<h1 className="font-mono text-[clamp(32px,6vw,64px)] font-black tracking-tight text-rich-black dark:text-ivory relative z-10 pb-6 wrap-break-word transition-colors">
							{project.name}
						</h1>
					</div>
					<div className="h-px w-full bg-charcoal/10 dark:bg-white/10 transition-colors" />
				</header>

				<div className="w-full mb-12 rounded-2xl overflow-hidden bg-white dark:bg-white/5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none border border-transparent dark:border-white/5 transition-colors">
					<ProjectCarousel images={project.images} projectName={project.name} />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_21.25rem] gap-8 mb-20">
					<div className="flex flex-col gap-6 order-last lg:order-0">
						<section className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-l-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none border-y border-r border-charcoal/5 dark:border-white/10 dark:border-l-watermelon transition-colors">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-crimson dark:text-watermelon mb-3 transition-colors">
								Key Contribution & Role
							</h2>
							<p className="text-[15px] font-medium leading-[1.65] text-rich-black dark:text-ivory/90 transition-colors">
								{project.details.role}
							</p>
						</section>

						<section className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none border border-charcoal/5 dark:border-white/10 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory-deep) dark:before:bg-white/10 transition-colors">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 dark:text-ivory/50 mb-3 transition-colors">
								Project Purpose
							</h2>
							<p className="text-[14px] leading-[1.7] text-charcoal dark:text-ivory/80 font-medium transition-colors">
								{project.details.purpose}
							</p>
						</section>

						<section className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none border border-charcoal/5 dark:border-white/10 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory-deep) dark:before:bg-white/10 transition-colors">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 dark:text-ivory/50 mb-3 transition-colors">
								The Challenge
							</h2>
							<p className="text-[14px] leading-[1.7] text-charcoal dark:text-ivory/80 font-medium transition-colors">
								{project.details.problem}
							</p>
						</section>

						<section className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none border border-charcoal/5 dark:border-white/10 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory-deep) dark:before:bg-white/10 transition-colors">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 dark:text-ivory/50 mb-3 transition-colors">
								The Solution
							</h2>
							<p className="text-[14px] leading-[1.7] text-charcoal dark:text-ivory/80 font-medium transition-colors">
								{project.details.solution}
							</p>
						</section>
					</div>

					<div className="flex flex-col gap-6 order-first lg:order-0 lg:sticky lg:top-32 lg:self-start">
						<div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-charcoal/10 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.01)] dark:shadow-none transition-colors">
							<h3 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 dark:text-ivory/50 mb-2.5 transition-colors">
								Overview
							</h3>
							<p className="text-[14px] leading-[1.65] text-charcoal dark:text-ivory/80 mb-5 font-medium transition-colors">
								{project.description}
							</p>
							<div className="h-px bg-charcoal/10 dark:bg-white/10 mb-4 transition-colors" />
							<h3 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 dark:text-ivory/50 mb-3 transition-colors">
								Tech Stack
							</h3>
							<div className="flex flex-wrap gap-2 pt-1">
								{project.tags.map((tag) => (
									<Badge
										key={`stack-${tag}`}
										className="font-mono text-[10px] font-bold tracking-tighter uppercase py-1 px-2.5 rounded-lg bg-crimson dark:bg-watermelon text-white dark:text-rich-black hover:bg-crimson dark:hover:bg-watermelon shadow-none border-none transition-colors cursor-default inline-block"
									>
										{tag}
									</Badge>
								))}
							</div>
						</div>

						<div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl py-5 px-6 border border-charcoal/10 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.01)] dark:shadow-none transition-colors">
							<h3 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 dark:text-ivory/50 mb-3.5 transition-colors">
								All Projects
							</h3>
							<ul className="flex flex-col gap-1 list-none m-0 p-0">
								{projects.map((proj) => {
									// 4. Update the active check to use 'slug'
									const isTargetActive =
										proj.id.toLowerCase() === slug.toLowerCase();
									return (
										<li key={`index-${proj.id}`}>
											<Link
												href={`/projects/${proj.id}`}
												className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg transition-colors duration-150 no-underline group ${
													isTargetActive
														? "bg-(--color-crimson-soft) dark:bg-watermelon/10"
														: "hover:bg-(--color-ivory-deep) dark:hover:bg-white/5"
												}`}
											>
												<div
													className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
														isTargetActive
															? "bg-crimson dark:bg-watermelon"
															: "bg-charcoal/10 dark:bg-white/20 group-hover:bg-charcoal/30 dark:group-hover:bg-white/40"
													}`}
												/>
												<span
													className={`text-[14px] transition-colors ${
														isTargetActive
															? "text-crimson dark:text-watermelon font-semibold"
															: "text-charcoal dark:text-ivory/80 font-medium"
													}`}
												>
													{proj.name}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>

				<footer className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-charcoal/10 dark:border-white/10 pt-12 transition-colors">
					<Link
						href={`/projects/${prevProject.id}`}
						className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-md border border-charcoal/5 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none no-underline transition-all duration-350 hover:border-crimson/30 dark:hover:border-watermelon/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_12px_rgba(255,107,107,0.1)] min-h-25"
					>
						<span className="font-mono text-xs font-bold uppercase text-charcoal/40 dark:text-ivory/50 transition-colors group-hover:text-crimson dark:group-hover:text-watermelon flex items-center gap-1">
							<span className="inline-block transform transition-transform duration-300 group-hover:-translate-x-0.5">
								←
							</span>
							Previous Project
						</span>
						<span className="text-lg font-black text-rich-black dark:text-ivory uppercase self-start mt-2 transition-colors">
							{prevProject.name}
						</span>
					</Link>

					<Link
						href={`/projects/${nextProject.id}`}
						className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-md border border-charcoal/5 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none no-underline transition-all duration-350 hover:border-crimson/30 dark:hover:border-watermelon/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_12px_rgba(255,107,107,0.1)] text-right items-end min-h-25"
					>
						<span className="font-mono text-xs font-bold uppercase text-charcoal/40 dark:text-ivory/50 transition-colors group-hover:text-crimson dark:group-hover:text-watermelon flex items-center gap-1">
							Next Project
							<span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5">
								→
							</span>
						</span>
						<span className="text-lg font-black text-rich-black dark:text-ivory uppercase self-end mt-2 transition-colors">
							{nextProject.name}
						</span>
					</Link>
				</footer>
			</div>
		</main>
	);
}

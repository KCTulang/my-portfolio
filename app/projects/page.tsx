import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { ProjectGrid } from "@/components/ProjectGrid";
import {
	CarouselControls,
	ProgressPills,
	RevealCurtain,
	SlideTransition,
} from "@/components/ShowcaseClient";
import { Button } from "@/components/ui/button";

import ProjectSkeleton from "./loading";

interface Project {
	id: string;
	name: string;
	description: string;
	tags: string[];
	images: string[];
}

const projects: Project[] = [
	{
		id: "labpup",
		name: "LabPUP",
		description:
			"A web-based laboratory scheduling and management system developed for the PUP College of Computer and Information Sciences...",
		tags: ["CSS", "HTML", "JavaScript", "MySQL", "PHP"],
		images: ["/Projects/LabPUP1.png"],
	},
	{
		id: "lp",
		name: "licenSUREpro",
		description:
			"A web-based licensing application management system designed for the Professional Regulation Commission (PRC)...",
		tags: ["CSS", "HTML", "JavaScript", "MySQL", "PHP"],
		images: ["/Projects/LP1.png"],
	},
	{
		id: "ms",
		name: "MindSweeper Kitties",
		description:
			"A competitive grid deduction game that introduces a strategic twist to classic board mechanics...",
		tags: ["Flask", "HTML", "JavaScript", "Python"],
		images: ["/Projects/MS1.png"],
	},
	{
		id: "pluma",
		name: "Pluma",
		description:
			"An intelligent Grammar Error Correction (GEC) system designed specifically for the Filipino language...",
		tags: ["Machine Learning", "NLP", "NMT", "Python", "PyTorch"],
		images: ["/Projects/Pluma1.png"],
	},
	{
		id: "pt",
		name: "Philippine Tourism Proposed UI",
		description:
			"A high-fidelity Figma interface conceptualization for the Department of Tourism (DOT) website...",
		tags: ["Figma", "UI/UX", "Wireframing"],
		images: ["/Projects/PT1.png"],
	},
];

interface PageProps {
	searchParams: Promise<{ active?: string; view?: string }>;
}

export default async function ProjectsPage({ searchParams }: PageProps) {
	return (
		<Suspense fallback={<ProjectSkeleton />}>
			<ProjectsContent searchParams={searchParams} />
		</Suspense>
	);
}

async function ProjectsContent({ searchParams }: PageProps) {
	const params = await searchParams;
	const currentIndex = Number(params.active) || 0;
	const view = params.view || "showcase"; // Default to showcase view
	const currentProject = projects[currentIndex] || projects[0];
	const projectIds = projects.map((p) => p.id);

	await new Promise((resolve) => setTimeout(resolve, 500));

	return (
		<main className="min-h-screen w-full bg-ivory dark:bg-rich-black relative select-none flex flex-col justify-between pt-32 pb-16 transition-colors duration-500">
			<header className="w-full max-w-362.5 mx-auto px-6 sm:px-10 md:px-16 lg:px-24 mb-6 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
				<div className="max-w-2xl">
					<p className="text-[10px] font-bold tracking-[0.3em] uppercase text-crimson dark:text-watermelon mb-2 transition-colors">
						Selected Works
					</p>
					<h1 className="text-4xl sm:text-6xl font-black text-(--color-rich-black) dark:text-ivory tracking-tight leading-none transition-colors">
						My {""}
						<span className="text-crimson dark:text-watermelon transition-colors">
							Projects
						</span>
					</h1>
				</div>

				<div className="flex flex-col md:items-end gap-4">
					<p className="text-sm text-charcoal dark:text-ivory/70 opacity-80 max-w-sm text-left md:text-right font-medium leading-relaxed transition-colors">
						A collection of applications, academic research systems, and design
						experiments I have developed.
					</p>

					<div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl transition-colors">
						<Link
							href="?view=showcase"
							scroll={false}
							className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${view === "showcase" ? "bg-white dark:bg-white/10 text-crimson dark:text-watermelon shadow-sm" : "text-charcoal/60 dark:text-ivory/50 hover:text-charcoal dark:hover:text-ivory/90"}`}
						>
							Showcase
						</Link>
						<Link
							href="?view=grid"
							scroll={false}
							className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${view === "grid" ? "bg-white dark:bg-white/10 text-crimson dark:text-watermelon shadow-sm" : "text-charcoal/60 dark:text-ivory/50 hover:text-charcoal dark:hover:text-ivory/90"}`}
						>
							Grid View
						</Link>
					</div>
				</div>
			</header>

			{view === "grid" ? (
				<div className="flex-1">
					<ProjectGrid projects={projects} />
				</div>
			) : (
				<div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-12 md:px-24 max-w-375 mx-auto relative my-6">
					<div className="w-full flex justify-center items-center mb-6 text-[10px] sm:text-xs font-mono uppercase tracking-tight text-charcoal/60 dark:text-ivory/50 px-2 transition-colors">
						<div className="flex items-center gap-4 sm:gap-8">
							<span className="flex items-center gap-2.5">
								<span className="px-2.5 py-1 border border-charcoal/20 dark:border-white/20 tracking-tight rounded-md bg-white dark:bg-white/5 shadow-sm font-bold transition-colors">
									Hover
								</span>{" "}
								Frame for details
							</span>
							<span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-crimson/40 dark:bg-watermelon/50 transition-colors" />
							<span className="flex items-center gap-2.5 tracking-tight">
								<span className="flex gap-1">
									<span className="px-2 py-1 border border-charcoal/20 dark:border-white/20 rounded-md bg-white dark:bg-white/5 shadow-sm font-bold transition-colors">
										←
									</span>
									<span className="px-2 py-1 border border-charcoal/20 dark:border-white/20 rounded-md bg-white dark:bg-white/5 shadow-sm font-bold transition-colors">
										→
									</span>
								</span>
								To navigate
							</span>
						</div>
					</div>

					<div className="relative w-full rounded-3xl p-1 bg-linear-to-b from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:from-crimson/20 hover:to-crimson/30 dark:hover:from-watermelon/20 dark:hover:to-watermelon/30 transition-all duration-500 group/frame border border-transparent dark:border-white/5">
						<div className="relative w-full aspect-192/100 rounded-[1.4rem] overflow-hidden bg-(--color-rich-black) group shadow-inner">
							<SlideTransition currentIndex={currentIndex} direction={1}>
								<Image
									src={currentProject.images[0]}
									alt={`${currentProject.name} layout`}
									fill
									priority
									className="object-cover transition-transform duration-700 ease-out group-hover/frame:scale-101"
								/>

								<RevealCurtain>
									<div className="space-y-1">
										<span className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em] block">
											Project Core Overview
										</span>
										<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
											{currentProject.name}
										</h2>
									</div>

									<p className="text-sm sm:text-base leading-relaxed text-white font-medium text-justify max-w-lg">
										{currentProject.description}
									</p>

									<div className="flex gap-1.5 flex-wrap pt-2">
										{currentProject.tags.map((tag) => (
											<span
												key={tag}
												className="text-[10px] px-3 py-1 rounded-md bg-crimson dark:bg-watermelon text-white font-bold uppercase tracking-wider transition-colors"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="pt-6">
										<Button
											asChild
											variant="link"
											className="text-xs font-black tracking-[0.2em] uppercase text-white hover:text-white/80 p-0 h-auto transition-all duration-300 group/link inline-flex items-center gap-2 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white after:scale-x-100 hover:after:scale-x-75 after:transition-transform after:duration-300 after:origin-left"
										>
											<a href={`/projects/${currentProject.id}`}>
												View Full Details
												<span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
													→
												</span>
											</a>
										</Button>
									</div>
								</RevealCurtain>
							</SlideTransition>
						</div>

						<CarouselControls
							currentIndex={currentIndex}
							total={projects.length}
							projectIds={projectIds}
						/>
					</div>

					<div className="w-full flex items-center justify-between mt-6 text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-ivory/50 px-2 transition-colors">
						<div>
							<span className="text-crimson dark:text-watermelon font-mono text-sm font-bold transition-colors">
								{String(currentIndex + 1).padStart(2, "0")}
							</span>{" "}
							/ {String(projects.length).padStart(2, "0")}
						</div>
						<ProgressPills
							currentIndex={currentIndex}
							projectIds={projectIds}
						/>
					</div>
				</div>
			)}
		</main>
	);
}

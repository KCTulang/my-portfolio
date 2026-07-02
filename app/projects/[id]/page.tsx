import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Badge } from "@/components/ui/badge";

interface ProjectDetails {
	purpose: string;
	problem: string;
	solution: string;
	role: string;
}

interface Project {
	id: string;
	num: string;
	name: string;
	description: string;
	tags: string[];
	images: string[];
	details: ProjectDetails;
}

const projects: Project[] = [
	{
		id: "labpup",
		num: "01",
		name: "LabPUP",
		description:
			"A web-based laboratory scheduling and management system developed for the PUP College of Computer and Information Sciences.",
		tags: ["CSS", "HTML", "JavaScript", "MySQL", "PHP"],
		images: ["/Projects/LabPUP1.png", "/Projects/LabPUP2.png"],
		details: {
			purpose:
				"To streamline operations within academic computer laboratories by centralizing scheduling, reservation management, and inventory status into an accessible dashboard.",
			problem:
				"Manual scheduling led to scheduling conflicts, untracked faulty hardware, and delayed classroom maintenance, hindering learning continuity for tech students.",
			solution:
				"Developed an automated reservation mechanism paired with a real-time hardware health checker, featuring localized forms to submit immediate maintenance requests directly to laboratory technicians.",
			role: "Frontend UI/UX Developer & Core Contributor — Designed and implemented the user interface layouts, structured responsive tracking dashboards, and optimized human-centered navigation workflows. Additionally collaborated on backend implementation, assisting with PHP data routing and reservation form handling.",
		},
	},
	{
		id: "lp",
		num: "02",
		name: "licenSUREpro",
		description:
			"A web-based licensing application management system designed for the Professional Regulation Commission (PRC).",
		tags: ["CSS", "HTML", "JavaScript", "MySQL", "PHP"],
		images: ["/Projects/LP1.png", "/Projects/LP2.png"],
		details: {
			purpose:
				"To optimize and digitize the processing pipelines for state board licensure exam registrations, verification workflows, and demographic bookkeeping.",
			problem:
				"Traditional registration workflows relied on heavy manual sorting, physical paperwork queues, and static lookup criteria that delayed applicant processing.",
			solution:
				"Created an intelligent application layout that converts form inputs dynamically into digital registrant indexes, utilizing clean course-routing keys to sort applications across specialized school divisions automatically.",
			role: "Backend Architect & Interface Lead — implemented application validation states, optimized structural relational database queries, and structured data-routing parameters.",
		},
	},
	{
		id: "ms",
		num: "03",
		name: "MindSweeper Kitties",
		description:
			"A competitive grid deduction game that introduces a strategic twist to classic board mechanics.",
		tags: ["HTML", "JavaScript", "Python"],
		images: ["/Projects/MS1.png", "/Projects/MS2.png"],
		details: {
			purpose:
				"To build an engaging, intelligent strategy application testing human risk assessment against machine computational reasoning inside a gaming framework.",
			problem:
				"Standard grid puzzle systems often rely heavily on static randomization profiles that fail to challenge adaptive human problem-solving methodologies over time.",
			solution:
				"Engineered an intelligent opponent model running belief-state search algorithms. The system calculates real-time safety indices and predictive tile dangers to counteract player selections dynamically.",
			role: "Product Designer & Conceptual Lead — Spearheaded the entire creative vision, game layout design, and thematic conceptualization, introducing the strategic 'cats and dogs' conflict. Architected the overall interface layout and managed real-time visual grid state changes via custom JavaScript hooks.",
		},
	},
	{
		id: "pluma",
		num: "04",
		name: "Pluma",
		description:
			"An intelligent Grammar Error Correction (GEC) system designed specifically for the Filipino language.",
		tags: ["Machine Learning", "NLP", "Python", "PyTorch"],
		images: ["/Projects/Pluma1.png", "/Projects/Pluma2.png"],
		details: {
			purpose:
				"To provide an automated, highly context-aware grammar evaluation platform that accurately parses syntax structure and lexical variations in the Filipino language.",
			problem:
				"Most dominant language processing modules struggle with the complex, morphologically rich affixation systems of Filipino syntax, leading to high false-error rates.",
			solution:
				"Trained specialized sequence-to-sequence neural network architectures optimized via strategic text data augmentation, yielding deep contextual corrections for complex structural patterns.",
			role: "UI/UX Designer & Project Contributor — Spearheaded the project’s visual identity, crafting a cohesive vintage aesthetic and custom logo to culturally resonate with the Filipino language; supported technical team in model fine-tuning processes.",
		},
	},
	{
		id: "pt",
		num: "05",
		name: "Philippine Tourism UI",
		description:
			"A high-fidelity Figma interface conceptualization proposal for the Department of Tourism (DOT) website.",
		tags: ["Figma", "UI/UX", "Wireframing"],
		images: [
			"/Projects/PT1.png",
			"/Projects/PT2.png",
			"/Projects/PT3.png",
			"/Projects/PT4.png",
		],
		details: {
			purpose:
				"To modernize the digital front-face of local tourism through modern user-centered patterns that amplify national cultural heritage discoverability.",
			problem:
				"Legacy web layouts often suffer from cluttered visual hierarchies, buried travel content, and restrictive barriers that fall short of modern global accessibility principles.",
			solution:
				"Designed a clean, cohesive interface applying strict progressive discovery layout paths and WCAG-compliant color balance. Embedded high-fidelity map indicators and micro-interactions.",
			role: "Lead UI/UX Designer — researched user heuristics, mapped out comprehensive wireframe blueprints, and built the high-fidelity interactive prototype presentation system.",
		},
	},
];

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
	const { id } = await params;

	const currentIndex = projects.findIndex(
		(p) => p.id.toLowerCase() === id.toLowerCase(),
	);

	if (currentIndex === -1) {
		notFound();
	}

	const project = projects[currentIndex];
	const prevProject =
		projects[(currentIndex - 1 + projects.length) % projects.length];
	const nextProject = projects[(currentIndex + 1) % projects.length];

	return (
		<main className="w-full min-h-screen bg-(--color-ivory) text-rich-black font-sans antialiased selection:bg-crimson selection:text-white pt-32 pb-24">
			<div className="max-w-275 mx-auto px-6 sm:px-12 md:px-16">
				<nav className="mb-12">
					<Link
						href="/projects"
						className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-charcoal/40 no-underline transition-colors duration-200 hover:text-crimson"
					>
						<span className="inline-block transform transition-transform duration-200 group-hover:-translate-x-1">
							←
						</span>
						<span>Back to showcase</span>
					</Link>
				</nav>

				<header className="relative mb-12 overflow-hidden">
					<p className="font-mono text-s font-bold tracking-[0.35em] uppercase text-crimson mb-3 flex items-center gap-2.5 after:content-[''] after:block after:w-8 after:h-px after:bg-crimson after:opacity-40">
						Project Case Study
					</p>

					<div className="relative">
						<div className="absolute -right-2.5 -top-5 font-mono text-[clamp(100px,18vw,180px)] font-black text-transparent leading-none select-none pointer-events-none tracking-[-0.04em] [-webkit-text-stroke:1.5px_rgba(196,30,58,0.12)]">
							{project.num}
						</div>

						<h1 className="font-mono text-[clamp(32px,6vw,64px)] font-black tracking-tight text-rich-black relative z-10 pb-6 wrap-break-word">
							{project.name}
						</h1>
					</div>
					<div className="h-px w-full bg-charcoal/10" />
				</header>

				<div className="w-full mb-12 rounded-2xl overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
					<ProjectCarousel images={project.images} projectName={project.name} />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_21.25rem] gap-8 mb-20">
					<div className="flex flex-col gap-6 order-last lg:order-0">
						<section className="bg-white rounded-2xl p-6 sm:p-8 border-l-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-y border-r border-charcoal/5">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-crimson mb-3">
								Key Contribution & Role
							</h2>
							<p className="text-[15px] font-medium leading-[1.65] text-rich-black">
								{project.details.role}
							</p>
						</section>

						<section className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border border-charcoal/5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory-deep)">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 mb-3">
								Project Purpose
							</h2>
							<p className="text-[14px] leading-[1.7] text-charcoal font-medium">
								{project.details.purpose}
							</p>
						</section>

						<section className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border border-charcoal/5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory-deep)">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 mb-3">
								The Challenge
							</h2>
							<p className="text-[14px] leading-[1.7] text-charcoal font-medium">
								{project.details.problem}
							</p>
						</section>

						<section className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] border border-charcoal/5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory-deep)">
							<h2 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 mb-3">
								The Solution
							</h2>
							<p className="text-[14px] leading-[1.7] text-charcoal font-medium">
								{project.details.solution}
							</p>
						</section>
					</div>

					<div className="flex flex-col gap-6 order-first lg:order-0 lg:sticky lg:top-32 lg:self-start">
						<div className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
							<h3 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 mb-2.5">
								Overview
							</h3>
							<p className="text-[14px] leading-[1.65] text-charcoal mb-5 font-medium">
								{project.description}
							</p>
							<div className="h-px bg-charcoal/10 mb-4" />
							<h3 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 mb-3">
								Tech Stack
							</h3>
							<div className="flex flex-wrap gap-2 pt-1">
								{project.tags.map((tag) => (
									<Badge
										key={`stack-${tag}`}
										className="font-mono text-[10px] font-bold tracking-tighter uppercase py-1 px-2.5 rounded-lg bg-crimson text-white hover:bg-crimson shadow-none border-none transition-none cursor-default inline-block"
									>
										{tag}
									</Badge>
								))}
							</div>
						</div>

						<div className="bg-white rounded-2xl py-5 px-6 border border-charcoal/10 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
							<h3 className="font-mono text-s font-bold tracking-tighter uppercase text-charcoal/40 mb-3.5">
								All Projects
							</h3>
							<ul className="flex flex-col gap-1 list-none m-0 p-0">
								{projects.map((proj) => {
									const isTargetActive =
										proj.id.toLowerCase() === id.toLowerCase();
									return (
										<li key={`index-${proj.id}`}>
											<Link
												href={`/projects/${proj.id}`}
												className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg transition-colors duration-150 no-underline group ${
													isTargetActive
														? "bg-(--color-crimson-soft)"
														: "hover:bg-(--color-ivory-deep)"
												}`}
											>
												<div
													className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
														isTargetActive
															? "bg-crimson"
															: "bg-charcoal/10 group-hover:bg-charcoal/30"
													}`}
												/>
												<span
													className={`text-[14px] transition-colors ${
														isTargetActive
															? "text-crimson font-semibold"
															: "text-charcoal font-medium"
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

				<footer className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-charcoal/10 pt-12">
					<Link
						href={`/projects/${prevProject.id}`}
						className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-charcoal/5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] no-underline transition-all duration-350 hover:border-crimson/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] min-h-25"
					>
						<span className="font-mono text-xs font-bold uppercase text-charcoal/40 transition-colors group-hover:text-crimson flex items-center gap-1">
							<span className="inline-block transform transition-transform duration-300 group-hover:-translate-x-0.5">
								←
							</span>
							Previous Project
						</span>
						<span className="text-lg font-black text-rich-black uppercase self-start mt-2">
							{prevProject.name}
						</span>
					</Link>

					<Link
						href={`/projects/${nextProject.id}`}
						className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-charcoal/5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] no-underline transition-all duration-350 hover:border-crimson/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] text-right items-end min-h-25"
					>
						<span className="font-mono text-xs font-bold  uppercase text-charcoal/40 transition-colors group-hover:text-crimson flex items-center gap-1">
							Next Project
							<span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5">
								→
							</span>
						</span>
						<span className="text-lg font-black  text-rich-black uppercase self-end mt-2">
							{nextProject.name}
						</span>
					</Link>
				</footer>
			</div>
		</main>
	);
}

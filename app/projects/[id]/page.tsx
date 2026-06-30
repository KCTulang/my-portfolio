import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCarousel } from "@/components/ProjectCarousel";

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
		tags: ["Flask", "HTML", "JavaScript", "Python"],
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
			role: "Co-Programmer & ML Specialist — curated text datasets, set up model augmentation code blocks, and assisted in fine-tuning deep learning sequences.",
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
		<main className="absolute min-h-screen w-full bg-(--color-ivory) text-(--color-rich-black) pb-25 px-6 sm:px-10 md:px-16 lg:px-24">
			<div className="max-w-275 mx-auto pt-8">
				<nav className="mt-20">
					<Link
						href="/projects"
						className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-(--color-charcoal)/40 hover:text-(--color-crimson) transition-colors duration-200"
					>
						← Back to showcase
					</Link>
				</nav>

				<div className="relative pt-12 w-full">
					<p className="flex items-center gap-2.5 text-[9px] font-mono font-bold tracking-[0.35em] uppercase text-(--color-crimson) mb-1 after:content-[''] after:block after:w-8 after:h-px after:bg-(--color-crimson) after:opacity-40">
						Project Case Study
					</p>
					<div className="relative w-full pb-6">
						<div
							aria-hidden="true"
							className="absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none z-0"
							style={{
								fontFamily: "Inter, sans-serif",
								fontSize: "clamp(80px, 14vw, 150px)",
								color: "transparent",
								WebkitTextStroke: "1.5px rgba(196,30,58,0.12)",
								letterSpacing: "-0.04em",
							}}
						>
							{project.num}
						</div>
						<h1
							className="relative z-10 font-black tracking-tight text-(--color-rich-black) pr-[1.2em]"
							style={{
								fontSize: "clamp(42px, 7vw, 80px)",
								letterSpacing: "-0.03em",
							}}
						>
							{project.name}
						</h1>
					</div>
				</div>

				<div
					className="relative z-20 block w-full h-px clear-both mb-9"
					style={{
						backgroundColor: "var(--color-charcoal, rgba(44, 44, 44, 0.15))",
					}}
				/>

				<ProjectCarousel images={project.images} projectName={project.name} />

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 mt-20">
					<div className="order-2 lg:order-1">
						<div
							className="bg-white rounded-2xl mb-6"
							style={{
								padding: "28px 32px",
								borderLeft: "3px solid var(--color-crimson, #C41E3A)",
							}}
						>
							<p
								className="font-mono font-bold uppercase mb-3"
								style={{
									fontSize: "9px",
									letterSpacing: "0.25em",
									color: "var(--color-crimson, #C41E3A)",
								}}
							>
								Key Contribution &amp; Role
							</p>
							<p className="text-[15px] font-medium leading-[1.65] text-(--color-rich-black)">
								{project.details.role}
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="bg-white rounded-2xl p-6 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory)">
								<p
									className="font-mono font-bold uppercase mb-2.5 text-(--color-charcoal)/40"
									style={{ fontSize: "9px", letterSpacing: "0.2em" }}
								>
									Project Purpose
								</p>
								<p className="text-[13.5px] leading-[1.7] text-(--color-charcoal)">
									{project.details.purpose}
								</p>
							</div>

							<div className="bg-white rounded-2xl p-6 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory)">
								<p
									className="font-mono font-bold uppercase mb-2.5 text-(--color-charcoal)/40"
									style={{ fontSize: "9px", letterSpacing: "0.2em" }}
								>
									The Challenge
								</p>
								<p className="text-[13.5px] leading-[1.7] text-(--color-charcoal)">
									{project.details.problem}
								</p>
							</div>

							<div className="bg-white rounded-2xl p-6 sm:col-span-2 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--color-ivory)">
								<p
									className="font-mono font-bold uppercase mb-2.5 text-(--color-charcoal)/40"
									style={{ fontSize: "9px", letterSpacing: "0.2em" }}
								>
									The Solution
								</p>
								<p className="text-[13.5px] leading-[1.7] text-(--color-charcoal)">
									{project.details.solution}
								</p>
							</div>
						</div>
					</div>

					<aside className="order-1 lg:order-2 flex flex-col gap-4">
						<div className="bg-white rounded-2xl p-6 border border-(--color-charcoal)/10">
							<p
								className="font-mono font-bold uppercase mb-2.5 text-(--color-charcoal)/40"
								style={{ fontSize: "9px", letterSpacing: "0.2em" }}
							>
								Overview
							</p>
							<p className="text-[13.5px] leading-[1.65] text-(--color-charcoal) mb-5">
								{project.description}
							</p>
							<div className="h-px bg-(--color-charcoal)/10 mb-4" />
							<p
								className="font-mono font-bold uppercase mb-3 text-(--color-charcoal)/40"
								style={{ fontSize: "9px", letterSpacing: "0.2em" }}
							>
								Tech Stack
							</p>
							<div className="flex flex-wrap gap-1.5">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="font-mono font-bold uppercase rounded-md"
										style={{
											fontSize: "9.5px",
											letterSpacing: "0.1em",
											padding: "5px 10px",
											background: "rgba(196,30,58,0.08)",
											color: "var(--color-crimson, #C41E3A)",
										}}
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div
							className="bg-white rounded-2xl border border-(--color-charcoal)/10"
							style={{ padding: "20px 24px" }}
						>
							<p
								className="font-mono font-bold uppercase mb-3.5 text-(--color-charcoal)/40"
								style={{ fontSize: "9px", letterSpacing: "0.2em" }}
							>
								All Projects
							</p>
							<ul className="flex flex-col gap-1">
								{projects.map((proj) => {
									const isActive = proj.id === project.id;
									return (
										<li key={proj.id}>
											<Link
												href={`/projects/${proj.id}`}
												className={`flex items-center gap-2.5 rounded-lg transition-colors duration-150 ${
													isActive
														? "bg-[rgba(196,30,58,0.08)]"
														: "hover:bg-[#EDE8DF]"
												}`}
												style={{ padding: "8px 10px" }}
											>
												<span
													className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
													style={{
														background: isActive
															? "var(--color-crimson, #C41E3A)"
															: "rgba(44,44,44,0.1)",
													}}
												/>
												<span
													className="text-[12.5px] transition-colors"
													style={{
														fontWeight: isActive ? 600 : 500,
														color: isActive
															? "var(--color-crimson, #C41E3A)"
															: "var(--color-charcoal, #2C2C2C)",
													}}
												>
													{proj.name}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</aside>
				</div>

				{/* Footer navigation */}
				<footer
					className="grid grid-cols-2"
					style={{
						marginTop: "64px",
						borderTop: "1px solid rgba(44,44,44,0.1)",
					}}
				>
					<Link
						href={`/projects/${prevProject.id}`}
						className="group flex flex-col gap-1.5 transition-colors hover:bg-black/2"
						style={{ padding: "32px 0" }}
					>
						<span
							className="font-mono font-bold uppercase text-(--color-charcoal)/40 group-hover:text-(--color-crimson) transition-colors"
							style={{ fontSize: "9px", letterSpacing: "0.25em" }}
						>
							← Previous project
						</span>
						<span
							className="font-extrabold text-(--color-rich-black) leading-tight"
							style={{ fontSize: "20px", letterSpacing: "-0.02em" }}
						>
							{prevProject.name}
						</span>
					</Link>

					<Link
						href={`/projects/${nextProject.id}`}
						className="group flex flex-col gap-1.5 items-end text-right transition-colors hover:bg-black/2"
						style={{
							padding: "32px 0 32px 24px",
							borderLeft: "1px solid rgba(44,44,44,0.1)",
						}}
					>
						<span
							className="font-mono font-bold uppercase text-(--color-charcoal)/40 group-hover:text-(--color-crimson) transition-colors"
							style={{ fontSize: "9px", letterSpacing: "0.25em" }}
						>
							Next project →
						</span>
						<span
							className="font-extrabold text-(--color-rich-black) leading-tight"
							style={{ fontSize: "20px", letterSpacing: "-0.02em" }}
						>
							{nextProject.name}
						</span>
					</Link>
				</footer>
			</div>
		</main>
	);
}

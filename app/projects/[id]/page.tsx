import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
			"A web-based laboratory scheduling and management system developed for the PUP College of Computer and Information Sciences to streamline room reservations, track device operability, and handle automated malfunction reporting.",
		tags: ["CSS", "HTML", "JavaScript", "MySQL", "PHP"],
		images: ["/Projects/LabPUP1.png"],
	},
	{
		id: "lp",
		name: "licenSUREpro",
		description:
			"A web-based licensing application management system designed for the Professional Regulation Commission (PRC) to digitize board exam application forms, manage examinee profiles, and provide lookup directories for school and course routing keys.",
		tags: ["CSS", "HTML", "JavaScript", "MySQL", "PHP"],
		images: ["/Projects/LP1.png"],
	},
	{
		id: "ms",
		name: "MindSweeper Kitties",
		description:
			"A competitive grid deduction game that introduces a strategic twist to classic board mechanics. Facing an adaptive AI powered by belief-state search algorithms, players calculate real-time safety probabilities to uncover objectives and maximize scores[cite: 3].",
		tags: ["Flask", "HTML", "JavaScript", "Python"],
		images: ["/Projects/MS1.png"],
	},
	{
		id: "pluma",
		name: "Pluma",
		description:
			"An intelligent Grammar Error Correction (GEC) system designed specifically for the Filipino language. Utilizing tailored sequence-to-sequence neural network architectures and strategic data augmentation, the model architecture automates the identification and correction of localized syntactic anomalies and contextual stylistic inconsistencies.",
		tags: ["Machine Learning", "NLP", "NMT", "Python", "PyTorch"],
		images: ["/Projects/Pluma1.png"],
	},
	{
		id: "pt",
		name: "Philippine Tourism Proposed UI",
		description:
			"A 2024 high-fidelity Figma interface conceptualization proposal for the Department of Tourism (DOT) website[cite: 4]. Engineered around modern accessibility heuristics (WCAG) and progressive discovery layout hierarchies[cite: 4], the system embeds interactive asset maps and modular content sections to elevate local heritage discoverability[cite: 4].",
		tags: ["Figma", "UI/UX", "Wireframing"],
		images: ["/Projects/PT1.png"],
	},
];

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
	const { id } = await params;

	const project = projects.find((p) => p.id.toLowerCase() === id.toLowerCase());

	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen w-full bg-(--color-ivory) text-(--color-rich-black) pt-32 pb-16 px-6 sm:px-10 md:px-16 lg:px-24">
			<div className="max-w-362.5 mx-auto">
				<div className="mb-12">
					<Link
						href="/projects"
						className="text-xs font-mono font-bold uppercase tracking-widest text-(--color-charcoal)/60 hover:text-(--color-crimson) transition-colors duration-200"
					>
						← Back to showcase
					</Link>
				</div>

				<header className="border-b border-(--color-charcoal)/10 pb-8 mb-12">
					<p className="text-[10px] font-bold tracking-[0.3em] uppercase text-(--color-crimson) mb-2">
						Project Module Detail
					</p>
					<h1 className="text-4xl sm:text-6xl font-black tracking-tight text-(--color-rich-black)">
						{project.name}
					</h1>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2 space-y-6">
						<div className="relative aspect-video w-full bg-(--color-rich-black) rounded-2xl overflow-hidden shadow-md">
							<Image
								src={project.images[0]}
								alt={`${project.name} production layout`}
								fill
								priority
								className="object-cover"
							/>
						</div>
					</div>

					<div className="space-y-8">
						<div className="rounded-2xl p-6 bg-white border border-(--color-charcoal)/10 shadow-sm space-y-4">
							<h3 className="text-xs font-mono font-bold uppercase tracking-wider text-(--color-charcoal)/60">
								Overview
							</h3>
							<p className="text-sm text-(--color-charcoal) leading-relaxed">
								{project.description}
							</p>

							<div className="pt-2">
								<h3 className="text-xs font-mono font-bold uppercase tracking-wider text-(--color-charcoal)/60 mb-3">
									Tech Stack
								</h3>
								<div className="flex gap-1.5 flex-wrap">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-[10px] px-2.5 py-1 rounded-md bg-(--color-crimson) text-white font-bold uppercase tracking-wider"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

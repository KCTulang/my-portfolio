export interface ProjectDetails {
	purpose: string;
	problem: string;
	solution: string;
	role: string;
}

export interface Project {
	id: string;
	num: string;
	name: string;
	description: string;
	tags: string[];
	images: string[];
	details: ProjectDetails;
}

export const projects: Project[] = [
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

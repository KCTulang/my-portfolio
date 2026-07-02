import Image from "next/image";
import Link from "next/link";

interface Project {
	id: string;
	name: string;
	description: string;
	tags: string[];
	images: string[];
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
	return (
		<div className="w-full max-w-375 mx-auto px-4 sm:px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 mt-4">
			{projects.map((project) => (
				<Link
					href={`/projects/${project.id}`}
					key={project.id}
					className="group flex flex-col bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-charcoal/10 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(145,47,64,0.15)] dark:hover:shadow-[0_8px_30px_rgba(255,107,107,0.15)] hover:border-crimson/30 dark:hover:border-watermelon/30 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson dark:focus-visible:ring-watermelon"
				>
					<div className="relative aspect-video w-full bg-rich-black overflow-hidden border-b border-charcoal/10 dark:border-white/10">
						<Image
							src={project.images[0]}
							alt={project.name}
							fill
							className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>

					<div className="p-6 flex flex-col flex-1">
						<h2 className="font-extrabold text-xl text-rich-black dark:text-ivory mb-2 tracking-tight transition-colors">
							{project.name}
						</h2>
						<p className="text-sm text-charcoal/80 dark:text-ivory/70 mb-6 line-clamp-3 leading-relaxed font-medium transition-colors">
							{project.description}
						</p>

						<div className="mt-auto flex flex-wrap gap-1.5">
							{project.tags.slice(0, 3).map((tag) => (
								<span
									key={tag}
									className="text-[9px] uppercase font-bold tracking-wider px-2 py-1 bg-crimson/10 dark:bg-watermelon/20 text-crimson dark:text-watermelon rounded-md transition-colors"
								>
									{tag}
								</span>
							))}
							{project.tags.length > 3 && (
								<span className="text-[9px] uppercase font-bold tracking-wider px-2 py-1 bg-charcoal/5 dark:bg-white/10 text-charcoal dark:text-ivory/60 rounded-md transition-colors">
									+{project.tags.length - 3}
								</span>
							)}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

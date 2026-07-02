"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useCallback, useEffect } from "react";

interface NavigationProps {
	currentIndex: number;
	total: number;
	projectIds: string[];
}

export function SlideTransition({
	children,
	currentIndex,
	direction,
}: {
	children: ReactNode;
	currentIndex: number;
	direction: number;
}) {
	return (
		<AnimatePresence initial={false} custom={direction} mode="popLayout">
			<motion.div
				key={currentIndex}
				custom={direction}
				variants={{
					enter: (dir: number) => ({
						x: dir > 0 ? 800 : -800,
						opacity: 0,
						scale: 0.95,
					}),
					center: { x: 0, opacity: 1, scale: 1 },
					exit: (dir: number) => ({
						x: dir < 0 ? 800 : -800,
						opacity: 0,
						scale: 0.95,
					}),
				}}
				initial="enter"
				animate="center"
				exit="exit"
				transition={{ type: "spring", stiffness: 300, damping: 32 }}
				className="absolute inset-0 w-full h-full"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export function RevealCurtain({ children }: { children: ReactNode }) {
	return (
		<div className="absolute inset-0 bg-linear-to-t from-rich-black/95 via-rich-black/70 to-transparent opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col justify-end p-8 sm:p-12 md:p-16 text-left text-white">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
				className="max-w-xl space-y-4"
			>
				{children}
			</motion.div>
		</div>
	);
}

export function CarouselControls({
	currentIndex,
	total,
	projectIds,
}: NavigationProps) {
	const router = useRouter();

	const navigate = useCallback(
		(nextIndex: number) => {
			router.push(`/projects?active=${nextIndex}`, { scroll: false });
		},
		[router],
	);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") navigate((currentIndex - 1 + total) % total);
			if (e.key === "ArrowRight") navigate((currentIndex + 1) % total);
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [currentIndex, total, navigate]);

	return (
		<>
			<button
				type="button"
				onClick={() => navigate((currentIndex - 1 + total) % total)}
				className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-xl bg-white border-2 border-crimson text-crimson hover:bg-rich-black hover:border-rich-black hover:text-white flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-90 cursor-pointer"
				aria-label={`Go to previous project: ${projectIds[(currentIndex - 1 + total) % total]}`}
			>
				<ChevronLeft className="h-6 w-6 stroke-[2.5]" />
			</button>

			<button
				type="button"
				onClick={() => navigate((currentIndex + 1) % total)}
				className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-xl bg-white border-2 border-crimson text-crimson hover:bg-rich-black hover:border-rich-black hover:text-white flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-90 cursor-pointer"
				aria-label={`Go to next project: ${projectIds[(currentIndex + 1) % total]}`}
			>
				<ChevronRight className="h-6 w-6 stroke-[2.5]" />
			</button>
		</>
	);
}

export function ProgressPills({
	currentIndex,
	projectIds,
}: Omit<NavigationProps, "total">) {
	const router = useRouter();

	return (
		<div className="flex gap-2">
			{projectIds.map((id, idx) => (
				<button
					key={id}
					type="button"
					onClick={() =>
						router.push(`/projects?active=${idx}`, { scroll: false })
					}
					className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
						idx === currentIndex
							? "w-6 bg-crimson"
							: "w-1.5 bg-crimson/20 hover:bg-crimson/40"
					}`}
					aria-label={`Jump to project module: ${id}`}
				/>
			))}
		</div>
	);
}

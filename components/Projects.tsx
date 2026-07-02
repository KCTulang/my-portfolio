"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectsProps {
	name: string;
	images: string[];
	href: string;
}

export default function Projects({ name, images, href }: ProjectsProps) {
	const router = useRouter();
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) return;
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	const handleDotClick = useCallback(
		(index: number) => {
			api?.scrollTo(index);
		},
		[api],
	);

	return (
		<div className="relative w-full group/carousel">
			<Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
				<CarouselContent>
					{images.map((src) => (
						<CarouselItem key={src}>
							<button
								type="button"
								onClick={() => router.push(href)}
								className="relative block w-full aspect-192/100 overflow-hidden bg-charcoal/5 cursor-pointer group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-ruby)"
							>
								<Image
									src={src}
									alt={`${name} screenshot`}
									fill
									sizes="(max-width: 1024px) 100vw, 60vw"
									className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-102"
								/>
								<span className="absolute inset-0 bg-rich-black/0 group-hover/img:bg-rich-black/20 transition-colors duration-300 flex items-center justify-center">
									<span className="opacity-0 group-hover/img:opacity-100 scale-95 group-hover/img:scale-100 transition-all duration-300 px-5 py-2.5 rounded-xl bg-ivory text-(--color-ruby) text-xs font-bold tracking-widest uppercase shadow-md">
										View full details ↗
									</span>
								</span>
							</button>
						</CarouselItem>
					))}
				</CarouselContent>

				{count > 1 && (
					<>
						<CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 border-0 bg-ivory text-(--color-ruby) hover:bg-(--color-ruby) hover:text-ivory opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-md backdrop-blur-xs rounded-xl" />
						<CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 border-0 bg-ivory text-(--color-ruby) hover:bg-(--color-ruby) hover:text-ivory opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-md backdrop-blur-xs rounded-xl" />
					</>
				)}
			</Carousel>

			{count > 1 && (
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 bg-rich-black/30 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 shadow-sm">
					<fieldset className="flex justify-center items-center gap-2">
						<legend className="sr-only">Image navigation</legend>
						{images.map((src, i) => (
							<button
								key={src}
								type="button"
								onClick={() => handleDotClick(i)}
								aria-label={`Go to image ${i + 1}`}
								aria-current={i === current ? true : undefined}
								className={`h-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--color-ruby) cursor-pointer ${
									i === current
										? "w-4 bg-ivory"
										: "w-1 bg-ivory/40 hover:bg-ivory/70"
								}`}
							/>
						))}
					</fieldset>
				</div>
			)}
		</div>
	);
}

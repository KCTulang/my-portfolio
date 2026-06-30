"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
	images: string[];
	projectName: string;
}

export function ProjectCarousel({ images, projectName }: ProjectCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	const plugin = React.useMemo(
		() => Autoplay({ delay: 3000, stopOnInteraction: true }),
		[],
	);

	React.useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);

	if (!images || images.length <= 1) {
		return (
			<div className="relative w-full rounded-2xl overflow-hidden bg-(--color-rich-black) mt-8">
				<Image
					src={images[0] || "/Projects/placeholder.png"}
					alt={`${projectName} master capture`}
					width={192}
					height={100}
					priority
					className="object-cover w-full h-auto max-h-126"
				/>
			</div>
		);
	}

	return (
		<div className="relative w-full group/carousel mt-8">
			<Carousel
				setApi={setApi}
				plugins={[plugin]}
				opts={{ loop: true }}
				className="w-full"
			>
				<CarouselContent>
					{images.map((src) => (
						<CarouselItem key={src}>
							<div className="rounded-2xl overflow-hidden bg-(--color-rich-black)">
								<Image
									src={src}
									alt={`${projectName} interface capture`}
									width={896}
									height={504}
									className="object-cover w-full h-auto max-h-126"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 h-9 w-9 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm" />
				<CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 h-9 w-9 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm" />
			</Carousel>

			<div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-10 flex items-center justify-between bg-linear-to-t from-black/50 to-transparent rounded-b-2xl pointer-events-none">
				<div className="flex items-center gap-1.5 pointer-events-auto">
					{images.map((src, i) => (
						<button
							key={src}
							type="button"
							onClick={() => api?.scrollTo(i)}
							aria-label={`Go to image ${i + 1}`}
							className={`h-1.5 rounded-full transition-all duration-300 ${
								i === current
									? "w-5 bg-white"
									: "w-1.5 bg-white/35 hover:bg-white/60"
							}`}
						/>
					))}
				</div>

				<span className="font-mono text-[10px] tracking-widest text-white/50">
					{String(current + 1).padStart(2, "0")} /{" "}
					{String(images.length).padStart(2, "0")}
				</span>
			</div>
		</div>
	);
}

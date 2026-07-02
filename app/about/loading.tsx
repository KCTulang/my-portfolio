export default function AboutSkeleton() {
	const infoPills = ["pill-1", "pill-2", "pill-3", "pill-4"];

	return (
		<section className="min-h-screen bg-ruby w-full pt-10 pb-10 relative overflow-hidden flex items-center justify-center select-none animate-pulse">
			<div className="w-full relative flex flex-col items-center gap-8 mt-10 z-10 px-4 lg:block lg:max-w-[1600px] lg:h-187.5 xl:h-225 lg:mx-auto lg:mt-0 xl:px-16 lg:gap-0">
				<div className="relative order-first lg:absolute lg:order-0 z-0 flex w-full justify-center lg:justify-end mt-4 mb-2 lg:mt-0 lg:mb-0 lg:right-4 xl:right-10 lg:top-5 lg:w-auto">
					<div className="h-[clamp(3.5rem,14vw,6rem)] lg:h-[clamp(4.5rem,11.5vw,12rem)] w-[60vw] lg:w-100 xl:w-150 bg-white/10 rounded-xl transform scale-y-120 origin-bottom" />
				</div>

				<div className="order-1 relative w-[70vw] max-w-75 aspect-4/5 lg:order-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:top-15 lg:z-20 lg:w-[32vw] xl:w-[38vw] 2xl:w-[40vw] lg:max-w-150 lg:-ml-2 xl:-ml-5 lg:aspect-auto bg-white/10 rounded-2xl lg:rounded-t-[3rem] lg:rounded-b-none" />

				<div className="contents lg:absolute lg:right-4 xl:right-10 lg:top-60 xl:top-80 lg:z-30 lg:flex lg:w-full lg:max-w-75 xl:max-w-105 2xl:max-w-125 lg:flex-col lg:gap-4 xl:gap-8 lg:text-right">
					<div className="order-2 flex flex-col items-center gap-3 w-full max-w-md px-2 lg:order-0 lg:items-end lg:gap-2 xl:gap-3 lg:max-w-none lg:px-0">
						<div className="h-8 xl:h-10 w-3/4 bg-white/20 rounded-md" />
						<div className="h-4 w-full bg-white/10 rounded mt-1 xl:mt-2" />
						<div className="h-4 w-full bg-white/10 rounded" />
						<div className="h-4 w-5/6 bg-white/10 rounded" />
					</div>

					<div className="order-3 w-full max-w-md border-t border-b border-ivory/15 py-5 grid grid-cols-2 px-4 mt-2 lg:order-0 lg:max-w-none lg:border-b-0 lg:border-ivory/20 lg:py-0 lg:pt-4 xl:pt-8 lg:gap-2 xl:gap-4 lg:px-0 lg:mt-0">
						<div className="border-r border-ivory/10 lg:border-none flex flex-col items-center lg:items-end gap-2">
							<div className="h-2.5 xl:h-3 w-12 xl:w-16 bg-white/10 rounded" />
							<div className="h-5 xl:h-6 w-20 xl:w-28 bg-white/20 rounded" />
						</div>
						<div className="flex flex-col items-center lg:items-end gap-2">
							<div className="h-2.5 xl:h-3 w-16 xl:w-20 bg-white/10 rounded" />
							<div className="h-5 xl:h-6 w-28 xl:w-36 bg-white/20 rounded" />
							<div className="h-2.5 w-14 bg-white/10 rounded" />
						</div>
					</div>

					<div className="order-5 flex flex-col sm:flex-row gap-3 w-full max-w-md pt-4 mt-2 lg:order-0 lg:w-full lg:max-w-none lg:justify-end lg:gap-2 xl:gap-4 lg:pt-2 xl:pt-4 lg:mt-0">
						<div className="w-full sm:w-1/2 lg:w-35 xl:w-40 h-14 xl:h-17 bg-white/10 rounded-xl lg:rounded-full border border-white/20" />
						<div className="w-full sm:w-1/2 lg:w-35 xl:w-40 h-14 xl:h-17 bg-white/10 rounded-xl lg:rounded-full border border-white/20" />
					</div>
				</div>

				<div className="order-4 flex flex-col gap-4 w-full max-w-md lg:order-0 lg:absolute lg:left-2 xl:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:z-50 lg:gap-4 xl:gap-8 lg:max-w-65 xl:max-w-100 2xl:max-w-125">
					{infoPills.map((pill, index) => {
						const isArcEdge = index === 0 || index === 3;

						return (
							<div
								key={pill}
								className={`w-full bg-ivory/95 backdrop-blur-sm px-6 py-5 rounded-2xl sm:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/30 flex flex-col items-center lg:justify-center gap-2 lg:gap-3 lg:px-4 xl:px-8 lg:py-4 xl:py-6 lg:h-25 xl:h-35 2xl:h-40 ${isArcEdge ? "lg:translate-x-4 xl:translate-x-10" : "lg:translate-x-0"}`}
							>
								<div className="h-2.5 xl:h-3 w-16 xl:w-24 bg-ruby/20 rounded" />
								<div className="h-4 xl:h-5 w-2/3 xl:w-3/4 bg-ruby/30 rounded" />
								<div className="h-3 xl:h-4 w-1/2 xl:w-2/3 bg-ruby/20 rounded mt-0.5" />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default function ProjectSkeleton() {
	const progressItems = [
		{ id: "active-pill", className: "w-8 bg-crimson/20" },
		{ id: "pill-1", className: "w-4" },
		{ id: "pill-2", className: "w-4" },
		{ id: "pill-3", className: "w-4" },
		{ id: "pill-4", className: "w-4" },
	];

	const tagItems = [
		{ id: "tag-1", width: "w-12" },
		{ id: "tag-2", width: "w-14" },
		{ id: "tag-3", width: "w-20" },
		{ id: "tag-4", width: "w-16" },
		{ id: "tag-5", width: "w-14" },
	];

	return (
		<main className="min-h-screen w-full bg-ivory relative select-none flex flex-col justify-between pt-32 pb-16 animate-pulse">
			<header className="w-full max-w-362.5 mx-auto px-6 sm:px-10 md:px-16 lg:px-24 mb-6 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
				<div className="max-w-2xl w-full flex flex-col">
					<div className="h-3.5 w-32 bg-crimson/20 rounded-full mb-3" />

					<div className="flex flex-wrap gap-x-3 gap-y-2 w-full items-center">
						<div className="h-10 sm:h-14 w-64 bg-black/10 rounded-full" />
						<div className="h-10 sm:h-14 w-32 bg-crimson/20 rounded-full" />
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full max-w-sm">
					<div className="h-4 w-full bg-black/5 rounded-full" />
					<div className="h-4 w-5/6 bg-black/5 rounded-full md:self-end" />
				</div>
			</header>

			<div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-12 md:px-24 max-w-375 mx-auto relative my-6">
				<div className="w-full flex justify-center items-center mb-6 text-[10px] sm:text-xs px-2">
					<div className="flex items-center gap-4 sm:gap-8">
						<div className="h-6 w-36 bg-black/5 rounded-full" />
						<span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-black/5" />
						<div className="h-6 w-32 bg-black/5 rounded-full" />
					</div>
				</div>

				<div className="relative w-full rounded-3xl p-1 bg-black/5 shadow-[0_40px_80px_rgba(0,0,0,0.06)]">
					<div className="relative w-full aspect-192/100 rounded-[1.4rem] overflow-hidden bg-black/10">
						<div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent" />

						<div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14 lg:p-20 bg-linear-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-4 justify-end h-full z-20">
							<div className="space-y-2">
								<div className="h-3 w-32 bg-white/20 rounded-full" />
								<div className="h-6 sm:h-8 lg:h-10 w-1/3 max-w-xs bg-white/30 rounded-full" />
							</div>

							<div className="space-y-2 max-w-lg w-full">
								<div className="h-4 w-full bg-white/20 rounded-full" />
								<div className="h-4 w-full bg-white/20 rounded-full" />
								<div className="h-4 w-4/5 bg-white/20 rounded-full" />
							</div>

							<div className="flex gap-1.5 flex-wrap pt-2">
								{tagItems.map((tag) => (
									<div
										key={tag.id}
										className={`h-5 ${tag.width} rounded-full bg-crimson/20`}
									/>
								))}
							</div>

							<div className="pt-4">
								<div className="h-4 w-40 bg-white/30 rounded-full" />
							</div>
						</div>
					</div>

					<div className="absolute top-1/2 -translate-y-1/2 left-4 h-10 w-10 bg-white/10 rounded-full z-30" />
					<div className="absolute top-1/2 -translate-y-1/2 right-4 h-10 w-10 bg-white/10 rounded-full z-30" />
				</div>

				<div className="w-full flex items-center justify-between mt-6 px-2">
					<div className="h-5 w-12 bg-black/5 rounded-full" />

					<div className="flex gap-2">
						{progressItems.map((item) => (
							<div
								key={item.id}
								className={`h-1.5 rounded-full bg-black/10 ${item.className}`}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

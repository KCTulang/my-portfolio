export default function ProjectSkeleton() {
	const placeholderTags = ["tag-1", "tag-2", "tag-3", "tag-4"];
	const placeholderScreens = [
		"screen-1",
		"screen-2",
		"screen-3",
		"screen-4",
		"screen-5",
	];
	const placeholderDots = ["dot-1", "dot-2", "dot-3", "dot-4", "dot-5"];

	return (
		<main className="min-h-screen w-full bg-(--color-ivory) relative select-none flex flex-col justify-between pt-32 pb-16 animate-pulse">
			<header className="w-full max-w-362.5 mx-auto px-6 sm:px-10 md:px-16 lg:px-24 mb-6 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
				<div className="max-w-2xl space-y-3">
					<div className="h-2.5 w-32 rounded-full bg-(--color-charcoal)/15" />
					<div className="h-10 sm:h-14 w-72 sm:w-96 rounded-lg bg-(--color-charcoal)/10" />
				</div>
				<div className="flex flex-col gap-2 max-w-sm w-full md:items-end">
					<div className="h-3 w-full rounded-full bg-(--color-charcoal)/10" />
					<div className="h-3 w-5/6 rounded-full bg-(--color-charcoal)/10" />
					<div className="h-3 w-2/3 rounded-full bg-(--color-charcoal)/10" />
				</div>
			</header>

			<div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-12 md:px-24 max-w-375 mx-auto relative my-6">
				<div className="w-full flex justify-center items-center mb-6 px-2">
					<div className="flex items-center gap-4 sm:gap-8">
						<div className="h-6 w-36 rounded-md bg-(--color-charcoal)/10" />
						<span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-(--color-crimson)/20" />
						<div className="h-6 w-28 rounded-md bg-(--color-charcoal)/10" />
					</div>
				</div>

				<div className="relative w-full rounded-3xl p-1 bg-linear-to-b from-black/5 to-black/10 shadow-[0_40px_80px_rgba(0,0,0,0.06)]">
					<div className="relative w-full aspect-192/100 rounded-[1.4rem] overflow-hidden bg-(--color-rich-black)/10">
						<div className="absolute inset-0 bg-(--color-charcoal)/10" />

						<div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 space-y-4">
							<div className="space-y-2">
								<div className="h-2.5 w-44 rounded-full bg-white/30" />
								<div className="h-9 sm:h-12 w-56 sm:w-72 rounded-lg bg-white/30" />
							</div>

							<div className="space-y-2 max-w-lg">
								<div className="h-3 w-full rounded-full bg-white/20" />
								<div className="h-3 w-11/12 rounded-full bg-white/20" />
								<div className="h-3 w-2/3 rounded-full bg-white/20" />
							</div>

							<div className="flex gap-1.5 flex-wrap pt-2">
								{placeholderTags.map((tag) => (
									<div key={tag} className="h-5 w-16 rounded-md bg-white/25" />
								))}
							</div>

							<div className="pt-6">
								<div className="h-3 w-36 rounded-full bg-white/30" />
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between px-4 sm:px-6 py-4">
						<div className="h-9 w-9 rounded-full bg-(--color-charcoal)/10 shrink-0" />
						<div className="flex gap-2 overflow-hidden">
							{placeholderScreens.map((screen) => (
								<div
									key={screen}
									className="h-12 w-16 rounded-lg bg-(--color-charcoal)/10 shrink-0"
								/>
							))}
						</div>
						<div className="h-9 w-9 rounded-full bg-(--color-charcoal)/10 shrink-0" />
					</div>
				</div>

				<div className="w-full flex items-center justify-between mt-6 px-2">
					<div className="h-3 w-16 rounded-full bg-(--color-charcoal)/10" />
					<div className="flex gap-1.5">
						{placeholderDots.map((dot) => (
							<div key={dot} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

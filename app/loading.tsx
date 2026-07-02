export default function Loading() {
	return (
		<div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16 animate-pulse">
			<div className="max-w-5xl mx-auto w-full space-y-10">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
					<div className="max-w-5xl mx-auto w-full">
						<div className="flex-1 space-y-10">
							<div className="w-32 h-8 rounded-full bg-gray-200/80 dark:bg-gray-800/80" />

							<div className="space-y-4">
								<div className="w-80 h-4 rounded bg-gray-200/80 dark:bg-gray-800/80" />
								<div className="space-y-3">
									<div className="h-[clamp(2.8rem,8vw,5rem)] w-3/4 rounded-2xl bg-gray-200 dark:bg-gray-800" />
									<div className="h-[clamp(2.8rem,8vw,5rem)] w-full max-w-2xl rounded-2xl bg-gray-200 dark:bg-gray-800" />
								</div>
							</div>

							<div className="flex items-start gap-6 max-w-xl">
								<div className="w-px h-16 bg-gray-200 dark:bg-gray-700 shrink-0 mt-1" />
								<div className="flex-1 space-y-3 pt-2">
									<div className="h-4 w-full rounded bg-gray-200/80 dark:bg-gray-800/80" />
									<div className="h-4 w-5/6 rounded bg-gray-200/80 dark:bg-gray-800/80" />
									<div className="h-4 w-2/3 rounded bg-gray-200/80 dark:bg-gray-800/80" />
								</div>
							</div>

							<div className="flex flex-wrap items-center gap-2">
								<div className="h-12 w-40 rounded-full bg-gray-200 dark:bg-gray-800" />
								<div className="h-12 w-36 rounded-full bg-gray-200/80 dark:bg-gray-800/80" />
								<div className="h-12 w-36 rounded-full bg-gray-200/80 dark:bg-gray-800/80" />
							</div>
						</div>
					</div>

					<div className="relative shrink-0 w-64 md:w-72 lg:w-120 aspect-square">
						<div className="absolute inset-0 rounded-full scale-120 blur-xl dark:bg-gray-900/50" />
						<div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 rounded-3xl" />
					</div>
				</div>
			</div>
		</div>
	);
}

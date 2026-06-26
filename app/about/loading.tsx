export default function Loading() {
	return (
		<section className="min-h-screen bg-(--color-ruby) w-full flex justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16">
			<div>
				<div className="absolute inset-0 bg-gray-200 rounded-full scale-150 animate-pulse" />
				<div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
			</div>
		</section>
	);
}

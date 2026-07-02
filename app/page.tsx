import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import Loading from "./loading";

export default function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<HomeContent />
		</Suspense>
	);
}

async function HomeContent() {
	// Intentional delay for testing the skeleton
	await new Promise((resolve) => setTimeout(resolve, 5000));

	return (
		<div>
			<Hero />
		</div>
	);
}

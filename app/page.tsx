import { Hero } from "@/components/Hero";

export default async function Home() {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve("intentional delay");
		}, 2000);
	});

	return (
		<div>
			<Hero />
		</div>
	);
}

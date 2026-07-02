"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-ivory px-6 text-center">
			<div className="space-y-6 max-w-xl">
				<div className="flex justify-center mb-4">
					<Image
						src="/error.gif"
						alt="A cute error illustration"
						width={1000}
						height={1000}
						className="rounded-2xl"
					/>
				</div>

				<h2 className="text-3xl font-bold text-crimson tracking-tight">
					Oopsie daisy! It's a glitch.
				</h2>
				<p className="text-charcoal leading-relaxed">
					Hi, I'm KC! It seems the code decided to take a little coffee break
					without asking. I'm busy untangling the wires behind the scenes, care
					to give it another go?
				</p>

				<div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
					<Button
						onClick={() => reset()}
						className="bg-crimson p-5 px-10 rounded-full text-ivory hover:bg-crimson transition-all duration-300 hover:scale-105 active:scale-100 shadow-md"
					>
						Try again
					</Button>
					<Button
						asChild
						variant="outline"
						className="border-charcoal/20 p-5 px-10 rounded-full hover:border-crimson hover:text-crimson transition-all duration-300 hover:scale-105 active:scale-100"
					>
						<Link href="/">Back to home </Link>
					</Button>
				</div>
			</div>
		</main>
	);
}

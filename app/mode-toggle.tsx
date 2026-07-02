"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				size="icon"
				className="rounded-full w-9 h-9"
				disabled
			/>
		);
	}

	const currentTheme = theme === "system" ? resolvedTheme : theme;

	const toggleTheme = () => {
		setTheme(currentTheme === "dark" ? "light" : "dark");
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			className="relative rounded-full overflow-hidden transition-all duration-300 hover:bg-crimson/10 group cursor-pointer border border-transparent hover:border-crimson/20"
		>
			<Sun className="absolute h-5 w-5 text-amber-600 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-100 rotate-0 opacity-100 dark:scale-0 dark:rotate-90 dark:opacity-0" />

			<Moon className="absolute h-5 w-5 text-ivory transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 -rotate-90 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100 group-hover:text-crimson" />

			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}

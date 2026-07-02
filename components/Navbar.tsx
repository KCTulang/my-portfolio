"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/app/mode-toggle";

const NAV_LINKS = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
];

const TRANSITION =
    "transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);
    
    const headerClasses = `fixed left-0 right-0 z-80 mx-auto flex justify-center will-change-transform ${TRANSITION} ${
        isScrolled ? "top-6 w-[calc(100%-2rem)] max-w-4xl" : "top-0 w-full"
    }`;

    const navClasses = `flex w-full flex-col items-center justify-between bg-ivory text-rich-black md:flex-row dark:bg-black dark:text-ivory ${TRANSITION} ${
        isScrolled
            ? "rounded-3xl px-6 py-3 shadow-[0_2px_8px_rgb(0,0,0,0.40)] dark:shadow-[0_2px_8px_rgb(255,255,255,0.1)]"
            : "px-8 py-4 shadow-[0_2px_4px_rgb(0,0,0,0.40)] dark:shadow-[0_2px_4px_rgb(255,255,255,0.05)]"
    }`;

    const menuContainerClasses = `z-50 w-full flex-col items-center gap-1 pb-4 mt-4 md:mt-0 md:flex md:w-auto md:flex-row md:pb-0 ${
        isMenuOpen ? "flex" : "hidden"
    }`;

    const getLinkClasses = (isActive: boolean) => {
        const baseClasses = "block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-in-out";
        const activeClasses = "bg-crimson/10 text-crimson dark:bg-watermelon/10 dark:text-watermelon";
        const inactiveClasses = "text-charcoal hover:bg-crimson/10 hover:text-crimson dark:text-ivory/70 dark:hover:text-watermelon";
        
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    return (
        <header className={headerClasses}>
            <nav className={navClasses}>
                {/* Logo + Mobile Menu Trigger */}
                <div className="flex w-full items-center justify-between md:w-auto">
                    <Link
                        href="/"
                        onClick={() => {
                            closeMenu();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        <span className="tracking-widest transition-colors duration-500 hover:text-crimson dark:hover:text-watermelon">
                            KC Tulang
                        </span>
                    </Link>

                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        className="p-1 text-rich-black md:hidden dark:text-ivory"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={menuContainerClasses}>
                    {NAV_LINKS.map(({ name, path }) => (
                        <div key={name} className="w-full text-center md:w-auto">
                            <Link
                                href={path}
                                onClick={closeMenu}
                                className={getLinkClasses(pathname === path)}
                            >
                                {name}
                            </Link>
                        </div>
                    ))}

                    {/* Dark Mode Toggle */}
                    <div className="mt-2 flex w-full justify-center border-t border-charcoal/10 pt-4 md:ml-4 md:mt-0 md:w-auto md:justify-start md:border-l md:border-t-0 md:pl-4 md:pt-0 lg:ml-6 lg:pl-6 dark:border-white/10">
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
}
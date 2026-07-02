"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const sharedPhysics = { type: "spring", stiffness: 300, damping: 32 };

const pageVariants = {
    home: {
        initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    },
    projects: {
        initial: { opacity: 0, x: 100, filter: "blur(4px)" },
        animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    about: {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
    },
    contact: {
        initial: { opacity: 0, y: 50, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
    },
    default: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    }
};

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const getVariant = () => {
        if (pathname === "/") return pageVariants.home;
        if (pathname.startsWith("/projects")) return pageVariants.projects;
        if (pathname.startsWith("/about")) return pageVariants.about;
        if (pathname.startsWith("/contact")) return pageVariants.contact;
        return pageVariants.default;
    };

    return (
        <motion.main
            key={pathname}
            variants={getVariant()}
            initial="initial"
            animate="animate"
            transition={sharedPhysics}
            className="w-full h-full"
        >
            {children}
        </motion.main>
    );
}
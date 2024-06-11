"use client";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname();

    const getLinkClasses = (href: string) =>
        `py-3 px-4 inline-flex items-center gap-2 text-sm font-medium rounded-lg shadow-sm ${
            path === href
                ? "bg-white text-text dark:bg-neutral-800 dark:text-neutral-400"
                : "bg-transparent text-text hover:text-gray-700 dark:text-neutral-400 dark:hover:text-white"
        }`;

    const getIconClasses = (href: string) =>
        path === href ? "text-accent hover:text-accent" : "text-background hover:text-accent-dark";

    return (
        <header className="fixed bottom-0 w-full p-1">
            <div className="max-w-full mx-auto justify-center">
                <div className="flex bg-primary-600 rounded-lg transition p-1 dark:bg-neutral-700 dark:hover:bg-neutral-600 justify-center">
                    <nav className="flex space-x-6 items-center lg:space-x-60 md:space-x-30">
                        <Link className={getLinkClasses("/")} href="/">
                            <GoHome size={30} className={getIconClasses("/")} />
                        </Link>
                        <Link className={getLinkClasses("/history")} href="/history">
                            <VscHistory size={30} className={getIconClasses("/history")} />
                        </Link>
                        <Link className={getLinkClasses("/schedule")} href="/schedule">
                            <IoMdTime size={30} className={getIconClasses("/schedule")} />
                        </Link>
                        <Link className={getLinkClasses("/profile")} href="/profile">
                            <CgProfile size={30} className={getIconClasses("/profile")} />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

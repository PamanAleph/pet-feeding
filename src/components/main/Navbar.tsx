import Link from "next/link";
import React from "react";
import {CgProfile} from "react-icons/cg";
import {GoHome} from "react-icons/go";
import {IoMdTime} from "react-icons/io";
import {VscHistory} from "react-icons/vsc";

export default function Navbar() {
    return (
        <header className="fixed bottom-0 w-full p-1">
            <div className="max-w-7xl mx-auto justify-center">
                <div
                    className="flex bg-primary rounded-lg transition p-1 dark:bg-neutral-700 dark:hover:bg-neutral-600 justify-center">
                    <nav className="flex space-x-2 items-center">
                        <Link className="py-3 px-4 inline-flex items-center gap-2 bg-white text-sm text-gray-700 font-medium rounded-lg shadow-sm dark:bg-neutral-800 dark:text-neutral-400"
                           href="#" aria-current="page">
                            <GoHome size={30} className="text-text hover:text-text-dark"/>
                        </Link>
                        <Link className="py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white"
                           href="#">
                            <VscHistory size={30} className="text-text"/>
                        </Link>
                        <Link className="py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white"
                           href="#">
                            <IoMdTime size={30} className="text-text"/>
                        </Link>
                        <Link className="py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-400 font-medium rounded-lg hover:text-gray-700 dark:text-neutral-400 dark:hover:text-white"
                           href="#">
                            <CgProfile size={30} className="text-text"/>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

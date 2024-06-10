import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";

export default function Navbar() {
  return (
    <header className="fixed bottom-0 w-full p-1 bg-primary dark:bg-primary-dark">
      <div className="container flex justify-between h-16 mx-auto">
        <ul className="items-stretch flex justify-evenly w-full">
          <li className="flex flex-1 justify-center">
            <Link
              href="/"
              className="flex items-center px-4 -mb-1"
            >
              <GoHome size={35} className="text-text hover:text-text-dark"/>
            </Link>
          </li>
          <li className="flex flex-1 justify-center">
            <Link
              href="history"
              className="flex items-center px-4 -mb-1"
            >
              <VscHistory size={33} className="text-text hover:text-text-dark"/>
            </Link>
          </li>
          <li className="flex flex-1 justify-center">
            <Link
              href="schedule"
              className="flex items-center px-4 -mb-1"
            >
              <IoMdTime size={35} className="text-text hover:text-text-dark"/>
            </Link>
          </li>
          <li className="flex flex-1 justify-center">
            <Link
              href="profile"
              className="flex items-center px-4 -mb-1"
            >
              <CgProfile size={30} className="text-text hover:text-text-dark"/>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

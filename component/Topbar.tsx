
import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";



export default function TopBar() {
  const router = useRouter()
  return (
    <header className="fixed top-0 left-0 right-0 w-full dark:bg-[#020826] bg-white shadow-md py-2 px-2 lg:px-12 lg:pr-6 flex gap-4 items-center justify-end lg:justify-between dark:border-b border-neutral-800/50 z-50 h-16 backdrop-blur-lg lg:pl-20">
        <nav className="flex justify-center items-center gap-3 lg:gap-6 text-sm  dark:text-neutral-400 font-semibold">
            <Link href="https://toouk.market" target="blank" className="transition-all duration-150 dark:text-blue-500 hover:text-blue-400 dark:hover:text-blue-400">
                Marketplace
            </Link>
            <Link href="" className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white">
                Learning
            </Link>
            <Link href="" className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white">
                News
            </Link>
            <Link href="" className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white">
                Listing
            </Link>
        </nav>
        <div className="flex items-center bg-neutral-900 text-neutral-300 rounded-lg px-4 py-2 lg:w-full max-w-md">
        <IconSearch size={18} className="text-neutral-500" />
        <input
            type="text"
            placeholder="Search..."
            className="hidden lg:flex bg-transparent outline-none ml-3 w-full placeholder-neutral-500 text-sm"
        />
        </div>
    </header>
  );
}


import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";



export default function TopBar() {
  const router = useRouter()
  return (
    <header className="fixed top-0 left-0 right-0 w-full dark:bg-[#020826] bg-white shadow-md py-2 px-6 lg:px-12  flex items-center justify-end lg:justify-between dark:border-b border-neutral-800/50 z-50 h-16 backdrop-blur-lg lg:pl-20">
        <nav className="flex justify-center items-center gap-6 text-sm  dark:text-neutral-400 font-semibold">
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
    </header>
  );
}

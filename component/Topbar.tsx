
import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";



export default function TopBar() {
  const router = useRouter()
  return (
    <header className="fixed top-0 left-0 right-0 w-full dark:bg-[#020826] bg-white shadow-md px-4 py-2  flex items-center justify-end lg:justify-between dark:border-b border-neutral-800/90 z-50 h-16">
      <motion.h1
        onClick={()=>{router.push("/landing")}}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
          rest: { x: 0 },
          hover: { x: 10 }, // move slightly right on hover
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex justify-start items-baseline gap-0 text-sm font-bold text-gray-900 dark:text-white cursor-pointer py-4"
      >
        {/* T — revealed on sidebar hover */}
        <motion.span
          variants={{
            rest: { opacity: 0, x: -8 },
            hover: { opacity: 1, x: 0 },
          }}
          className="text-2xl"
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          T
        </motion.span>

        {/* ✅ Logo image always visible, no animation */}
        <Image
          className="h-3 w-auto invert dark:invert-0"
          width={30}
          height={10}
          src="/toouk-mini-logo.png"
          alt="Toouk mini logo"
        />

        {/* UK — revealed on sidebar hover */}
        <motion.span
          variants={{
            rest: { opacity: 0, x: 8 },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          UK
        </motion.span>
      </motion.h1>
        <nav className="hidden ml-16 lg:flex justify-center items-center gap-6 text-sm  dark:text-neutral-300 font-semibold">
            <Link href="https://toouk.market" target="blank" className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white">
                Marketplace
            </Link>
            <Link href="" className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white">
                Trading
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

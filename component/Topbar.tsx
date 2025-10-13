
import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";



export default function TopBar() {
  const router = useRouter()
  return (
    <header className="fixed top-0 left-0 right-0 w-full dark:bg-[#020826]/40 bg-white shadow-md max-w-7xl mx-0 lg:mx-auto py-2 px-6 lg:px-12  flex items-center justify-between dark:border-b border-x rounded-lg border-neutral-800/50 z-50 h-16 backdrop-blur-lg">
      <motion.h1
        onClick={()=>{router.push("/")}}
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

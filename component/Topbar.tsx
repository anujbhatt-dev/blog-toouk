"use client";
import React from "react";
import { IconSearch, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSidebarStore } from "@/store/sidebarStore";
import { useSearchStore } from "@/store/searchStore";
import { useGlobalStore } from "@/store/globalStore";
import { authStore } from "@/store/authStore";
import RegisterPortal from "./ui/portals/RegisterPortal";
import LoginPortal from "./ui/portals/LoginPortal";

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toggleSearch } = useSearchStore();
  const { enabled } = useSidebarStore();
  const { setRegisterPortal, setLoginPortal } = useGlobalStore();
  const { isAuthenticated } = authStore();

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full dark:bg-[#020826] bg-white shadow-md px-4 py-2 flex items-center justify-end lg:justify-between dark:border-b border-neutral-800/90 z-50 h-16 transition-all duration-150`}
    >
      

      {/* Navbar and actions for non-home pages */}
      
        <>
          {/* Center navigation */}
          <nav
            className={`${
              enabled && "xl:ml-56"
            } transition-all duration-150 hidden ml-16 lg:flex justify-center items-center gap-6 text-sm dark:text-neutral-300 font-semibold`}
          >
            <Link
              href="/trading"
              className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white"
            >
              Trading
            </Link>
            <Link
              href="/learning"
              className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white"
            >
              Learning
            </Link>
            <Link
              href="/news"
              className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white"
            >
              News
            </Link>
            <Link
              href="/listing"
              className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white"
            >
              Listing
            </Link>
            <Link
              href="https://blog.toouk.market"
              target="_blank"
              className="transition-all duration-150 hover:text-zinc-500 dark:hover:text-white"
            >
              Blogs
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-2 text-sm">
            {/* Search bar / button */}
            <div
              onClick={() => toggleSearch()}
              className="relative lg:min-w-sm ml-10 lg:ml-0 cursor-pointer"
            >
              <div className="lg:absolute lg:right-3 lg:top-1/2 lg:-translate-y-1/2 flex items-center text-neutral-400 dark:text-neutral-300">
                <IconSearch
                  className="h-auto lg:h-5 w-[34px] p-[4px] lg:p-0 rounded-lg border lg:border-0 border-gray-200 dark:border-neutral-100/20 dark:bg-neutral-900 bg-neutral-200 dark:hover:bg-neutral-800 hover:bg-neutral-100 lg:bg-transparent lg:dark:bg-transparent"
                />
              </div>
              <p className="hidden lg:block text-xs pr-10 rounded-lg border border-gray-200 dark:border-neutral-100/20 px-3 py-2 transition-all duration-100 text-neutral-400 cursor-pointer dark:bg-neutral-900 bg-neutral-200 dark:hover:bg-neutral-800 hover:bg-neutral-100">
                What are you searching for?
              </p>
            </div>

            {/* Auth buttons */}
            <div className="flex gap-2 items-center justify-center text-xs">
              {!isAuthenticated ? (
                <>
                  <div
                    onClick={() => setRegisterPortal(true)}
                    className="dark:text-white px-6 py-2 rounded-lg font-semibold border border-black/20 dark:border-white/20 cursor-pointer bg-neutral-900"
                  >
                    Sign Up
                  </div>
                  <div
                    onClick={() => setLoginPortal(true)}
                    className="text-white bg-blue-600 px-6 py-2 rounded-lg font-semibold cursor-pointer"
                  >
                    Sign In
                  </div>
                </>
              ) : (
                <div className="flex gap-2 items-center text-gray-600 dark:text-gray-300">
                  <IconUser />
                </div>
              )}
            </div>
          </div>
        </>
      

      {/* Portals for Auth */}
      <RegisterPortal />
      <LoginPortal />
    </header>
  );
}

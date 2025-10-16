"use client";
import React from "react";
import {
  IconHome2,
  IconMenu2,
  IconX,
  IconSpeakerphone,
  IconUsersGroup,
  IconRocket,
  IconCpu,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useCategoryState from "@/store/categoryStore";
import { CategorySchema } from "@/utils/types";
import Link from "next/link";
import { useSidebarStore } from "@/store/sidebarStore";

const icons = new Map<string, React.ReactNode>();
icons.set("all", <IconHome2 />);
icons.set("announcements", <IconSpeakerphone />);
icons.set("community", <IconUsersGroup />);
icons.set("leadership", <IconRocket />);
icons.set("technology", <IconCpu />);

export default function Sidebar() {
  const { data } = useCategoryState();
  const { enabled, toggle, close, open } = useSidebarStore();

  // Close on ESC (mobile)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      {/* Mobile toggle */}
      <div className="fixed top-3 left-3 z-[60] flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex lg:hidden items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900"
          aria-controls="mobile-sidebar"
          aria-expanded={enabled}
        >
          {enabled ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {/* MOBILE: slide-in */}
      <AnimatePresence>
        {enabled && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              key="mobile"
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed top-0 left-0 z-[55] h-screen w-56 bg-white/10 dark:bg-[#020826]/10 border-r border-neutral-100/20 dark:border-neutral-800/90 shadow-md lg:hidden backdrop-blur-xl overflow-y-auto pb-40"
            >
              <Header />
              <Nav menuItems={data} onItemClick={close} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP: hover to open */}
      <motion.aside
        className={`hidden lg:flex fixed top-0 left-0 h-screen ${
          enabled ? "w-56" : "w-16"
        } bg-white/10 dark:bg-[#020826]/10 border-r border-neutral-100/20 dark:border-neutral-800/90 shadow-md flex-col transition-all duration-300 group z-50 backdrop-blur-xl`}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <Header />
        <hr className="border-b border-white/10 -mt-[1px]" />
        <Nav menuItems={data} />
      </motion.aside>
    </>
  );
}

function Header() {
  const enabled = useSidebarStore((s) => s.enabled);
  return (
    <motion.h1
      className="flex justify-center items-center gap-0 text-2xl font-bold text-gray-900 dark:text-white cursor-pointer py-4 border-white/10 h-16 leading-0"
    >
      {enabled && <span className="mr-[2px] text-[28px]">T</span>}
      <Image
        className="h-[20px] w-auto invert dark:invert-0 -mt-[2px]"
        width={30}
        height={10}
        src="/toouk-mini-logo.png"
        alt="Toouk mini logo"
        priority
      />
      {enabled && <span className="text-sm ml-[2px] text-[24px]">UK</span>}
    </motion.h1>
  );
}

function Nav({
  menuItems,
  onItemClick,
}: {
  menuItems: CategorySchema[];
  onItemClick?: () => void;
}) {
  const { selected, setCategory } = useCategoryState();
  const enabled = useSidebarStore((s) => s.enabled);

  const clickHandler = (slug: string) => {
    setCategory(slug);
    onItemClick?.();
  };

  return (
    <nav className="my-6 flex flex-col space-y-2 px-2">
      {menuItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.slug === "all" ? "/" : "/" + item.slug}
          onClick={() => clickHandler(item.slug)}
          className={`${
            selected === item.slug ? "bg-zinc-900" : ""
          } flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-zinc-800 transition-colors`}
        >
          <span className="flex-shrink-0">{icons.get(item.slug)}</span>
          {enabled && (
            <span className="transition-opacity duration-200 whitespace-nowrap">
              {item.name}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}

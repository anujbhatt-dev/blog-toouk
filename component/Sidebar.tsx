"use client";
import React, { ReactNode } from "react";
import {
  IconHome,
  IconAB,
  IconArtboard,
  IconClothesRack,
  Icon360,
  IconMenu2,
  IconX,
  IconSpeakerphone,
  IconUsersGroup,
  IconRocket,
  IconCpu,
  IconHome2,
  
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useCategoryState from "@/store/categoryStore";
import { CategorySchema } from "@/utils/types";
import Link from "next/link";

const icons = new Map<string,ReactNode>()
icons.set("all",<IconHome2/>)
icons.set("announcements",<IconSpeakerphone/>)
icons.set("community",<IconUsersGroup/>)
icons.set("leadership",<IconRocket/>)
icons.set("technology",<IconCpu/>)

export default function Sidebar() {
  const { data } = useCategoryState();
  // Global toggle: when false, the sidebar is completely hidden (all breakpoints)
  const [enabled, setEnabled] = React.useState(true);

  // Mobile open/close state (independent from the global enable switch)
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close on ESC (mobile)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  // If the sidebar is disabled, render only the hamburger (so users can enable again)
  const showSidebar = enabled;

  return (
    <>
      {/* Top-left controls */}
      <div className="fixed top-3 left-3 z-[60] flex items-center gap-2">
        {/* Global enable/disable toggle (long-press or click) */}
        {/* <button
          type="button"
          onClick={() => setEnabled((v) => !v)}
          className="hidden lg:inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white/90 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900"
          aria-pressed={enabled}
          title={enabled ? "Hide sidebar" : "Show sidebar"}
        >
          {enabled ? "Hide Sidebar" : "Show Sidebar"}
        </button> */}

        {/* Mobile hamburger always visible so users can open when enabled */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex lg:hidden items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900"
          aria-controls="mobile-sidebar"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          disabled={!enabled}
          title={!enabled ? "Sidebar disabled" : mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {/* MOBILE: slide-in drawer */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Overlay */}
            {mobileOpen && (
              <motion.div
                key="overlay"
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            {/* Drawer */}
            <motion.aside
              id="mobile-sidebar"
              key="mobile"
              initial={{ x: -260 }}
              animate={{ x: mobileOpen ? 0 : -260 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed top-0 left-0 z-[55] h-screen w-56 bg-white/10 dark:bg-[#020826]/10 border-r border-neutral-100/20 dark:border-neutral-800/90 shadow-md lg:hidden backdrop-blur-xl overflow-y-auto pb-40"
              role="dialog"
              aria-modal="true"
            >
              <Header />
              <div className="lg:hidden">
                <Nav menuItems={data} onItemClick={() => setMobileOpen(false)} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP: hover-to-expand rail (hidden entirely if disabled) */}
      {showSidebar && (
        <motion.aside
          initial="rest"
          animate="rest"
          whileHover="hover"
          className="hidden lg:flex fixed top-0 left-0 h-screen w-16 hover:w-56 bg-white/10 dark:bg-[#020826]/10 border-r border-neutral-100/20 dark:border-neutral-800/90 shadow-md flex-col transition-all duration-300 group z-50 backdrop-blur-xl"
        >
          <Header />
          <hr className="border-b border-white/10 -mt-[1px]"/>
          <Nav menuItems={data} />
        </motion.aside>
      )}
      
    </>
  );
}

function Header() {
  return (
    <motion.h1
      variants={{
        rest: { x: 10 },
        hover: { x: 0 },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex justify-center items-center gap-0 text-2xl font-bold text-gray-900 dark:text-white cursor-pointer py-4 border-white/10 h-16 leading-0"
    >
      {/* T — revealed on sidebar hover */}
      <motion.span
        variants={{
          rest: { opacity: 0, x: -8 },
          hover: { opacity: 1, x: 3.5 },
        }}
        className="relative -mt-[5px] mr-[2px] text-[28px]"
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        T
      </motion.span>

      {/* Logo image always visible */}
      <Image
        className="h-[20px] w-auto invert dark:invert-0 -mt-[2px]"
        width={30}
        height={10}
        src="/toouk-mini-logo.png"
        alt="Toouk mini logo"
        priority
      />

      {/* uk — revealed on sidebar hover */}
      <motion.span
        variants={{
          rest: { opacity: 0, x: 8 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-sm  ml-[2px] text-[24px]"
      >
        UK
      </motion.span>
    </motion.h1>
  );
}

function Nav({
  menuItems,
  onItemClick
}: {
  menuItems: CategorySchema[];
  onItemClick?: () => void;
}) {
  const { selected, setCategory } = useCategoryState();
  const clickHandler= (slug:string)=>{
    setCategory(slug)
    if(onItemClick)
      onItemClick()
  }
  return (
    <nav className="my-6 flex flex-col space-y-2 px-2">
      {menuItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.slug=="all"?"/":"/"+item.slug}
          onClick={()=>clickHandler(item.slug)}
          className={`${selected==item.slug?"bg-zinc-900":""} flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:bg-zinc-800 transition-colors`}
        >
          <span className="flex-shrink-0">{icons.get(item.slug)}</span>
          {/* Label only visible when the desktop sidebar expands; always visible in mobile drawer */}
          <span className="hidden lg:opacity-0 lg:group-hover:opacity-100 lg:inline transition-opacity duration-200 whitespace-nowrap">
            {item.name}
          </span>
          <span className="lg:hidden inline">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}


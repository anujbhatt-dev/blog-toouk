"use client";

import React, { useEffect, useState } from "react";
import useCategoryState from "@/store/categoryStore";
import { fetchCategories } from "@/utils/data";
import { CategorySchema } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Categories() {
  const pathname = usePathname();
  if((pathname.split("/").length-1)==2) return null
  const { data, selected, setCategory, setData } = useCategoryState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetchCategories();
      const allCategory: CategorySchema = { id: 0, name: "All", slug: "all" };
      setData([allCategory, ...res]);
      setLoading(false);
      if(pathname=="/") setCategory("all")
      else setCategory(pathname.split("/")[1])
    };
    fetchData();
  }, [setData]);

  // === Skeleton while loading ===
  if (loading) {
    return (
      <div className="flex items-center gap-2 overflow-x-scroll no-scrollbar my-10 px-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 rounded-lg bg-neutral-800/50 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  // === Normal category display ===
  return (
    <div className="flex items-center gap-1 text-neutral-300 text-xs font-semibold overflow-x-scroll no-scrollbar my-10 px-2 mt-20 lg:mt-10">
      {data.map((item) => {
        const isActive = selected === item.slug;
        return (
          <Link
            scroll={false}
            href={item.slug !== "all" ? `/${item.slug}` : "/"}
            key={item.id}
            onClick={() => setCategory(item.slug)}
            className={`cursor-pointer transition-all duration-150 rounded-lg px-4 py-3 text-nowrap ${
              isActive
                ? "bg-neutral-800 text-white"
                : "hover:text-white hover:bg-neutral-800"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

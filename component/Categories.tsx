"use client";

import React, { useEffect } from "react";
import useCategoryState from "@/store/categoryStore";
import { fetchCategories } from "@/utils/data";
import { CategorySchema } from "@/utils/types";
import Link from "next/link";

export default function Categories({selected}:{selected:string}) {
  const { data, setCategory, setData } = useCategoryState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCategories();
      // Prepend "All" category at the beginning
      const allCategory: CategorySchema = { id: 0, name: "All", slug: "all" };
      setData([allCategory, ...res]);
    };

    fetchData();
  }, [setData]);

  return (
    <div className="flex items-center gap-1 text-neutral-500 text-xs font-semibold overflow-x-scroll no-scrollbar my-10">
      {data.map((item) => {
        const isActive = selected === item.slug;
        return (
          <Link
            href={item.slug!="all"?item.slug:"/"}
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

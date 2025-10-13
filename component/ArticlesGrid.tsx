"use client"
import React from "react";
import useCategoryState from "@/store/categoryStore";
import { demoArticles } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";


export default function ArticlesGrid() {
  const { selected } = useCategoryState();

  const filtered =
    selected === "all"
      ? demoArticles
      : demoArticles.filter((a) => a.category === selected);

  return (
    <div className="w-full my-10">
      {filtered.length === 0 ? (
        <p className="text-neutral-400 text-sm text-center">
          No articles available for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Link
              href={`/${article.category}/${article.slug}`}
              key={article.id}
              className="hover:bg-neutral-900 rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-200  p-4"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={160}
                height={160}
                className="w-full h-50 object-cover rounded-xl"
              />
              <div className="py-4 flex flex-col gap-3 mt-4">
                <span className="text-[10px] uppercase tracking-wide bg-neutral-800 mt-2 px-4 py-2 rounded-lg self-start">
                  {article.category.replace("-", " ")}
                </span>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {article.title}  
                </h3>
                <p className="text-neutral-400 text-xs line-clamp-2">
                  {article.description}
                </p>
                <span className="text-[10px] uppercase tracking-wide text-neutral-500 mt-2">
                  2025-10-12
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

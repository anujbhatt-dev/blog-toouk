"use client"
import React from "react";
import useCategoryState from "@/store/categoryStore";
import { demoArticles } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { PostSchema } from "@/utils/types";


export default function ArticlesGrid({posts}:{posts:PostSchema[]}) {
  const { selected } = useCategoryState();

  const filtered =
    selected === "all"
      ? posts
      : posts.filter((a) => a.category === selected);




  return (
    <div className="w-full my-10">
      {filtered.length === 0 ? (
        <p className="text-neutral-300 text-sm text-center h-[60vh] bg-zinc-900/40 rounded-lg flex justify-center items-center">
          No articles available for this category
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6  gap-6">
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
                <p className="text-neutral-300 text-xs line-clamp-2">
                  {article.description}
                </p>
                <span className="text-[10px] uppercase tracking-wide text-neutral-500 mt-2">
                  {article.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

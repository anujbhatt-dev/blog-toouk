"use client";
import React from "react";

export default function ArticlesGridSkeleton() {
  // Generate an array of placeholder items (9 cards)
  const placeholders = Array.from({ length: 3 });

  return (<>
    <div className="w-full my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((_, i) => (
            <div
            key={i}
            className="p-4 rounded-xl overflow-hidden shadow bg-neutral-900/30 animate-pulse"
            >
            <div className="w-full h-40 bg-neutral-800 rounded-xl" />
            <div className="py-4 flex flex-col gap-3 mt-4">
              <div className="w-24 h-5 bg-neutral-800 rounded-lg" />
              <div className="w-3/4 h-6 bg-neutral-800 rounded" />
              <div className="w-full h-4 bg-neutral-800 rounded" />
              <div className="w-5/6 h-4 bg-neutral-800 rounded" />
              <div className="w-16 h-3 bg-neutral-700 rounded mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

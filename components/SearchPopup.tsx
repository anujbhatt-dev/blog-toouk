"use client"
import { useSearchStore } from '@/store/searchStore'
import { fetchPosts } from '@/utils/data'
import { IconX } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ArticlesGrid from './ArticlesGrid'
import { PostSchema } from '@/utils/types'

export default function SearchPopup() {
  const { toggleSearch, isSearchOpen } = useSearchStore()
  const [data, setData] = useState<PostSchema[] | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    async function fetchPostsData() {
      const posts = await fetchPosts()
      setData(posts)
    }
    fetchPostsData()
  }, [])

  // Prevent rendering until mounted (avoids SSR hydration errors)
  if (!mounted || !isSearchOpen ) return null

  return createPortal(
    <div className="fixed inset-0 w-full h-full bg-black/80 z-50 flex justify-center items-center">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={() => toggleSearch()}></div>

      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ scale: 0.4, opacity: 0, top: -200, left: 300 }}
        animate={{ scale: 1, opacity: 1, top: 0, left: 0 }}
        className="w-full h-2/3 max-w-md lg:max-w-5xl bg-[#020826] border border-gray-800 rounded-lg overflow-y-auto relative no-scrollbar text-white"
      >
        {/* Search input + close button */}
        <div className="flex justify-between items-center py-2 px-2 sticky top-0 bg-[#020826] border-b border-gray-800">
          <input
            type="text"
            className="w-full h-10 rounded-lg p-4 focus:outline-none text-white bg-[#0a0f1a] placeholder-gray-500"
            placeholder="What are you searching for?"
          />
          <button
            onClick={() => toggleSearch()}
            className="text-gray-400 bg-[#0a0f1a] border border-gray-700 px-3 rounded p-1 text-[10px] mr-2 cursor-pointer"
          >
            <IconX className="h-3 w-3" />
          </button>
        </div>

        {/* Search results */}
        <div className="p-4 flex flex-col gap-3">
          {data && <ArticlesGrid posts={data} />}
        </div>
      </motion.div>
    </div>,
    document.body // 👈 render directly to <body>
  )
}

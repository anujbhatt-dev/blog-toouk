"use client";

import useCategoryState from "@/store/categoryStore";
import { IconBrandTwitter, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { data, selected, setCategory, setData } = useCategoryState();

  return (
    <footer className="w-full text-neutral-400 border-t border-white/10 ">
      <div className="mx-auto px-2 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Logo / Brand */}
        <div>
          <h3 className="text-white text-xl font-semibold flex items-center gap-4">
           <Image alt="" src={"/toouk-mini-logo.png"} width={20} height={20} className="h-5 w-auto" />    
            Toouk 
          </h3>
          <p className="mt-3 text-sm text-neutral-500">
           Your Market. Your Wallet. 
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          {
            data.slice(1).map((item)=> <Link href={item.slug} className="hover:text-white transition">{item.name}</Link>)
          }        
        </div>

        {/* Right - Socials */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
              <IconBrandTwitter className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-white transition">
              <IconBrandInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-white transition">
              <IconBrandGithub className="w-6 h-6" />
            </Link>
          </div>     
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Toouk. All rights reserved.
      </div>
    </footer>
  );
}
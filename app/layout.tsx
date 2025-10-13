import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/component/Provider";
import Categories from "@/component/Categories";
import Hero from "@/component/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toouk Marketplace Blogs",
  description: "Toouk Market Blogs",
};

export default  function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-6 lg:mx-6 pt-18`}
      >
        <Provider>
          <Hero />
          <Categories />
          {children}
        </Provider>
      </body>
    </html>
  );
}

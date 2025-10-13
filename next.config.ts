import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // The protocol (e.g., 'https', 'http')
        hostname: 'tooukmarket.wordpress.com', // The hostname of the image source
      },
    ],
  },
};

export default nextConfig;

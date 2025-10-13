import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // The protocol (e.g., 'https', 'http')
        hostname: 'api-blog.toouk.market', // The hostname of the image source
      },
    ],
  },
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000', // Ensure this matches the port your backend serves images from
        pathname: '/images/**', // Ensure this matches the path your backend serves images from
      },
    ],
  },
  // You can add other Next.js configurations here if needed
  // For example:
  // reactStrictMode: true,
};

export default nextConfig;
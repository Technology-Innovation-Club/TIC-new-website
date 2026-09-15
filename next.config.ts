import type { NextConfig } from "next";
// some next config

const nextConfig: NextConfig = {
  allowedDevOrigins: ['TICnewwebsite.localhost', '*.TICnewwebsite.localhost'],
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

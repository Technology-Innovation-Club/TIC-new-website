import type { NextConfig } from "next";
// some next config

const nextConfig: NextConfig = {
  allowedDevOrigins: ['TIC-new-website.localhost', '*.TIC-new-website.localhost'],
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

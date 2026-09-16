import type { NextConfig } from "next";
// some next config

const nextConfig: NextConfig = {
  allowedDevOrigins: ['techinnovationclub.localhost', '*.techinnovationclub.localhost'],
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: { root: process.cwd() },
  devIndicators: false,
  experimental: { cpus: 2 },
};

export default nextConfig;

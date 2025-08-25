import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    root: '/Users/prapul/Documents/GitHub/mealzfit'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

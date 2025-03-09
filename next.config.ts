import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf|glb)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;

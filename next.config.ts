import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static HTML export
  output: "export",

  // Trailing slash needed for static export URLs
  trailingSlash: true,

  // Optional: for images to work when exporting static HTML
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

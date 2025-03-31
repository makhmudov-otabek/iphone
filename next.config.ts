import type { NextConfig } from "next";
const withVideos = require("next-videos");

const nextConfig: NextConfig = withVideos({
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox",
  },
});

export default nextConfig;

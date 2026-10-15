
import type { NextConfig } from "next";

/**
 * Co-Founder Elite AI — Next.js Configuration
 *
 * This configuration establishes safe defaults for the website.
 * Security headers will be added in a later security step.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

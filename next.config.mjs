/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Hostinger cannot reliably run Next.js's on-demand image optimizer
    // (/_next/image), so fresh variants 404/500 and portraits render blank.
    // Serve images as-is; Hostinger's CDN still compresses them at the edge.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

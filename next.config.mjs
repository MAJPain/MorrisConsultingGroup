/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The old /advisory landing (six-practice architecture) is retired; its
  // content now lives on /how-we-engage. Permanently redirect so inbound links
  // resolve to the new page. `permanent: true` emits a 308 (the permanent
  // redirect that preserves method — SEO-equivalent to a 301).
  async redirects() {
    return [
      {
        source: "/advisory",
        destination: "/how-we-engage",
        permanent: true,
      },
    ];
  },
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

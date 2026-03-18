/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output export for development
  // output: 'export', // Comment out for development
  images: {
    // Disable Next's Image Optimization API when exporting static site
    unoptimized: true,
    domains: ["i.imgur.com"],
  },
};

export default nextConfig;

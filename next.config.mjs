/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // static export for `next build` -> generates `out/`
  output: 'export',
  images: {
    // Disable Next's Image Optimization API when exporting static site
    unoptimized: true,
    domains: ["i.imgur.com"],
  },
};

export default nextConfig;

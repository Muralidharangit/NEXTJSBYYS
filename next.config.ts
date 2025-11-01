import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});



const nextConfig = {
  reactStrictMode: true,

  compress: true, // ✅ Gzip compression for faster load
  swcMinify: true, // ✅ Faster JS compilation/minification
  poweredByHeader: false, // ✅ Hide "X-Powered-By: Next.js" header

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1200],
    imageSizes: [220, 348, 450, 600, 800],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tnswp.com",
        pathname: "/**",
      },
    ],
  },

 experimental: {
  esmExternals: true,
},

  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint during build to speed up production
  },
} satisfies import("next").NextConfig;

export default withBundleAnalyzer(nextConfig);

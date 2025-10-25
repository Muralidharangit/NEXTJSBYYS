/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce Next.js behavior that checks for common issues (recommended)
  reactStrictMode: true,

  images: {
    // List of external domains from which Next.js is allowed to optimize images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        // pathname: '/**', // Optional: restrict to a specific path if needed
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "tnswp.com",
      },
    ],

    // Uncomment this line to explicitly enable modern image formats
    // formats: ["image/avif", "image/webp"],
  },

  // Configuration for ESLint
  eslint: {
    // WARNING: Setting this to 'true' skips linting during next build.
    // It's recommended to fix all errors and remove this line for production.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

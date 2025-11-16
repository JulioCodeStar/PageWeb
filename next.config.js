/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co", "res.cloudinary.com", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "facebook.com"
      },
      {
        protocol: "https",
        hostname: "picsum.dev"
      }
    ],
  },
};

module.exports = nextConfig;
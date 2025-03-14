/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "xsgames.co",
        hostname: "plus.unsplash.com",

      },
    ],
  },
};

export default nextConfig;

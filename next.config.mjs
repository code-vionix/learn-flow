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
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
           hostname: "s3-alpha-sig.figma.com",
      },{
                   protocol: "https",   hostname: "xsgames.co",
      
      }
    ],
  },
};

export default nextConfig;

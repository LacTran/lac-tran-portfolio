import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placeholder-image-service.onrender.com',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;

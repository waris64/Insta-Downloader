import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.instagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.insta-downloader-kappa.vercel.app' }],
        destination: 'https://insta-downloader-kappa.vercel.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

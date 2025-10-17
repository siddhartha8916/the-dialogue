/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- this enables static export

  images: {
    unoptimized: true, // required for static export if using next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;

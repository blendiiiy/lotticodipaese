/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lotticodipaese.com',
        pathname: '/**',
      },
    ],
    // Allow unoptimized images if needed
    unoptimized: false,
  },
}

module.exports = nextConfig


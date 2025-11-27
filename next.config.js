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
  eslint: {
    // Disable ESLint during builds to avoid circular structure errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds (optional, only if needed)
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig


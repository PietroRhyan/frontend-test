/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@pqina/pintura', '@pqina/react-pintura'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'looplex-front-test.s3.sa-east-1.amazonaws.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

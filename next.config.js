/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // goodbotai.tech/bitcoinhub used to 404. BitcoinHub lives on its own subdomain.
  // Temporary (307) so the target can change later without browsers caching it.
  async redirects() {
    return [
      { source: '/bitcoinhub', destination: 'https://bitcoinhub.goodbotai.tech', permanent: false },
      { source: '/bitcoinhub/:path*', destination: 'https://bitcoinhub.goodbotai.tech/:path*', permanent: false },
    ]
  },
}

module.exports = nextConfig

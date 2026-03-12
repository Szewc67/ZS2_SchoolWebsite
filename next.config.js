/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/dziennik',
        destination: 'https://uonetplus.vulcan.net.pl/powiatlancucki/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false
      }
    }

    return config
  },
  headers: async () => {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'content-type',
            value: 'application/xml'
          }
        ]
      }
    ]
  },
  poweredByHeader: false
}

module.exports = nextConfig

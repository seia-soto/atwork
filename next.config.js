const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.ANALYZE
})

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
  poweredByHeader: false,
  trailingSlash: true
}

module.exports = withPlugins([
  [withBundleAnalyzer]
], nextConfig)

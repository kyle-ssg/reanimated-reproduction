const withOffline = require('next-offline')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
})
const withSourceMaps = require('@zeit/next-source-maps')

const nextConfig = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // next-offline options
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  // buildId, dev, isServer, defaultLoaders, webpack
  webpack: (config, { dev }) => {
    const base = dev
      ? require('./.webpack/webpack.config.dev')
      : require('./.webpack/webpack.config.prod')
    if (base.plugins) {
      config.plugins = config.plugins.concat(base.plugins)
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
}

module.exports = withFonts(
  withSourceMaps(withImages(withBundleAnalyzer(nextConfig))),
)

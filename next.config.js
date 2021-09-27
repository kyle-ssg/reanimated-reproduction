const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'react-native-safe-area-context',
  'react-native-svg',
  'react-native-reanimated',
])
const withOffline = require('next-offline')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
})
const withSourceMaps = require('@zeit/next-source-maps')

const nextConfig = {
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

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'lottie-react-native': 'react-native-web-lottie',
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]

    return config
  },
}

module.exports = withPlugins(
  [withTM, withFonts, withSourceMaps, withBundleAnalyzer],
  nextConfig,
)

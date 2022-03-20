const path = require('path')
const withTM = require('next-transpile-modules')([
    // 'react-native-safe-area-context', REACT_NATIVE_WEB
    // 'react-native-svg',
    // 'react-native-reanimated',
])

const withBundleAnalyzer = process.env.BUNDLE_ANALYZE?  require('@next/bundle-analyzer')({
    enabled: true,
}) : ()=> ({})

const nextConfig = async (phase, { defaultConfig }) => {
    const nextConfig = {
        eslint: {
            // Warning: Dangerously allow production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
        swcMinify: true,
        trailingSlash: true,
        productionBrowserSourceMaps: true,
        typescript: {
            ignoreDevErrors: true,
            ignoreBuildErrors: true
        },
        webpack: (config, { dev }) => {
            const base = dev
              ? require('./.bin/.webpack/webpack.config.dev')
              : require('./.bin/.webpack/webpack.config.prod')
            if (base.plugins) {
                config.plugins = config.plugins.concat(base.plugins)
            }

            config.resolve.modules = [path.resolve(__dirname), 'node_modules']

            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                // REACT_NATIVE_WEB
                // 'lottie-react-native': 'react-native-web-lottie',
                // Transform all direct `react-native` imports to `react-native-web`
                // 'react-native$': 'react-native-web',
                // 'react$': path.resolve(path.resolve(__dirname), 'node_modules/react'),
            }

            config.resolve.extensions = [
                // '.web.js', REACT_NATIVE_WEB
                // '.web.ts',
                // '.web.tsx',
                ...config.resolve.extensions
            ]

            return config
        }
    }
    return withBundleAnalyzer(
      withTM(
        nextConfig
      )
    )
}

module.exports = nextConfig

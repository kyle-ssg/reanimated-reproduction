const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
});
const withSourceMaps = require('@zeit/next-source-maps')();


const nextConfig = {
    // target: 'serverless',
    // next-offline options
    workboxOpts: {
        runtimeCaching: [
            // {
            //     urlPattern:  new RegExp('^*.png'),
            //     handler: 'CacheFirst',
            //     options: {
            //         cacheName: 'cloudcms',
            //         expiration: {
            //             maxEntries: 150,
            //             maxAgeSeconds: 60 * 60, // 1 hour
            //         },
            //         cacheableResponse: {
            //             statuses: [0, 200, 304],
            //         },
            //     },
            // },
            {
                urlPattern:  new RegExp('^https*'),
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offline',
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 60 * 60, // 1 hour
                    },
                    cacheableResponse: {
                        statuses: [0, 200, 304],
                    },
                },
            },
        ],
    },

    // buildId, dev, isServer, defaultLoaders, webpack
    webpack: (config, { dev }) => {
        const base = dev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');
        if (base.plugins) {
            config.plugins = config.plugins.concat(base.plugins);
        }
        return config;
    },
};

module.exports = withSourceMaps(
    withOffline(
        withBundleAnalyzer(
            withSass(
                withCSS(nextConfig),
            ),
        ),
    ),
);

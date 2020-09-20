// webpack.config.prod.js
// Watches + deploys files minified + cachebusted
const webpack = require('webpack');

module.exports = {
    plugins: require('./plugins').concat([
        new webpack.DefinePlugin({
            __DEV__: false,
        }),
    ]),
    module: {
        rules: require('./loaders')
            .concat([]),
    },
};

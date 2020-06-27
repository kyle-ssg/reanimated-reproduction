const webpack = require('webpack');



module.exports = [
    new webpack.DefinePlugin(require('../.env/environment-variables')),
    // Fixes warning in moment-with-locales.min.js
    // Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment\/min$/),

];

// webpack.config.prod.js
// Watches + deploys files minified + cachebusted
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const src = path.join(__dirname, '../src') + '/';

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/js/main.js',
    ],

    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].[hash].js'
    },

    plugins: require('./plugins')
        .concat([

                //Clear out build folder
                new CleanWebpackPlugin(['build'], { root: path.join(__dirname, '../') }),

                //Ensure NODE_ENV is set to production
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
                }),

                //reduce filesize
                new webpack.optimize.OccurrenceOrderPlugin(),

                //pull inline styles into cachebusted file
                new ExtractTextPlugin({filename: "style.[hash].css", allChunks: true }),

                //Uglify
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),

            ]
            //for each page, produce a html file with base assets
                .concat(require('./pages').map(function (page) {
                    console.log(page);
                    return new HtmlWebpackPlugin({
                            filename: page + '.html', //output
                            template: './src/' + page + '.html', //template to use
                            "assets": { //add these script/link tags
                                "client": "[hash].js",
                                "style": "style.[hash].css"
                            }
                        }
                    )
                }))
        ),

    module: {
        loaders: require('./loaders').concat([
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
            }
        ])
    }
}
;

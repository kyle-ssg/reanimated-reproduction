// webpack.config.watch.js
// Watches + deploys files non minified
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const src = path.join(__dirname, '../src') + '/';

module.exports = {
    devtool: 'cheap-eval-source-map',

    entry: [
        './src/main.js',
    ],

    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },

    plugins: require('./plugins')
        .concat([

                //pull inline styles into cachebusted file
                new ExtractTextPlugin("style.css", { allChunks: true }),
            ]
            //for each page, produce a html file with base assets
                .concat(require('./pages').map(function (page) {
                    console.log(page);
                    return new HtmlWebpackPlugin({
                            filename: page + '.html', //output
                            template: './src/' + page + '.html', //template to use
                            "assets": { //add these script/link tags
                                "client": "[name].js",
                                "style": "[name].css"
                            }
                        }
                    )
                }))
        ),

    module: {
        loaders: require('./loaders').concat([
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ])
    }
}
;

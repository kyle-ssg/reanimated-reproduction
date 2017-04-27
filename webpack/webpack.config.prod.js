// webpack.config.prod.js
// Watches + deploys files minified + cachebusted

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
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
				new CleanWebpackPlugin(['build'], {root: path.join(__dirname, '../')}),

				// Reduce lodash size
				new LodashModuleReplacementPlugin(),

				//reduce filesize
				new webpack.optimize.OccurrenceOrderPlugin(),

				//pull inline styles into cachebusted file
				new ExtractTextPlugin({filename: "style.[hash].css", allChunks: true}),

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
				loader: 'babel-loader',
				test: /\.js?/,
				exclude: /node_modules/,
				query: {
					plugins: ['lodash']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
			}
		])
	}
}
;

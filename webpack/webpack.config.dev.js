// webpack.config.dev.js
var path = require('path')
var src = path.join(__dirname, '../src') + '/';
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'react-hot-loader/patch',
		'./src/js/main.js',
	],
	output: {
		path: '/',
		publicPath: 'http://localhost:3000/build/',
		filename: '[name].js'
	},
	plugins: require('./plugins').concat([
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]),
	module: {
		loaders: require('./loaders')
			.concat([
				{
					test: /\.js?/,
					exclude: /node_modules/,
					loaders: ['babel-loader']
				},
				{
					test: /\.scss$/,
					loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
				}
			])
	},
};
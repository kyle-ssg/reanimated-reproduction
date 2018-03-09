const path = require('path')
const pages = require('./pages');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = [

	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery"
	}),

	// Fixes warning in moment-with-locales.min.js
	// Module not found: Error: Can't resolve './locale' in ...
	new webpack.IgnorePlugin(/\.\/locale$/),
	//Copy static content
	new CopyWebpackPlugin([
		{from: './src/images', to: path.join(__dirname, '../build/images')},
		{from: './src/fonts', to: path.join(__dirname, '../build/fonts')}
	].concat(pages.map(function (p) {
		return {from: './src/' + p + '.html'}; //copy all pages
	})))
];

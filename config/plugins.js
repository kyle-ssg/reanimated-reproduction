const path = require('path')
const pages = require('./pages');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    //Copy static content
    new CopyWebpackPlugin([
        { from: './src/images', to: path.join(__dirname, '../build/images') },
        { from: './src/fonts', to: path.join(__dirname, '../build/fonts') }
    ].concat(pages.map(function (p) {
        return { from: './src/' + p + '.html' }; //copy all pages
    })))
];
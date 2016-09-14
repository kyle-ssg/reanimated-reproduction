// webpack.config.dev.js
var path = require('path')
var src = path.join(__dirname, '../src') + '/';
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:80',
        'webpack/hot/only-dev-server',
        './src/js/main.js',
    ],
    output: {
        publicPath:'/',
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },
    plugins: require('./plugins')
        .concat(require('./pages').map(function (page) {
            console.log(page);
            return new HtmlWebpackPlugin({
                    filename: page + '.html', //output
                    template: './src/' + page + '.html', //template to use
                    "assets": { //add these script/link tags
                        "client": "./main.js"
                    }
                }
            )
        })),
    module: {
        loaders: require('./loaders')
            .concat([
                {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'postcss', 'sass']
                }
            ])
    },
    devServer: {
        contentBase: './build',
        publicPath: '/',
        historyApiFallback: true,
        hot: true
    }
};
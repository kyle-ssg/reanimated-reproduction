//Uses webpack dev + hot middleware
var webpack = require('webpack');
var config = require('../../webpack/webpack.config.dev');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);

module.exports = function (app) {
	const middleware = webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
		contentBase: 'src',
		stats: {colors: true},
	});
	app.use(middleware);

	app.use(webpackHotMiddleware(compiler, {
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000
	}));
	return middleware;
};

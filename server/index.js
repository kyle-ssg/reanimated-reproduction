const bodyParser = require('body-parser');
const api = require('./api');
const express = require('express');
const spm = require('./middleware/single-page-middleware');
const webpackMiddleware = require('./middleware/webpack-middleware');
const isDev = process.env.NODE_ENV !== 'production';
const app = express();
const port = process.env.PORT || 8080;

app.use('/api', api());

if (isDev) { // Serve files from src directory and use webpack-dev-server
  console.log('Enabled Webpack Hot Reloading');
  webpackMiddleware(app);
} else {
  console.log('Running production mode');
}

app.use(express.static('build'));
app.set('views', 'build/');

app.use(spm);

// parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.resolve('build/index.html'));
});

app.listen(port, function () {
  console.log('Server listening on: ' + port);
});

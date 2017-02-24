const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(require('./middleware/single-page-middleware'));
app.use(express.static('build'));

app.listen(port, function () {
	console.log('express-handlebars example server listening on: ' + port);
});

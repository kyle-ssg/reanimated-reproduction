/* eslint no-console: 0 */
const bodyParser = require('body-parser');
const fetch = require('isomorphic-unfetch');

const apps = {};
module.exports = {
  mock(port, url, method, query, body, requestBody, headers = {}) {
    const app = apps[port];
    method = method.toLowerCase();
    app[method.toLowerCase()](url, (req, res) => {
      console.log(req.body);
      setTimeout(() => {
        res.json(body || req.body);
      }, 500);
    });
    if (query) {
      const params = Object.keys(query).map((key) => {
        return `${key}=${query[key]}`;
      }).join('&');

      url = `${url}?${params}`;
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      method,
    };
    if (method !== 'get') {
      options.body = JSON.stringify(requestBody || {});
    }
    return () => {
      console.log(`Testing http://localhost:${port}${url}`);
      return fetch(`http://localhost:${port}${url}`, options).then(res => res.json());
    };
  },
  setup(port) {
    const serverPort = process.env.MOCK_SERVER ? port : port + 1;
    const app = require('express')();
    const cors = require('cors');

    app.use(cors());

    app.use(bodyParser.json());

    apps[port] = app;

    return new Promise((resolve) => {
      app.listen(serverPort, () => {
        console.log('SERVER LISTENING', serverPort);
        resolve();
      });

      app.get('/', (req, res) => {
        console.log(new Date());
        res.json({ status: 'OK', date: new Date() });
      });

      app.post('/', (req, res) => {
        console.log(req.body);
        res.json({ status: 'OK', date: new Date() });
      });
    });
  },
};

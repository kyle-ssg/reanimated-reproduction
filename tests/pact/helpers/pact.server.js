const app = require('express')();

module.exports = {
    mock(url, method, body, requestBody, headers = {}) {
        method = method.toLowerCase();
        app[method.toLowerCase()](url, (req, res) => {
            res.json(body);
        });
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
        return () => fetch(global.api + url, options).then(res => res.json());
    },
    setup(port) {
        return new Promise((resolve) => {
            app.listen(process.env.MOCK_SERVER ? port : port + 1, () => {
                console.log('SERVER LISTENING', port);
                resolve();
            });

            app.get('/', (req, res, next) => {
                res.json({ status: 'OK' });
            });
        });
    },
};
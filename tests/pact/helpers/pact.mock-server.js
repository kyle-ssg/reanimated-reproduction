const app = require('express')();


export default (url, method, body, headers = {}) => {
    method = method.toLowerCase();
    app[method.toLowerCase()](url, (req, res) => {
        console.log('MOCK SERVER RETURNING', body);
        res.json(body);
    });
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...headers,
        },
    };
    if (method !== 'get') {
        options.body = body || {};
    }
    return () => fetch(global.api + url, options).then(res => res.json());
};

export const setup = port => new Promise((resolve) => {
    app.listen(port + 1, resolve);
});

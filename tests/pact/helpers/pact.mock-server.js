const app = require('express')();


export default (url, method, body, requestBody, headers = {}) => {
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
};

export const setup = port => new Promise((resolve) => {
    console.log('SERVER LISTENING', port)
    app.listen(port + 1, resolve);
});

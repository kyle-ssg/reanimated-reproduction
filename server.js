const { join } = require('path');
const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

// Deault 1 hour ttl
const ssrCache = (ttl) => {
    return cacheableResponse({
        ttl, // 1hour
        get: async ({ req, res, pagePath, queryParams }) => {
            console.log('Caching', req.url);
            return ({
                data: await app.renderToHTML(req, res, pagePath, queryParams),
            });
        },
        send: ({ data, res }) => res.send(data),
    });
};

app.prepare().then(() => {
    const server = express();

    const sw = join(__dirname, '.next/service-worker.js');
    const favicon = join(__dirname, '/static/images/favicon.ico');

    server.get('/service-worker.js', (req, res) => {
        app.serveStatic(req, res, sw);
    });

    server.get('/favicon.ico', (req, res) => {
        app.serveStatic(req, res, favicon);
    });


    const homeCache = ssrCache(1000 * 60 * 15);
    server.get('/', (req, res) => {
        const queryParams = { id: req.params.id };
        const pagePath = '/';
        return homeCache({ req, res, pagePath, queryParams });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

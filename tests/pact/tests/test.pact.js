const get = require('lodash/get');

const res = {
    getData(name) {
        const body = get(res, `${name}.body`);
        return body && body(v => v);
    },
    products: {
        path: '/products',
        get: {
            state: 'Bar exists',
            description: '/product',
            body: like => ([
                {
                    id: 1,
                    title: like('bar'),
                },
                {
                    id: 2,
                    title: like('bar'),
                },
            ]),
        },
    },
    createFoo: {
        path: '/product',
        post: {
            state: 'Bar exists',
            description: '/product',
            body: like => ({
                id: 1,
                title: like('bar'),
            }),
            requestBody: (like) => ({
                title: like('bar'),
            }),
        },
    },
    product: {
        path: '/product/1',
        get: {
            state: 'Bar exists',
            description: '/product/1',
            body: like => ({
                id: 1,
                title: like('bar'),
            }),
        },
        put: {
            state: 'Bar exists',
            description: '/product/1',
            body: like => ({
                id: 1,
                title: like('bar'),
            }),
        },
    },
};

module.exports = res;

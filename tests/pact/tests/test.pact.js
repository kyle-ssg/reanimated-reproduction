const get = require('lodash/get');

const res = {
    getData(name) {
        const body = get(res, `${name}.body`);
        return body && body(v => v);
    },
    foos: {
        path: '/foos',
        get: {
            state: 'Bar exists',
            description: '/foo',
            body: like => ([
                {
                    id: 1,
                    foo: like('bar'),
                },
            ]),
        },
    },
    createFoo: {
        path: '/foo',
        post: {
            state: 'Bar exists',
            description: '/foo',
            body: like => ({
                id: 1,
                foo: like('bar'),
            }),
            requestBody: (like) => ({
                foo: like('bar'),
            }),
        },
    },
    foo: {
        path: '/foo/1',
        get: {
            state: 'Bar exists',
            description: '/foo/1',
            body: like => ({
                id: 1,
            }),
        },
        put: {
            state: 'Bar exists',
            description: '/foo/1',
            body: like => ({
                id: 1,
            }),
        },
    },
};

module.exports = res;

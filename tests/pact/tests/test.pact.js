const get = require('lodash/get');

const res = {
    getData(name) {
        const body = get(res, `${name}.body`);
        return body && body((v) => v)
    },
    foo: {
        path: '/foo',
        get: {
            state: 'Bar exists',
            description: '/foo',
            body: (like) => ({
                'results': [
                    {
                        foo: like('bar'),
                    },
                ],
            }),
        },
    },
};

module.exports = res;

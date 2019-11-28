const get = require('lodash/get');

var res = {
    getData(name) {
        const body = get(res, `${name}.body`);
        return body && body((v)=>v)
    },
    racecards: {
        path: '/dummy',
        get: {
            state: "Racecards exist",
            description: '/racecards',
            body: (like) => ({
               foo: like("bar")
            }),
        },
    },
};

module.exports = res;

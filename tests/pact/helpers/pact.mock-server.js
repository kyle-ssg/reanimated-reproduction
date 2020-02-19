/* eslint no-console: 0 */
const map = require('lodash/map');
const configs = require('../config.pact');


const { mock, setup } = require('./pact.server');


const fakeLike = v => v;

map(configs, (config) => {
    return setup(config.port)
        .then(() => {
            map(config.data, (tests) => {
                const { path: testsPath } = tests;
                map(tests, (test, method) => {
                    if (typeof test !== 'object') return;
                    const { body, requestBody, path: testPath } = test;
                    const path = testPath || testsPath;
                    console.log('Mocking', path, method, ' on ', config.port);
                    mock(config.port, path, method, null, body && body(fakeLike), requestBody && requestBody(fakeLike));
                });
            });
        });
});

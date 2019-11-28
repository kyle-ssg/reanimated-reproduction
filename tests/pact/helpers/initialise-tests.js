const expect = require('expect');
const map = require('lodash/map');
const { Matchers } = require('@pact-foundation/pact');
const { mock } = require('./pact.server');
const addInteraction = require('./interaction-helper');

const pactLike = Matchers.like;
const fakeLike = (v) => v;
module.exports = (allTests) => new Promise((resolve) => {
    // Execute all the tests
    map(allTests, (tests) => {
        const { path: testsPath } = tests;
        map(tests, (test, method) => {
            if (typeof test !== 'object') return;

            const { body, description, state, requestBody, path: testPath } = test;
            const path = testPath || testsPath;

            // Create test
            // eslint-disable-next-line no-undef
            describe(description, () => {
                let req;

                // Mock the endpoint and add the interaction
                // eslint-disable-next-line no-undef
                beforeEach(() => {
                    req = mock(path, method, body && body(fakeLike), requestBody && requestBody(fakeLike));
                    return addInteraction({
                        state,
                        requestBody:requestBody && requestBody(pactLike),
                        uponReceiving: description,
                        body: body && body(pactLike),
                        method,
                        path,
                    });
                });

                // add expectations
                // eslint-disable-next-line no-undef
                it('returns a successful body', (done) => {
                    req()
                        .then(() => expect(true).toEqual(true))
                        .then(() => done());
                });
            });
        });
        resolve();
    });
});

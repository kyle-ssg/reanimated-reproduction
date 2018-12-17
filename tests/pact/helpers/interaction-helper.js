const { Matchers: { like } } = require('@pact-foundation/pact');

module.exports = (uponReceiving, method, path, body, status = 200) => pact.addInteraction({
    uponReceiving,
    withRequest: {
        method,
        path,
    },
    willRespondWith: {
        status,
        body: like(body),
    },
});
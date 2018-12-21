const pact = require('@pact-foundation/pact-node');
const path = require('path');
require('dotenv').config();

if (process.env.PACT_BROKER) {
    const opts = {
        pactFilesOrDirs: [path.resolve(__dirname, '../../../pacts/boilerplate-web-boilerplate-api.json')],
        pactBroker: process.env.PACT_BROKER,
        pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
        pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
        tags: ['prod', 'test'],
        consumerVersion: `${process.env.CI_COMMIT_REF_NAME}.${(process.env.TRAVIS_BUILD_NUMBER) ? process.env.TRAVIS_BUILD_NUMBER : Math.floor(new Date() / 1000)}`,
    };

    pact.publishPacts(opts)
        .then(() => {
        })
        .catch((e) => {
        });
} else {
    console.log('Skipping pact publish, no PACT_BROKER env variable found!');
}

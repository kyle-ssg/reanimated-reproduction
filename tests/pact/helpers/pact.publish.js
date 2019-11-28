/* eslint no-console: 0 */
const pact = require('@pact-foundation/pact-node');
const path = require('path');
const config = require('../config.pact');

require('dotenv').config();

const dir = path.resolve(__dirname, `../../../pacts/${config.namespace}.json`);
if (process.env.PACT_BROKER) {
    const opts = {
        pactFilesOrDirs: [dir],
        pactBroker: process.env.PACT_BROKER,
        pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
        pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
        consumerVersion: `${process.env.CI_COMMIT_REF_NAME || 'local'}`,
    };

    pact.publishPacts(opts)
        .then(() => {
        })
        .catch(() => {
        });
} else {
    console.log('Skipping pact publish, no PACT_BROKER env variable found!');
}

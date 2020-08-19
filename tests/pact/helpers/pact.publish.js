/* eslint no-console: 0 */
const path = require('path');
const pact = require('@pact-foundation/pact-node');
require('dotenv').config();

if (process.env.PACT_BROKER) {
  const version = process.env.CI_COMMIT_REF_NAME.replace(/\//g, '-');
  const dir = path.resolve(process.cwd(), 'pacts');
  const opts = {
    pactFilesOrDirs: [dir],
    pactBroker: process.env.PACT_BROKER,
    pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
    pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
    consumerVersion: `${process.env.CI_COMMIT_REF_NAME || 'local'}`,
    tags: [`${version || 'local'}`],
  };

  pact.publishPacts(opts)
    .then(() => {
    })
    .catch(() => {
    });
} else {
  console.log('Skipping pact publish, no PACT_BROKER env variable found!');
}

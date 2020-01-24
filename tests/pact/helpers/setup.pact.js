// /* eslint no-console: 0 */
import fetch from 'isomorphic-unfetch';
import { Pact } from '@pact-foundation/pact';
import path from 'path';
import map from 'lodash/map'
import configs from '../config.pact';
import executeTests from './initialise-tests';

const mocha = require('mocha');

const before    = mocha.before;
const afterEach = mocha.afterEach;
const after     = mocha.after;


global.fetch = fetch;

const { setup: mockServer } = require('./pact.server');

require('dotenv').config();

map(configs, ({ port, data, consumer, provider }, i) => {
    configs[i].pact = new Pact({
        port,
        log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        spec: 2,
        cors: true,
        pactfileWriteMode: 'update',
        consumer,
        provider,
    });
    executeTests(data, port, configs[i].pact);
});

//
before((done) => {
    Promise.all(map(configs, (_, i) => {
        return Promise.all([
            configs[i].pact.setup(),
            mockServer(configs[i].port),
        ])
    })).then(() => done());
});
//
afterEach((done) => {
    // eslint-disable-next-line no-console
    console.log('verifying');
    Promise.all([
        // map(configs,( ) => {
        // }),
    ]).then(() => done());
});
//
after((done) => {
    // eslint-disable-next-line no-console
    console.log('pact complete');
    Promise.all([
        map(configs,({ pact }) => {
            return pact.finalize();
        }),
    ]).then(() => {
        done();
        process.exit();
    });
});

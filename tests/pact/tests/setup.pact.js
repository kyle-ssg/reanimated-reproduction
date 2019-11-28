// /* eslint no-console: 0 */
import fetch from 'isomorphic-unfetch';
import { Pact } from '@pact-foundation/pact';
import path from 'path';
import { consumer, provider } from '../config.pact';
import executeTests from '../helpers/initialise-tests';
import allTests from './index.pact';

const mocha = require('mocha');

const before    = mocha.before;
const afterEach = mocha.afterEach;
const after     = mocha.after;


global.fetch = fetch;

const { setup: mockServer } = require('../helpers/pact.server');

require('dotenv').config();

executeTests(allTests);
//
before((done) => {
    global.port = 3213;
    global.api = `http://localhost:${global.port}`;
    global.pact = new Pact({
        port: global.port,
        log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        spec: 2,
        cors: true,
        pactfileWriteMode: 'update',
        consumer,
        provider,
    });
    Promise.all([
        global.pact.setup(),
        mockServer(global.port),
    ])
        .then(() => done());
});
//
afterEach((done) => {
    // eslint-disable-next-line no-console
    console.log('verifying');
    global.pact.verify().then(() => done());
});
//
after((done) => {
    // eslint-disable-next-line no-console
    console.log('pact complete');
    global.pact.finalize().then(() => {
        done();
        process.exit();
    });
});

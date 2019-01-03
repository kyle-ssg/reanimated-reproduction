import fetch from 'node-fetch';
import { Pact } from '@pact-foundation/pact';
import path from 'path';

import executeTests from '../helpers/initialise-tests';
import allTests from './index.example.pact';

global.fetch = fetch;

const { setup: mockServer } = require('../helpers/pact.mock-server');

require('dotenv').config();

executeTests(allTests);

before((done) => {
    global.port = 9000;
    global.api = `http://localhost:${global.port}`;
    global.pact = new Pact({
        port: global.port,
        log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        spec: 2,
        cors: true,
        pactfileWriteMode: 'update',
        consumer: 'boilerplate-web'/* the name of your consumer */,
        provider: 'boilerplate-api', /* the name of your provider */
    });
    Promise.all([
        pact.setup(),
        mockServer(global.port),
    ])
        .then(() => done());
});

afterEach((done) => {
    console.log('verifying');
    pact.verify().then(() => done());
});

after((done) => {
    console.log('pact complete');
    pact.finalize().then(() => {
        done();
        process.exit();
    });
});
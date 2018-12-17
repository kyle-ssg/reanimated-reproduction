import fetch from 'node-fetch';

const path = require('path');
const { Pact } = require('@pact-foundation/pact');

global.fetch = fetch;

const { setup: mockServer } = require('./helpers/pact.mock-server');

before((done) => {
    global.port = 9001;
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
    Promise.all([mockServer(global.port), pact.setup()])
        .then(() => done());
});

afterEach((done) => {
    console.log('verifying');
    // done();
    pact.verify().then(() => done());
});

after((done) => {
    console.log('pact complete');
    // done();
    pact.finalize().then(() => done());
});

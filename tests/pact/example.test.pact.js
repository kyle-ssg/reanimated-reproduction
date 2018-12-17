import expect from 'expect';

import mock from './helpers/pact.mock-server';
import addInteraction from './helpers/interaction-helper';


//
describe('works', () => {
    let req;
    const method = 'GET';
    const path = '/example';
    const body = require('./data/example.data');

    beforeEach(() => {
        req = mock(path, method, body);
        addInteraction('a request to get settings', 'GET', path, body);
    });

    // add expectations
    it('returns a successful body', (done) => {
        req()
            .then(res => expect(res).toEqual(body))
            .then(() => done());
    });
});
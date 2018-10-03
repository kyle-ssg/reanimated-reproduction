// All tests are run from this file, that way we can ensure ordering
// of tests (without needing to resort to alphabetical filenaming)

const fork = require('child_process').fork;
process.env.PORT = 8081;

var server;
window = global;
const Project = require('../common/project');
const fetch = require('node-fetch');

global.testHelpers = require('./helpers');

module.exports = Object.assign(
    {
        before: (browser, done) => {
            server = fork('./server');
            server.on('message', () => {
                testHelpers.clearDown(browser,done);
            });
        },
        after: (browser, done) => {
            server.kill('SIGINT');
            testHelpers.clearDown(browser,done);
        }
    },
    // require('./foo.test'), // Main flow tests
);

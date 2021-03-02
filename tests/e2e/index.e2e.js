/* eslint no-console: 0 */
// All tests are run from this file, that way we can ensure ordering
// of tests (without needing to resort to alphabetical filenaming)
global.window = global;
require('dotenv').config();
const fork = require('child_process').fork;
const path = require('path');

const slackUpload = require('./slack-upload.test');

const SLACK_TOKEN = process.env.SLACK_TOKEN;
const slackUpload = SLACK_TOKEN && require('./slack-upload.test');
const slackMessage = false && require('../server/slack-client'); // to enable e2e slack messages change to SLACK_TOKEN && require
const fork = require('child_process').fork;

process.env.PORT = 8081;
const E2E_SLACK_CHANNEL = process.env.E2E_SLACK_CHANNEL;
const E2E_SLACK_CHANNEL_NAME = process.env.E2E_SLACK_CHANNEL_NAME;
const CI_COMMIT_MESSAGE = process.env.CI_COMMIT_MESSAGE && process.env.CI_COMMIT_MESSAGE.replace(/\n/g, '');
const CI_COMMIT_REF_NAME = process.env.CI_COMMIT_REF_NAME;
let server;

const Project = require('../common/project');
const fetch = require('node-fetch');
global.testHelpers = require('./helpers');

const formatCommit = function () {
  if (CI_COMMIT_MESSAGE) {
    return `\nBranch:${CI_COMMIT_REF_NAME}\nCommit: '${CI_COMMIT_MESSAGE}'`;
  }
  return '\nBranch: Local' + "\nCommit: '...'";
};

const sendSuccess = function () {
  if (slackMessage) {
    console.log('SENDING SLACK MESSAGE');
    return slackMessage(`Tests Passed!${formatCommit()}`, E2E_SLACK_CHANNEL_NAME);
  }
  return Promise.resolve();
};
const clearDown = function (browser, done) {
  done();
};

const sendFailure = (browser, done, request, error) => {
  const lastRequest = request && request.value ? JSON.parse(request.value) : 'No last request';
  const lastError = error && error.value ? JSON.parse(error.value) : 'No last error';
  console.log('Last request:', lastRequest);
  console.log('Last error:', lastError);
  browser.getLog('browser', (logEntries) => {
    logEntries.forEach((log) => {
      console.log(`[${log.level}] ${log.message}`);
    });
    browser
      .source((result) => {
        // Source will be stored in result.value
        console.log(result && result.value);
        if (SLACK_TOKEN && E2E_SLACK_CHANNEL && slackMessage) {
          const uri = path.join(__dirname, 'screenshot.png');
          browser.saveScreenshot(uri, () => {
            slackUpload(uri, `E2E for Bullet Train Failed. ${formatCommit()}\n\`\`\`${JSON.stringify({
              request: lastRequest,
              error: lastError,
            }, null, 2).replace(/\\/g, '')}\`\`\``, E2E_SLACK_CHANNEL, 'Screenshot')
              .then(done);
          });
          return;
        }
        done();
      });
  });
};

let testsFailed;

const exitTests = (browser, done) => {
  if (process.env.BRK) return;
  browser.end();
  done();
  server.kill('SIGINT');
  process.exit(testsFailed ? 1 : 0);
};

// Tests unexpected terminated i.e. Ctrl+c
process.on('SIGINT', () => {
  if (!server.killed) server.kill('SIGINT');
  process.exit(2);
});

module.exports = Object.assign(
  {
    before: (browser, done) => {
      if (slackMessage) {
        slackMessage(`Running tests.${formatCommit()}`, E2E_SLACK_CHANNEL_NAME);
      }
      server = fork('./server');
      server.on('message', () => {
        clearDown(browser, process.env.PAUSE ? null : done);
      });
    },
    afterEach: (browser, done) => {
      if (browser.currentTest.results.errors || browser.currentTest.results.failed) {
        testsFailed = true;
        if (SLACK_TOKEN && browser.sessionId) {
          browser
            .useCss()
            .pause(5000) // Workaround since waitForElementIsVisible with abortOnFailure set to false doesnt actually work https://github.com/nightwatchjs/nightwatch/issues/1493
            .isVisible('#e2e-error', (result) => {
              // There is a chance e2e request will not be present if tests failed on another website i.e. mailinator
              if (result.status !== -1) {
                browser.getText('#e2e-error', (error) => {
                  browser.getText('#e2e-request', (request) => {
                    sendFailure(browser, done, request, error);
                  });
                });
              } else {
                sendFailure(browser, done);
              }
            });
        } else {
          sendFailure(browser, done);
        }
      } else {
        done();
      }
    },
    after: (browser, done) => {
      if (!testsFailed) {
        sendSuccess()
          .then(() => exitTests(browser, done));
        return;
      }

      exitTests(browser, done);
    },
  },
  require('./main.e2e'), // Main flow tests
);

module.exports = [
  {
    namespace: 'test-ui-test-api',
    consumer: 'test-ui',
    provider: 'test-api',
    port: 4000,
    data: require('./tests/test.pact'),
  },
];

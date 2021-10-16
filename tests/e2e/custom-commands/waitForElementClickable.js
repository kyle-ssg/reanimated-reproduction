module.exports.command = function(selector, timeout=5000) {
  this.expect.element(selector).enabled.before(timeout);
  this.perform(() => {
    // eslint-disable-next-line no-console
    console.log(`🖱️ Element clickable: <${selector}>`);
  });
  return this;
};

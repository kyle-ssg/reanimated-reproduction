const url = `http://localhost:${process.env.PORT || 3000}`;

module.exports = {
  clearDown(browser, done) {
    done();
  },
  byTestID: id => `[data-test="${id}"]`,
  loginAdmin: (browser)=> {
    browser
      .url(url) // visit the url
    browser.waitAndSet('[name="email"]',process.env.ADMIN_USERNAME); // wait for the sign up fields to show
    browser.waitAndSet('[name="password"]', process.env.ADMIN_PASSWORD); // wait for the sign up fields to show
    browser.waitAndClick(helpers.byTestID("jsLogin"))
    browser.assert.urlEquals(`${url}/admin/organisations`)
  }
};

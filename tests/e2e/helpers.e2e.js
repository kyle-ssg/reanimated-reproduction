const url = `http://localhost:${process.env.PORT || 3000}`;
const GUID = function(append){
  let d = new Date().getTime();
  const uuid = "xxxx-xxxx-xxxx".replace(/[xy]/g, (c) => {
    // eslint-disable-next-line
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    // eslint-disable-next-line
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

  return append ? `${uuid}-${append}` : uuid;
};

const testHelpers = {
  clearDown(browser, done) {
    done();
  },
  byTestID: id => `[data-test="${id}"]`,
  byDataID: id => `[data-id="${id}"]`,
  logout:(browser)=> {
    browser.pause(1000);
    browser.waitAndClick(`[data-test="jsLogout"]`)
    browser.waitForElementVisible(`[data-test="login"]`)
    browser.url(`${url}`)
    browser.waitForElementVisible(`[data-test="login"]`)
  },
  loginAdmin: (browser, namespace, errorMock, errorUrl)=> {
      browser
        .url(`${url}?E2E=1&E2E_NAMESPACE=${namespace||"default"}`) // visit the url
      if(errorMock && testHelpers.enableErrors){
        browser.mockError({message:errorMock},errorUrl,namespace);
      }
     browser.waitAndSet('[name="email"]',process.env.ADMIN_USERNAME); // wait for the sign up fields to show
      browser.waitAndSet('[name="password"]', process.env.ADMIN_PASSWORD); // wait for the sign up fields to show
      browser.waitAndClick(helpers.byTestID("jsLogin"))
      browser.assert.urlEquals(`${url}/admin/organisations`)

  },
  enableErrors:true,
  loginUser: (browser,username,password)=> {
    browser
      .url(`${url}?E2E=1`) // visit the url
    browser.waitAndSet('[name="email"]',username); // wait for the sign up fields to show
    browser.waitAndSet('[name="password"]', password); // wait for the sign up fields to show
    browser.waitAndClick(helpers.byTestID("jsLogin"))
    browser.assert.urlContains(`${url}/organisations`)
  },
  clickMailinatorEmail: (browser, emailAddress) => {
    browser
      .pause(5000)
      .url('https://www.mailinator.com/v3/index.jsp?zone=public&query='+emailAddress+'#/#inboxpane')
      .useXpath()
      .waitForElementVisible("//*[contains(text(), 'Site Assist')]", 60000)
      .click("//*[contains(text(), 'Site Assist')]")
      .useCss()
      .waitForElementVisible('#msg_body')
      .pause(1000)
      .frame('msg_body')
  },
  navigateToEmailLink: (browser) => {
    browser
      .getAttribute('a', 'href', function(result) {
        browser.url(result.value);
      });
  },
};

module.exports = testHelpers;

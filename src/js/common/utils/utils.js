module.exports = Object.assign({}, require('./base/_utils'), {

  pages: { //parts of the site we wish to track as a page
    "HOME": {
      page: "Home"
    } //Home page shown
  },

  events: { //Events we wish to track, must include either userId or anonymousId for web
    "MESSAGE_SENT": function (bundleId) {
      return {
        event: "Message Sent",
        properties: {
          bundleId: bundleId
        },
        anonymousId: anonId
      };
    },
    "TOAST_TRIGGERED": function() {
      return {
        event: 'Toast Triggered!',
        properties: {
          also: 'you\'re trash'
        },
        anonymousId: anonId
      };
    },
    "LOGGED_IN": function(email) {
      return {
        event: 'Logged in!',
        properties: {
          email: email
        },
        anonymousId: anonId
      };
    }
  }
});

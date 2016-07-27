module.exports = _.assign({}, require('./base/_utils'), {

    pages: { //parts of the site we wish to track as a page
        "HOME": {
            page: "Home"
        } //Home page shown
    },

    events: { //Events we wish to track
        "MESSAGE_SENT": function (bundleId) {
            return {
                event: "Message Sent",
                properties: {
                    bundleId: bundleId
                }
            };
        }
    }
});
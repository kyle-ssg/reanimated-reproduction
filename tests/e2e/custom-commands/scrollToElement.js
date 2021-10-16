module.exports.command = function (id, time, callback) {
    this.waitForElementVisible(id, time || undefined)
        .moveToElement("css selector", id, 0, -1000)

    return this;
};

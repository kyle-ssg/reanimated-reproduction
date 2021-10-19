module.exports.command = function (id, time, callback) {
    this.waitForElementVisible(id, time || undefined)
        .moveToElement(id, 0, 0)
        .waitForElementClickable(id)
        .click(id);

    return this;
};

exports.command = function (id, val) {
    this.waitForElementVisible(id)
      .clearInput(id)
        .setValue(id, val);

    return this;
};

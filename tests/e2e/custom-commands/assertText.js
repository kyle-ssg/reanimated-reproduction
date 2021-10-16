 module.exports.command = async function (id, value) {
    const res = await this.getText(id);
    this.assert.equal(res.value, value);
    return this;
};

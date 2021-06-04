module.exports.command = async function (id) {
    const res = await this.getValue(id);
    this.assert.not.equal(res.value, "", "Element " + id + " expected value");
    return this;
};

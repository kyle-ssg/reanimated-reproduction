const templates = require('./templates/app-actions')
const writer = require('./helpers/writer')

module.exports = {
  writeCollection: async function (action, prefix, api) {
    const actionStrings = templates.action(action, prefix)
    const appAction = templates.getCollection(action, prefix)
    const yield = templates.yieldCollection(action, prefix, api)
    const takeLatest = templates.takeLatest(action, prefix, api)
    console.log("Writing collection", actionStrings, prefix, api)
    await writer.writeActions(actionStrings, appAction)
    await writer.writeSaga(yield, takeLatest)
  },
}

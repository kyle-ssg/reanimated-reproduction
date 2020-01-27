const templates = require('./templates/app-actions')
const writer = require('./helpers/writer')

module.exports = {
  writeCollection: async function (action, prefix, api, createProvider, webExample, reactNativeExample) {
    const actionStrings = templates.action(action, prefix)
    const appAction = templates.getCollection(action, prefix)
    const yieldString = templates.yieldCollection(action, prefix, api)
    const takeLatest = templates.takeLatest(action, prefix, api)
    const reducer = templates.reducerCollection(action, prefix, api)
    console.log('Writing collection', action, prefix, api)
    const provider = templates.providerCollection(action, prefix, api)
    // const webExample = templates.webCollection(action, prefix, api)
    // const reactNativeExample = templates.reactNativeCollection(action, prefix, api)
    await writer.writeActions(actionStrings, appAction)
    await writer.writeSaga(yieldString, takeLatest)
    await writer.writeReducer(reducer, reducer)
    if (createProvider) {
      await writer.writeProvider(provider)
    }
  },
  writeGet: async function (action, prefix, api, createProvider, webExample, reactNativeExample) {
    const actionStrings = templates.action(action, prefix)
    const appAction = templates.get(action, prefix)
    const yieldString = templates.yieldGet(action, prefix, api)
    const takeLatest = templates.takeLatest(action, prefix, api)
    const reducer = templates.reducerGet(action, prefix, api)
    console.log('Writing get', action, prefix, api)
    const provider = templates.providerItem(action, prefix, api)
    // const webExample = templates.webGet(action, prefix, api)
    // const reactNativeExample = templates.reactNativeGet(action, prefix, api)
    await writer.writeActions(actionStrings, appAction)
    await writer.writeSaga(yieldString, takeLatest)
    await writer.writeReducer(reducer, reducer)
    if (createProvider) {
      await writer.writeProvider(provider, prefix)
    }
  },
  writePost: async function (action, prefix, api, createProvider, webExample, reactNativeExample) {
    const actionStrings = templates.action(action, prefix)
    const appAction = templates.post(action, prefix)
    const yieldString = templates.yieldPost(action, prefix, api)
    const takeLatest = templates.takeLatest(action, prefix, api)
    const reducer = templates.reducerPost(action, prefix, api)
    const provider = templates.providerItem(action, prefix, api)
    // const webExample = templates.webPost(action, prefix, api)
    // const reactNativeExample = templates.reactNativeGPost(action, prefix, api)
    console.log('Writing post', action, prefix, api)
    await writer.writeActions(actionStrings, appAction)
    await writer.writeSaga(yieldString, takeLatest)
    await writer.writeReducer(reducer, reducer)
    if (createProvider) {
      await writer.writeProvider(provider, prefix)
    }
  },
  writeUpdate: async function (action, prefix, api, createProvider, webExample, reactNativeExample) {
    const actionStrings = templates.action(action, prefix)
    const appAction = templates.update(action, prefix)
    const yieldString = templates.yieldUpdate(action, prefix, api)
    const takeLatest = templates.takeLatest(action, prefix, api)
    const reducer = templates.reducerUpdate(action, prefix, api)
    const provider = templates.providerItem(action, prefix, api)
    // const webExample = templates.webUpdate(action, prefix, api)
    // const reactNativeExample = templates.webUpdate(action, prefix, api)
    console.log('Writing update', action, prefix, api)
    await writer.writeActions(actionStrings, appAction)
    await writer.writeSaga(yieldString, takeLatest)
    await writer.writeReducer(reducer, reducer)
    if (createProvider) {
      await writer.writeProvider(provider, prefix)
    }
  },
}

const templates = require('./templates');
const writer = require('./helpers/writer');

module.exports = {
    async writeCollection(action, prefix, api, createProvider, webExample, type='any') {
        const actionStrings = templates.action(action, prefix);
        const appAction = templates.getCollection(action, prefix);
        const yieldString = templates.yieldCollection(action, prefix, api);
        const stateTypes = templates.stateTypes(action, prefix, type);
        const takeLatest = templates.takeLatest(action, prefix, api);
        const reducer = templates.reducerCollection(action, prefix, api);
        console.log('Writing collection', action, prefix, api);
        const provider = templates.providerCollection(action, prefix, api);
        const webExampleString = templates.webCollection(action, prefix, api);
        // const reactNativeExample = templates.reactNativeCollection(action, prefix, api)
        await writer.writeActions(actionStrings, appAction);
        console.log('Wrote actions');
        await writer.writeSaga(yieldString, takeLatest);
        console.log('Wrote saga');
        await writer.writeReducer(reducer, stateTypes);
        console.log('Wrote reducer');
        if (createProvider) {
            await writer.writeProvider(provider, prefix);
        }
        if (webExample) {
            await writer.writeWebGetExample(webExampleString, prefix);
        }
    },
    async writeComponent(name) {
        const componentString = templates.component(name);
        await writer.writeComponent(componentString, name);
    },
    async writePost(action, prefix, api, createProvider, webExample, type='any') {
        const actionStrings = templates.action(action, prefix);
        const appAction = templates.post(action, prefix);
        const yieldString = templates.yieldPost(action, prefix, api);
        const takeLatest = templates.takeEvery(action, prefix, api);
        const reducer = templates.reducerPost(action, prefix, api);
        const stateTypes = templates.stateTypes(action, prefix, type);
        const provider = templates.providerItem(action, prefix, api);
        const webExampleString = templates.webPost(action, prefix, api);
        // const reactNativeExample = templates.reactNativeGPost(action, prefix, api)
        console.log('Writing post', action, prefix, api);
        await writer.writeActions(actionStrings, appAction);
        await writer.writeSaga(yieldString, takeLatest);
        await writer.writeReducer(reducer);
        if (createProvider) {
            await writer.writeProvider(provider, prefix);
        }
        if (webExample) {
            await writer.writeWebPostExample(webExampleString, prefix);
        }
    },
    async writeGet(action, prefix, api, createProvider, webExample, type='any') {
        const actionStrings = templates.action(action, prefix);
        const appAction = templates.get(action, prefix);
        const yieldString = templates.yieldGet(action, prefix, api);
        const takeLatest = templates.takeEvery(action, prefix, api);
        const reducer = templates.reducerGet(action, prefix, api);
        const stateTypes = templates.stateTypes(action, prefix, type);
        const webExampleString = templates.webGet(action, prefix, api);
        const provider = templates.providerItem(action, prefix, api);
        // const webExample = templates.webGet(action, prefix, api)
        // const reactNativeExample = templates.reactNativeGet(action, prefix, api)
        await writer.writeActions(actionStrings, appAction);
        await writer.writeSaga(yieldString, takeLatest);
        await writer.writeReducer(reducer, stateTypes);
        if (createProvider) {
            await writer.writeProvider(provider, prefix);
        }
        if (webExample) {
            await writer.writeWebGetExample(webExampleString, prefix);
        }
    },
    async writeDelete(action, prefix, api, createProvider, webExample, type='any') {
        const actionStrings = templates.action(action, prefix);
        const appAction = templates.delete(action, prefix);
        const yieldString = templates.yieldDelete(action, prefix, api);
        const takeLatest = templates.takeEvery(action, prefix, api);
        const reducer = templates.reducerUpdate(action, prefix, api);
        const stateTypes = templates.stateTypes(action, prefix, type);
        const provider = templates.providerItem(action, prefix, api);
        const webExampleString = templates.webPost(action, prefix, api);
        // const reactNativeExample = templates.webUpdate(action, prefix, api)
        console.log('Writing delete', action, prefix, api);
        await writer.writeActions(actionStrings, appAction);
        await writer.writeSaga(yieldString, takeLatest);
        await writer.writeReducer(reducer);
        if (createProvider) {
            await writer.writeProvider(provider, prefix);
        }
        if (webExample) {
            await writer.writeWebPostExample(webExampleString, prefix);
        }
    },
    async writeUpdate(action, prefix, api, createProvider, webExample, type='any') {
        console.log("Update", type)
        const actionStrings = templates.action(action, prefix);
        const appAction = templates.update(action, prefix);
        const yieldString = templates.yieldUpdate(action, prefix, api);
        const takeLatest = templates.takeEvery(action, prefix, api);
        const reducer = templates.reducerUpdate(action, prefix, api);
        const stateTypes = templates.stateTypes(action, prefix, type);
        const provider = templates.providerItem(action, prefix, api);
        const webExampleString = templates.webPost(action, prefix, api);
        // const reactNativeExample = templates.webUpdate(action, prefix, api)
        console.log('Writing update', action, prefix, api);
        await writer.writeActions(actionStrings, appAction);
        await writer.writeSaga(yieldString, takeLatest);
        await writer.writeReducer(reducer);
        if (createProvider) {
            await writer.writeProvider(provider, prefix);
        }
        if (webExample) {
            await writer.writeWebPostExample(webExampleString, prefix);
        }
    },
};

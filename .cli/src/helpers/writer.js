const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../../../');
const common = path.join(rootPath, './common');
const appActions = path.join(common, './app-actions.ts');
const saga = path.join(common, './saga.js');
const reducer = path.join(common, './reducer.ts');
const stateTypes = path.join(common, './state-type.ts');
const providers = path.join(common, './providers');
const components = path.join(rootPath, './components');

const stateTypesPointer = '// END OF STATE_TYPES';
const actionsPointer = '// END OF APP_ACTIONS';
const stringsPointer = '// END OF ACTION_STRINGS';
const yieldPointer = '// END OF YIELDS';
const takeLatestPointer = '// END OF TAKE_LATEST';
const reducerPointer = '// END OF REDUCER';

const functionName = function (action, prefix) {
    const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const actionParts = action.split('_');
    return actionParts[0].toLowerCase() + post;
};

module.exports = {
    async writeActions(strings, action) {
        let res = fs.readFileSync(appActions, 'utf8');

        if (res.includes(strings)) {
            console.log('Skipping action strings, already exists');
        } else {
            res = res.replace(stringsPointer, `${strings}\n${stringsPointer}`);
        }
        if (res.includes(action)) {
            console.log('Skipping actions, already exists');
        } else {
            res = res.replace(actionsPointer, `${action}\n${actionsPointer}`);
        }
        return fs.writeFileSync(appActions, res, 'utf8');
    },
    async writeSaga(yieldString, takeLatest) {
        let res = fs.readFileSync(saga, 'utf8');
        if (res.includes(yieldString)) {
            console.log('Skipping yield string, already exists');
        } else {
            res = res.replace(yieldPointer, `${yieldString}\n${yieldPointer}`);
        }
        if (res.includes(takeLatest)) {
            console.log('Skipping latest string, already exists');
        } else {
            res = res.replace(takeLatestPointer, `${takeLatest}\n        ${takeLatestPointer}`);
        }
        return fs.writeFileSync(saga, res, 'utf8');
    },
    async writeReducer(reducerString, stateTypesString) {
        let res = fs.readFileSync(reducer, 'utf8');
        if (res.includes(reducerString)) {
            console.log('Reducer string, already exists');
        } else {
            res = res.replace(reducerPointer, `${reducerString}\n        ${reducerPointer}`);
        }

        if (stateTypes) {
            console.log("STATE TYPES")
            let res2 = fs.readFileSync(stateTypes, 'utf8');
            if (res2.includes(stateTypesString)) {
                console.log('state types string, already exists');
            } else {
                res2 = res2.replace(stateTypesPointer, `${stateTypesString}\n  ${stateTypesPointer}`);
                console.log("Writing", res2, stateTypes)
                fs.writeFileSync(stateTypes, res2, 'utf8')
            }
        }

        return fs.writeFileSync(reducer, res, 'utf8');
    },
    async writeProvider(providerString, prefix) {
        const providerPath = path.join(providers, `${functionName('WITH', prefix)}.ts`);
        const res = fs.existsSync(providerPath);
        if (res) {
            console.log('Skipping provider, already exists');
        } else {
            return fs.writeFileSync(providerPath, providerString, 'utf8');
        }
    },
    async writeComponent(reducerString, prefix) {
        const providerPath = path.join(providers, `${functionName('WITH', prefix)}.js`);
        const res = fs.existsSync(providerPath);
        if (res) {
            console.log('Skipping provider, already exists');
        } else {
            return fs.writeFileSync(providerPath, reducerString, 'utf8');
        }
    },
    async writeWebPostExample(string, prefix) {
        const webPath = path.join(components, `Edit${functionName('', prefix)}.js`);
        const res = fs.existsSync(webPath);
        if (res) {
            console.log('Skipping web example, already exists');
        } else {
            return fs.writeFileSync(webPath, string, 'utf8');
        }
    },
    async writeWebGetExample(string, prefix) {
        const webPath = path.join(components, `${functionName('', prefix)}.js`);
        const res = fs.existsSync(webPath);
        if (res) {
            console.log('Skipping web example, already exists');
        } else {
            return fs.writeFileSync(webPath, string, 'utf8');
        }
    },
};

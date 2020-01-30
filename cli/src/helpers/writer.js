const fs = require('fs')
const path = require('path')

const rootPath = path.join(__dirname, '../../../')
const common = path.join(rootPath, './common')
const appActions = path.join(common, './app-actions.js')
const saga = path.join(common, './saga.js')
const reducer = path.join(common, './reducer.js')
const providers = path.join(common, './providers')
const components = path.join(rootPath, './components')

const actionsPointer = '// END OF APP_ACTIONS'
const stringsPointer = '// END OF ACTION_STRINGS'
const yieldPointer = '// END OF YIELDS'
const takeLatestPointer = '// END OF TAKE_LATEST'
const reducerPointer = '// END OF REDUCER'

const functionName = function (action, prefix) {
  const post = prefix.charAt(0).toUpperCase() + prefix.slice(1)
  const actionParts = action.split('_')
  return actionParts[0].toLowerCase() + post
}

module.exports = {
  writeActions: async function (strings, action) {
    let res = fs.readFileSync(appActions, 'utf8')

    if (res.includes(strings)) {
      console.log('Skipping action strings, already exists')
    } else {
      res = res.replace(stringsPointer, `${strings}\n${stringsPointer}`)
    }
    if (res.includes(action)) {
      console.log('Skipping actions, already exists')
    } else {
      res = res.replace(actionsPointer, `${action}\n${actionsPointer}`)
    }
    return fs.writeFileSync(appActions, res, 'utf8')
  },
  writeSaga: async function (yieldString, takeLatest) {
    let res = fs.readFileSync(saga, 'utf8')
    if (res.includes(yieldString)) {
      console.log('Skipping yield string, already exists')
    } else {
      res = res.replace(yieldPointer, `${yieldString}\n${yieldPointer}`)
    }
    if (res.includes(takeLatest)) {
      console.log('Skipping latest string, already exists')
    } else {
      res = res.replace(takeLatestPointer, `${takeLatest}\n        ${takeLatestPointer}`)
    }
    return fs.writeFileSync(saga, res, 'utf8')
  },
  writeReducer: async function (reducerString) {
    let res = fs.readFileSync(reducer, 'utf8')
    if (res.includes(reducerString)) {
      console.log('Reducer string, already exists')
    } else {
      res = res.replace(reducerPointer, `${reducerString}\n        ${reducerPointer}`)
    }
    return fs.writeFileSync(reducer, res, 'utf8')
  },
  writeProvider: async function (reducerString, prefix) {
    const providerPath = path.join(providers, functionName('WITH', prefix) + '.js')
    let res = fs.existsSync(providerPath)
    if (res) {
      console.log('Skipping provider, already exists')
    } else {
      return fs.writeFileSync(providerPath, reducerString, 'utf8')
    }
  },
  writeComponent: async function (reducerString, prefix) {
    const providerPath = path.join(providers, functionName('WITH', prefix) + '.js')
    let res = fs.existsSync(providerPath)
    if (res) {
      console.log('Skipping provider, already exists')
    } else {
      return fs.writeFileSync(providerPath, reducerString, 'utf8')
    }
  },
  writeWebPostExample: async function (string, prefix) {
    const webPath = path.join(components, 'Edit' + functionName('', prefix) + '.js')
    let res = fs.existsSync(webPath)
    if (res) {
      console.log('Skipping web example, already exists')
    } else {
      return fs.writeFileSync(webPath, string, 'utf8')
    }
  },
  writeWebGetExample: async function (string, prefix) {
    const webPath = path.join(components, functionName('', prefix) + '.js')
    let res = fs.existsSync(webPath)
    if (res) {
      console.log('Skipping web example, already exists')
    } else {
      return fs.writeFileSync(webPath, string, 'utf8')
    }
  },
}

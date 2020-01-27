const fs = require('fs')
const path = require('path')

const rootPath = path.join(__dirname, '../../../')
const common = path.join(rootPath, './common')
const appActions = path.join(common, './app-actions.js')
const saga = path.join(common, './saga.js')

const actionsPointer = '// END OF APP_ACTIONS'
const stringsPointer = '// END OF ACTION_STRINGS'
const yieldPointer = '// END OF YIELDS'
const takeLatestPointer = '// END OF TAKE_LATEST'
module.exports = {
  writeActions: async function (strings, action) {
    let res = fs.readFileSync(appActions, 'utf8')
    res = res.replace(stringsPointer, `${strings}\n${stringsPointer}`)
    res = res.replace(actionsPointer, `${action}\n${actionsPointer}`)
    return fs.writeFileSync(appActions, res, 'utf8')
  },
  writeSaga: async function (yieldString, takeLatest) {
    let res = fs.readFileSync(saga, 'utf8')
    res = res.replace(yieldPointer, `${yieldString}\n${yieldPointer}`)
    res = res.replace(takeLatestPointer, `${takeLatest}\n        ${takeLatestPointer}`)
    return fs.writeFileSync(saga, res, 'utf8')
  },
}

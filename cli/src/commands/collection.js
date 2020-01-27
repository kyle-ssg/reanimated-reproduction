const {Command, flags} = require('@oclif/command')
const cli = require('cli-ux').default
const getPrefix = require('../helpers/getPrefix')
const controller = require('../controller').writeCollection

class TheCommand extends Command {
  async run() {
    const action = await cli.prompt('Define action to retrieve the collection', {default: 'GET_USERS'})
    const prefix = await cli.prompt('Where does it get stored in the reducer?', {default: getPrefix(action)})
    const api = await cli.prompt('What\'s the api path?', {default: '/' + getPrefix(action)})
    await controller(action, prefix, api)
    console.log('done')
  }
}

TheCommand.description = `Writes the app actions, saga
...
Extra documentation goes here
`

TheCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TheCommand
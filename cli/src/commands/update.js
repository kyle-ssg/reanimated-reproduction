const {Command, flags} = require('@oclif/command')
const cli = require('cli-ux').default
const getPrefix = require('../helpers/getPrefix')
const controller = require('../controller').writeUpdate

class TheCommand extends Command {
  async run() {
    const action = await cli.prompt('Define action to update the item', {default: 'UPDATE_USER'})
    const prefix = await cli.prompt('Where does it get stored in the reducer?', {default: getPrefix(action)})
    const api = await cli.prompt('What\'s the api path?', {default: '/' + getPrefix(action) + '/:id'})
    const createProvider = await cli.confirm('Do you want to create a provider?')
    const createExample = createProvider ? await cli.confirm('Do you want to create a web example using it?') : false
    const createExampleReactNative = createProvider ? await cli.confirm('Do you want to create an example component using it?') : false
    await controller(action, prefix, api, createExample, createExampleReactNative)
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

const path = require('path')

const extraNodeModules = new Proxy(
  {
    // If we would have an actual package with "package.json" it would go here.
    // e.g. if @local/core would be a package:
    '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime/'),
  },
  {
    get: (target, name) => {
      // eslint-disable-next-line no-prototype-builtins
      if (target.hasOwnProperty(name)) {
        return target[name]
      }
      // Redirect dependencies referenced from shared folders to mobile package node_modules
      return path.join(__dirname, `node_modules/${name}`)
    },
  },
)

const watchFolders = [
  // Watch directory where shared folders are located
  path.resolve(__dirname, '../common'),
  // Watch root package node_modules to follow symlinks of yarn hoisted packages
  path.resolve(__dirname, './node_modules'),
]

module.exports = {
  projectRoot: path.resolve(__dirname),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],

    extraNodeModules,
    // Allow to process TS files
    sourceExts: ['ts', 'tsx', 'js', 'jsx'],
  },
  watchFolders,
}

/**
 * Metro configuration for React Native
 * Overrides original to have local access to janus-frontend-common
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
    projectRoot: path.resolve(__dirname, '.'),
    // watchFolders: [path.resolve(__dirname, './node_modules')],
    watchFolders: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, '../common'),
    ],

    resolver: {
        blacklistRE: blacklist([
            /node_modules\/.*\/node_modules\/react-native\/.*/,
        ]),

        // https://github.com/facebook/metro/issues/1#issuecomment-453450709
        extraNodeModules: new Proxy({}, {
            get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
        }),
    },

    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};

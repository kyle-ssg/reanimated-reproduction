const webpack = require('webpack');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/preset-scss",
    "@storybook/addon-essentials"
  ],
  babel: async (options) => ({
    ...options,
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  }),
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...(config.resolve.alias || {}),      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    }
    // config.module.rules[0].use[0].options.plugins.push(['react-native-web', { commonjs: true }]);

    config.plugins.push(new webpack.DefinePlugin({
      __DEV__: true
    }));

    // Return the altered config
    return config;
  },
}

const path = require("path");
const webpack = require("webpack")
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  )
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.module.rules = config.module.rules.concat(
    require("../.webpack/loaders.js")
  );
  config.resolve.extensions.push(".ts", ".tsx");

  // Return the altered config
  return config;
};

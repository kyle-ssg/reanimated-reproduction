module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: 'last 2 versions',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: [],
    },
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-react'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    ['react-native-web', { commonjs: true }],
    ['@babel/proposal-class-properties'],
    [
      'module-resolver',
      {
        alias: {
          'react-native$': 'react-native-web',
          'lottie-react-native$': 'react-native-web-lottie',
          components: './components/',
          common: './common/',
          project: './project/',
          mobile: './mobile/',
        },
      },
    ],
  ],
}

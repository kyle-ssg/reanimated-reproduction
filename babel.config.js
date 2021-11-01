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
  plugins: [
    'react-native-reanimated/plugin',
    ['react-native-web', { commonjs: true }],
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

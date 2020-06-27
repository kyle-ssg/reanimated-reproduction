module.exports = {
  'env': {
    'es6': true,
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'prettier',
    'react',
    'react-hooks',
  ],
  'rules': {
    'prettier/prettier': ['error'],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'camelcase': 'off',
    'curly': 'off',
    'default-case': 'error',
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'indent': [
      "error", 4,
      {
        SwitchCase: 1,
        ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      },
    ],        'no-bitwise': 'error',
    'no-caller': 'error',
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'radix': 'error',
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'globals': {
    "global": true,
    'API': true,
    'AccountStore': true,
    'Actions': true,
    'Alert': true,
    'Animated': true,
    'Animations': true,
    'AppActions': true,
    'AsyncStorage': true,
    'Button': true,
    'Column': true,
    'Constants': true,
    'DeviceHeight': true,
    'DeviceInfo': true,
    'DeviceWidth': true,
    'Dimensions': true,
    'E2E': true,
    'ENV_NAME': true,
    'ENV_TYPE': true,
    'Easing': true,
    'FormGroup': true,
    'Format': true,
    'ImagePicker': true,
    'Link': true,
    'Loader': true,
    'Navigation': true,
    'OptionalBool': true,
    'OptionalElement': true,
    'OptionalFunc': true,
    'OptionalNumber': true,
    'OptionalObject': true,
    'OptionalString': true,
    'PixelRatio': true,
    'Platform': true,
    'Project': true,
    'Radio': true,
    'React': true,
    'ReactDOM': true,
    'ReactNative': true,
    'Row': true,
    'SecuredStorage': true,
    'Strings': true,
    'Styles': true,
    'TouchableNativeFeedback': true,
    'Utils': true,
    '_': true,
    '__DEV__': true,
    'branch': true,
    'cn': true,
    'colour': true,
    'describe': true,
    'em': true,
    'ga': true,
    'mixpanel': true,
    'moment': true,
    'oneOfType': true,
    'openAlert': true,
    'openConfirm': true,
    'pact': true,
    'pallette': true,
    'propTypes': true,
    'routes': true,
    'statusCodes': true,
    'styleVariables': true,
  }
};

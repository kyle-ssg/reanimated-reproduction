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
    "global": true
  }
};

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
        'prettier/react',
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
        'react/jsx-no-undef': [
            "error",
            {"allowGlobals":true}
        ],
        'default-case': 'error',
        'dot-notation': 'error',
        'object-curly-spacing': 2,
        'guard-for-in': 'error',
        'indent': [
            "error", 4,
            {
                SwitchCase: 1,
                ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            },
        ],
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-eval': 'error',
        'no-new-wrappers': 'error',
        'no-shadow': 0,
        'no-var': 'error',
        'radix': 0,
        'react/jsx-indent': ["error", 4],
        'react/jsx-indent-props': ["error", 2],
        'react/jsx-max-props-per-line': [1,
            {
                'maximum': 3
            }
        ],
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'globals': {
        "global": true,
        __dirname: true,
        process: true,
        __DEV__: true,
        require: true,
        module: true,
        mixpanel: true,
        openConfirm: true,
        openAlert: true,
        Strings: true,
        AsyncStorage: true,
        AppActions: true,
        Utils: true,
        API: true,
        Input:true,
        Column:true,
        Actions:true,
        Project:true,
        ErrorMessage:true,
        SuccessMessage:true,
        Constants:true,
        Format:true,
        Button:true,
        Select:true,
        _:true,
        E2E: true,
        ga: true
    }
};

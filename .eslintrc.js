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
        'react/jsx-no-undef': [
          "error",
            {"allowGlobals":true}
        ],
        'default-case': 'error',
        'dot-notation': 'error',
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
        'object-curly-spacing': ['error', 'always'],
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
        API: true,
        Actions:true,
        AppActions: true,
        AsyncStorage: true,
        Button:true,
        Column:true,
        Constants:true,
        E2E: true,
        ErrorMessage:true,
        Format:true,
        FormGroup:true,
        Input:true,
        InputGroup:true,
        Loader:true,
        MaskedInput:true,
        Project:true,
        Row:true,
        Select:true,
        Strings: true,
        SuccessMessage:true,
        Utils: true,
        _:true,
        __DEV__: true,
        __dirname: true,
        ga: true,
        mixpanel: true,
        module: true,
        openAlert: true,
        openConfirm: true,
        process: true,
        require: true,
    }
    };

module.exports = {
    'env': {
        'es6': true,
        'browser': true,
    },
    'extends': [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "prettier"
    ],
    'parser': '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        ecmaFeatures: {
            legacyDecorators: true,
            modules: true,
        },
        parser: 'babel-eslint'
    },
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
                ignoredNodes: ['TemplateLiteral', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            },
        ],
        'no-caller': 'error',
        'no-empty-parameters': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-types': 0,
        'no-shadow': 0,
        'no-empty-pattern': 0,
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'radix': 0,
        "react/prop-types": "off",
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
        Animated: true,
        AppActions: true,
        AsyncStorage: true,
        Button:true,
        Column:true,
        Constants:true,
        Dimensions: true,
        E2E: true,
        ErrorMessage:true,
        Fade:true,
        Flex:true,
        FormGroup:true,
        Format:true,
        ION:true,
        Input:true,
        InputGroup:true,
        Link:true,
        Loader:true,
        MaskedInput:true,
        Platform: true,
        Project:true,
        ReactNative: true,
        Record:true,
        Row:true,
        SafeAreaView:true,
        ScrollView: true,
        Select:true,
        Strings: true,
        Styles:true,
        SuccessMessage:true,
        Text:true,
        TouchableOpacity:true,
        Utils: true,
        View:true,
        _:true,
        __DEV__: true,
        __dirname: true,
        colour: true,
        describe:true,
        em: true,
        expect:true,
        ga: true,
        it:true,
        mixpanel: true,
        module: true,
        openAlert: true,
        openConfirm: true,
        openModal: true,
        palette: true,
        process: true,
        projectOverrides: true,
        require: true,
        styleVariables: true,
    }
};

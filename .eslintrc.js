module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      modules: true,
    },
    parser: 'babel-eslint',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'react/react-in-jsx-scope': 0,
    'default-case': 'error',
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-empty-parameters': 0,
    'no-empty-pattern': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    quotes: ['error', 'single'],
    radix: 0,
    indent: 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': [2, 2],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    _: true,
    __DEV__: true,
    __dirname: true,
    Actions: true,
    Alert: true,
    Animated: true,
    API: true,
    AppActions: true,
    AsyncStorage: true,
    Bold: true,
    Button: true,
    colour: true,
    Column: true,
    Constants: true,
    Container: true,
    describe: true,
    Dimensions: true,
    E2E: true,
    em: true,
    ErrorMessage: true,
    expect: true,
    Fade: true,
    Flex: true,
    Format: true,
    FormGroup: true,
    ga: true,
    global: true,
    grecaptcha: true,
    H1: true,
    H2: true,
    H3: true,
    H4: true,
    Input: true,
    InputGroup: true,
    ButtonSecondary: true,
    ButtonTertiary: true,
    ION: true,
    it: true,
    SelectBox: true,
    Link: true,
    Loader: true,
    MaskedInput: true,
    mixpanel: true,
    module: true,
    openAlert: true,
    openConfirm: true,
    openModal: true,
    palette: true,
    Platform: true,
    process: true,
    Project: true,
    projectOverrides: true,
    ReactNative: true,
    Record: true,
    require: true,
    Row: true,
    SafeAreaView: true,
    ScrollView: true,
    Select: true,
    Strings: true,
    Styles: true,
    styleVariables: true,
    SuccessMessage: true,
    Text: true,
    TextInput: true,
    TouchableOpacity: true,
    Utils: true,
    View: true,
  },
};

module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      modules: true,
    },
    parser: 'typescript-eslint',
  },
  plugins: ['react', 'react-hooks', 'jest'],
  rules: {
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'default-case': 'error',
    'dot-notation': 'error',
    '@typescript-eslint/ban-ts-comment': 0,
    'guard-for-in': 'error',
    'no-caller': 'error',
    'react/react-in-jsx-scope': 0,
    'no-empty-parameters': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/display-name': 0,
    'no-case-declarations': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    'prefer-template': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-shadow': 0,
    'no-empty-pattern': 0,
    'no-var': 'error',
    '@typescript-eslint/no-empty-function': 0,
    'object-curly-spacing': ['error', 'always'],
    radix: 0,
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    // "react/jsx-indent": ["error", 4],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 3,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    API: true,
    Actions: true,
    Alert: true,
    Animated: true,
    AppActions: true,
    AsyncStorage: true,
    Bold: true,
    Button: true,
    FA5Pro: true,
    ButtonSecondary: true,
    ButtonTertiary: true,
    Column: true,
    Constants: true,
    Container: true,
    DateTimePicker: true,
    Dimensions: true,
    E2E: true,
    ErrorMessage: true,
    Fade: true,
    Flex: true,
    FormGroup: true,
    Format: true,
    H1: true,
    H2: true,
    H3: true,
    H4: true,
    ION: true,
    Input: true,
    InputGroup: true,
    KeyboardAwareScrollView: true,
    Link: true,
    Loader: true,
    MaskedInput: true,
    Modal: true,
    Platform: true,
    Project: true,
    ReactNative: true,
    Record: true,
    Row: true,
    DeviceWidth: true,
    DeviceHeight: true,
    SafeAreaView: true,
    ScrollView: true,
    Switch: true,
    ButtonText: true,
    ButtonOutlinePrimary: true,
    Select: true,
    SelectBox: true,
    Strings: true,
    Styles: true,
    SuccessMessage: true,
    Text: true,
    TextInput: true,
    TouchableOpacity: true,
    Utils: true,
    View: true,
    _: true,
    __DEV__: true,
    ButtonPrimary: true,
    ImageBackground: true,
    LinearGradient: true,
    __dirname: true,
    colour: true,
    describe: true,
    em: true,
    expect: true,
    ga: true,
    global: true,
    grecaptcha: true,
    it: true,
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
  },
}

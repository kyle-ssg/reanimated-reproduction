module.exports = {
  "parser": "babel-eslint",

  "extends": ["eslint:recommended", "plugin:react/recommended"],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true,
    "jquery": true
  },

  "plugins": [
    "react"
  ],

  "globals": {
    "define": true
  },

  "rules": {
    "strict": ["error", "global"],
    "no-unused-vars": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "camelcase": ["error", { "properties": "always" }],
    "consistent-return": "error",
    "arrow-spacing": "off",
    "no-undef": 0,
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "semi": ["error", "always"],
    "no-confusing-arrow": ["error", { "allowParens": false }],
    "no-constant-condition": "error",
    "no-labels": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "func-style": "off",
    "react/wrap-multilines": "error",
    "react/forbid-prop-types": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-indent-props": "off",
    "react/jsx-key": "warn",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-undef": "off",
    "react/display-name": "off",
    "react/jsx-no-bind": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-pascal-case": "off",
    "react/jsx-sort-prop-types": "off",
    "react/jsx-sort-props": "off",
    "react/no-multi-comp": "off",
    "react/no-set-state": "off",
    "react/prefer-es6-class": "warn",
    "react/require-extension": "warn",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn"
  }
}

module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react", "import"
    ],
    "rules": {
        "eol-last": 0,
        "no-multi-assign": 0,
        "no-nested-ternary": 0,
        "no-plusplus": 0,
        "no-return-assign": 0,
        "object-curly-newline": 0,
        "prefer-destructuring": 0,
        "quote-props": 0,
        "radix": 0,
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-tag-spacing": 0,
        "react/no-find-dom-node": 0,
        "react/no-multi-comp": 0,
        "react/require-default-props": 0,
    },
    "globals": {
      "__DEV__": true,
      "$": true,
      "_": true,
      "Actions": true,
      "API": true,
      "AppActions": true,
      "AsyncStorage": true,
      "Dispatcher": true,
      "ES6Component": true,
      "Format": true,
      "FormGroup": true,
      "ga": true,
      "Loader": true,
      "moment": true,
      "Project": true,
      "propTypes": true,
      "React": true,
      "ReactDOM": true,
      "Row": true,
      "Utils": true,
      "window": true
    }
};
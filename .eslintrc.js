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
        "global-require": 0,
        "jsx-a11y/label-has-for": 0,
        "max-len": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
      "jsx-a11y/click-events-have-key-events": 0, // there are valid cases for this e.g. forms
      "jsx-a11y/label-has-associated-control": 0, // rule seems buggy, doesn't understand some htmlFor cases
      "no-multi-assign": 0,
        "no-nested-ternary": 0,
        "no-underscore-dangle": 0,
        "no-plusplus": 0,
        "no-return-assign": 0,
        "object-curly-newline": 0,
        "prefer-destructuring": 0,
        "quote-props": 0,
        "radix": 0,
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-no-undef": 0,
        "react/jsx-tag-spacing": 0, //Disabled to it not looking for global components
        "react/no-array-index-key": 0, // there are valid cases for this where a key can not be determined
        "react/no-string-refs": 0, // todo: Disable for now, need to update probably for react 17
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
      "Constants": true,
      "Dispatcher": true,
      "ES6Component": true,
      "Format": true,
      "FormGroup": true,
      "ga": true,
      "hot": true,
      "Link": true,
      "Loader": true,
      "moment": true,
      "Project": true,
      "propTypes": true,
      "React": true,
      "ReactDOM": true,
      "Row": true,
      "Utils": true,
      "toast": true,
      "window": true
    }
};
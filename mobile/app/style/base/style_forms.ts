import { StyleSheet } from 'react-native';

const style:Record<string, ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle> = {
  //
  // Forms
  // --------------------------------------------------

  // Input

  textInput: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    height: styleVariables.inputHeight,
    fontSize: styleVariables.inputFontSizeBase,
    backgroundColor: palette.inputBackground,
    color: palette.primary
  },

  formGroup: {
    paddingTop: styleVariables.paddingBase,
    paddingBottom: styleVariables.paddingBase,
  },

  input: {
    fontSize: styleVariables.fontSizeBase,
    flex: 1,
  },

  inputText: {
    fontSize: styleVariables.fontSizeBase,
  },

  disabled: {
    opacity: styleVariables.disabledOpacity,
  },

  disabledText: {
    color: colour.disabledText,
  },

  inputLabel: {
    color: palette.navy,
    fontSize: 16,
  },

  selectBoxContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },

  selectBoxIcon: {
    fontSize: styleVariables.inputFontSizeBase,
  },
};

module.exports = style;

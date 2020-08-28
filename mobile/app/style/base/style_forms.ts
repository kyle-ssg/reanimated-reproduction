import { StyleSheet } from 'react-native';

const style:Record<string, ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle> = {
  //
  // Forms
  // --------------------------------------------------

  // TextInput
  inputLabel: {
    color: palette.navy,
    fontSize: 16,
  },

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

  disabled: {
    opacity: styleVariables.disabledOpacity,
  },

  disabledText: {
    color: colour.disabledText,
  },

  // Select
  selectBoxContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },

  selectBoxText: {
    fontSize: styleVariables.fontSizeBase,
  },

  selectBoxIcon: {
    fontSize: styleVariables.inputFontSizeBase,
  },
};

module.exports = style;

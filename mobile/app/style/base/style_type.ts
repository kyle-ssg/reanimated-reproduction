import { StyleSheet } from 'react-native';

require('./style_pxToEm');

const styles:Record<string, ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle> = {

  //
  // Typography
  // --------------------------------------------------

  h1: {
    color: palette.navy,
    fontSize: styleVariables.fontSizeH1,
    lineHeight: styleVariables.fontSizeH1,
    fontFamily: styleVariables.boldFontFamily,
  },

  h2: {
    color: palette.navy,
    fontSize: styleVariables.fontSizeH2,
    lineHeight: styleVariables.fontSizeH2,
    fontFamily: styleVariables.boldFontFamily,
  },

  h3: {
    color: palette.navy,
    fontSize: styleVariables.fontSizeH3,
    lineHeight: styleVariables.fontSizeH3,
    fontFamily: styleVariables.boldFontFamily,
  },

  h4: {
    color: palette.navy,
    fontSize: styleVariables.fontSizeH4,
    lineHeight: styleVariables.fontSizeH4,
    fontFamily: styleVariables.boldFontFamily,
  },

  textCenter: {
    textAlign: 'center',
  },

  textBottom: {
    textAlignVertical: 'bottom',
  },

  bold: {
    fontFamily: styleVariables.boldFontFamily,
  },

  text: {
    backgroundColor: 'transparent',
    color: palette.text,
    fontFamily: styleVariables.normalFontFamily,
    fontSize: styleVariables.fontSizeBase,
  },

};

module.exports = styles

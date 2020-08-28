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

  p: {
    marginBottom: styleVariables.marginBaseVertical,
  },

  italic: {
    fontFamily: styleVariables.italicFontFamily,
  },

  textError: {
    color: colour.errorText,
  },

  fontWeightLight: {
    fontFamily: styleVariables.normalFontFamily,
  },


  textLight: {
    color: colour.textLight,
  },

  textWhite: {
    color: palette.white,
  },

  textMid: {
    color: colour.textMid,
  },

  textPrimary: {
    color: palette.primary,
  },

  textMidDark: {
    color: palette.textMidDark,
  },

  textCenter: {
    textAlign: 'center',
  },

  textBottom: {
    textAlignVertical: 'bottom',
  },

  icon: {
    fontSize: em(2),
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


  paragraph: {
    marginBottom: styleVariables.marginBaseVertical,
    fontFamily: styleVariables.paragraphText,
    color: palette.primaryDark,
  },

  textSmall: {
    fontSize: styleVariables.fontSizeSmall,
  },

  textLarge: {
    fontSize: styleVariables.fontSizeLarge,
  },

  textFaint: {
    color: palette.textFaint,
  },

  errorText: {
    color: palette.error,
  },

  fontSizeHeading: {
    fontSize: styleVariables.fontSizeHeading,
    fontFamily: styleVariables.boldFontFamily,
  },

  fontSizeSubHeading: {
    fontFamily: styleVariables.boldFontFamily,
  },

  fontSizeSmall: {
    fontSize: styleVariables.fontSizeSmall,
  },

  sup: {
    fontSize: em(0.65),
  },

  anchor: {
    color: palette.primaryDark,
    fontFamily: styleVariables.headerText,
    textDecorationLine: 'underline',
    letterSpacing: em(0.06),
    fontSize: em(0.86),
  },

  iconAlignTop:{
    paddingTop:5,
  }

};

module.exports = styles

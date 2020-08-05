import { StyleSheet } from "react-native";

require("./style_pxToEm");

const styles: Record<
  string,
  ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  //
  // Typography
  // --------------------------------------------------

  h1: {
    fontSize: styleVariables.fontSizeH1,
    lineHeight: styleVariables.fontSizeH1,
    fontWeight: styleVariables.boldFontWeight,
    fontFamily: styleVariables.boldFontFamily,
  },

  h2: {
    fontSize: styleVariables.fontSizeH2,
    lineHeight: styleVariables.fontSizeH2,
    fontWeight: styleVariables.boldFontWeight,
    fontFamily: styleVariables.boldFontFamily,
  },

  h3: {
    fontSize: styleVariables.fontSizeH3,
    lineHeight: styleVariables.fontSizeH3,
    fontFamily: styleVariables.boldFontFamily,
    fontWeight: styleVariables.boldFontWeight,
  },

  h4: {
    fontSize: styleVariables.fontSizeH4,
    lineHeight: styleVariables.fontSizeH4,
    fontWeight: styleVariables.boldFontWeight,
    fontFamily: styleVariables.boldFontFamily,
  },

  p: {
    marginBottom: styleVariables.marginBaseVertical,
  },

  italic: {
    fontFamily: styleVariables.italicFontFamily,
    fontWeight: styleVariables.normalFontWeight,
  },

  textError: {
    color: colour.errorText,
  },

  fontWeightLight: {
    fontWeight: styleVariables.normalFontWeight,
    fontFamily: styleVariables.normalFontFamily,
  },

  textLight: {
    color: colour.textLight,
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
    textAlign: "center",
  },

  textBottom: {
    textAlignVertical: "bottom",
  },

  icon: {
    fontSize: em(2),
  },

  bold: {
    fontWeight: styleVariables.boldFontWeight,
    fontFamily: styleVariables.boldFontFamily,
  },

  text: {
    backgroundColor: "transparent",
    color: palette.text,
    fontFamily: styleVariables.normalFontFamily,
    fontSize: styleVariables.fontSizeBase,
    fontWeight: styleVariables.normalFontWeight,
  },

  paragraph: {
    marginBottom: styleVariables.marginBaseVertical,
    fontFamily: styleVariables.paragraphText,
    color: palette.primaryDark,
    // letterSpacing: 0.9
  },

  textSmall: {
    fontSize: styleVariables.fontSizeSmall,
  },

  textFaint: {
    color: palette.textFaint,
  },

  errorText: {
    color: palette.error,
  },

  fontSizeHeading: {
    fontSize: styleVariables.fontSizeHeading,
    fontWeight: styleVariables.boldFontWeight,
    fontFamily: styleVariables.boldFontFamily,
  },

  fontSizeSubHeading: {
    fontWeight: styleVariables.boldFontWeight,
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
    textDecorationLine: "underline",
    letterSpacing: em(0.06),
    fontSize: em(0.86),
  },
};

module.exports = styles;

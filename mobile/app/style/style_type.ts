import asStyle from "./style-utils/asStyle";

export default asStyle({
  //
  // Typography
  // --------------------------------------------------
  h1: {
    fontSize: styleVariables.fontSizeH1,
    lineHeight: styleVariables.fontSizeH1,
    fontFamily: styleVariables.boldFontFamily,
  },

  h2: {
    fontSize: styleVariables.fontSizeH2,
    // lineHeight: styleVariables.fontSizeH2,
  },

  h3: {
    fontSize: styleVariables.fontSizeH3,
    lineHeight: styleVariables.lineHeightH3,
    fontFamily: styleVariables.boldFontFamily,
  },

  h4: {
    fontSize: styleVariables.fontSizeH4,
    lineHeight: styleVariables.lineHeightH4,
    fontFamily: styleVariables.boldFontFamily,
  },

  textMedium: {
    fontSize: styleVariables.fontSizeH4,
  },

  textSmall: {
    fontSize: 12,
  },

  textBold: {
    fontFamily: styleVariables.boldFontFamily,
  },

  text: {
    backgroundColor: "transparent",
    color: palette.text,
    fontFamily: styleVariables.normalFontFamily,
    fontSize: styleVariables.fontSizeBase,
  },

  textCenter: {
    textAlign: "center"
  },

  textLeft: {
    textAlign: "left"
  },

  textRight: {
    textAlign: "right"
  },

  textBottom: {
    textAlignVertical: "bottom"
  },

  textWhite: {
    color: "white"
  },
});

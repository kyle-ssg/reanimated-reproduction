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
    lineHeight: styleVariables.fontSizeH2,
    fontFamily: styleVariables.boldFontFamily,
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

  text: {
    backgroundColor: "transparent",
    color: palette.text,
    fontFamily: styleVariables.normalFontFamily,
    fontSize: styleVariables.fontSizeBase,
    lineHeight: styleVariables.lineHeightBase,
    fontWeight: styleVariables.normalFontWeight,
  },

  textCenter: {
    textAlign: "center",
  },

  textLeft: {
    textAlign: 'left',
  },

  textRight: {
    textAlign: 'right',
  },

  textBottom: {
    textAlignVertical: "bottom",
  },
});

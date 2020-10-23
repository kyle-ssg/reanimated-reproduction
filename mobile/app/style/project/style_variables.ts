require("../base/style_pxToEm");

export const projectPalette = (global.palette = {
  bodyBackground: "#fff", // General app  background (overriding palette in base/stylevariables)
  danger: "#fe4948",
  dangerDark: '#ca2a3c',
  primary: 'rgb(10,132,255)',
  primaryPressed: 'rgb(0,109,217)',
  secondary: 'rgb(255,55,95)',
  secondaryPressed: 'rgb(236,50,86)',
});

export const projectStyles = (global.styleVariables = {
  // font weights and family (overriding base/styleVariables)
  normalFontWeight: "normal",
  boldFontWeight: "bold",
  buttonFontWeight: "500",

  normalFontFamily: Platform.select({ ios: "System", android: "System" }),
  italicFontFamily: Platform.select({ ios: "System", android: "System" }),
  boldFontFamily: Platform.select({ ios: "System", android: "System" }),
  buttonFontFamily: Platform.select({ ios: "System", android: "System" }),
  inputHeight: 44,
});

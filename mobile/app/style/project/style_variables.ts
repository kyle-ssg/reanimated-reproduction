require("../base/style_pxToEm");

export const projectPalette = {
  bodyBackground: "#fff", // General app  background (overriding palette in base/stylevariables)
  danger: "#fe4948",
  dangerDark: "#ca2a3c",
  primaryPressed: "rgb(0,109,217)",
  secondaryPressed: "rgb(236,50,86)",
  primary: "#65c2d7",
  secondary: "#2e7bf7",
  text: "#333",
  link: "#2e7bf7",
};

export const projectStyles = {
  // font weights and family (overriding base/styleVariables)
  normalFontWeight: "normal",
  boldFontWeight: "bold",
  buttonFontWeight: "500",
  normalFontFamily: Platform.select({ ios: "System", android: "System" }),
  italicFontFamily: Platform.select({ ios: "System", android: "System" }),
  boldFontFamily: Platform.select({ ios: "System", android: "System" }),
  buttonFontFamily: Platform.select({ ios: "System", android: "System" }),
  inputHeight: 44,
};
global.palette = projectPalette;
global.styleVariables = projectStyles;

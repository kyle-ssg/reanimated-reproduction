require("../base/style_pxToEm");

export const projectPalette = (global.palette = {
  bodyBackground: "#fff", // General app  background (overriding palette in base/stylevariables)
  danger: "#fe4948",
});

export const projectStyles = (global.styleVariables = {
  normalFontFamily: Platform.select({ ios: "System", android: "System" }),
  italicFontFamily: Platform.select({ ios: "System", android: "System" }),
  boldFontFamily: Platform.select({ ios: "System", android: "System" }),
  ...require("./style_platform_variables"),
});

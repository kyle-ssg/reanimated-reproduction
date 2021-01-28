require("./style-utils/style_pxToEm");
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
const deviceH = Dimensions.get('screen').height;
const windowH = Dimensions.get('window').height;
const bottomNavBarH = deviceH - windowH;

export const projectPalette = {
  bodyBackground: "#fff", // General app  background (overriding palette)
  primary: "#1AC0C6",
  primaryOutline: "#15a6ac",
  primaryPressed: "#15a6ac",
  secondary: "#2C2736",
  text: "#333",
  link: "#2e7bf7",
  danger: "#fe4948",
};

//= = Other Variables
const insets = {
  ...initialWindowMetrics?.insets||{},
  bottom: Platform.select({
    android: initialWindowMetrics?.insets.bottom  - bottomNavBarH,
    ios: initialWindowMetrics?.insets.bottom,
  }),
  top: Platform.select({
    // android: initialWindowMetrics.insets.top  - StatusBar.currentHeight, // if you don't use a transparent status bar the height gets included
    android: initialWindowMetrics?.insets.top,
    ios: initialWindowMetrics?.insets.top,
  }),
};

export const projectStyles = {
  insets,
  bottomNavPadding: 80 + (insets.bottom || 0),

  //= = Typography
  fontSizeBase: em(1), //16px
  fontSizeSmall: em(0.8), //14px
  fontSizeH1: em(2), // 32px
  fontSizeH2: em(1.5), // 24px
  fontSizeH3: em(1.25), // 20px
  fontSizeH4: em(1), // 16px

  normalFontFamily: Platform.select({ ios: "System", android: "System" }),
  italicFontFamily: Platform.select({ ios: "System", android: "System" }),
  boldFontFamily: Platform.select({ ios: "System", android: "System" }),
  buttonFontFamily: Platform.select({ ios: "System", android: "System" }),

  // Buttons
  buttonHeight: 44,

  // Grid
  marginBaseVertical: 15,
  marginBaseHorizontal: 10,
  paddingBase: 15,
  gutterBase: 10,

  // Inputs
  inputFontSizeBase: em(1), //16px
  inputHeight: 44,

};

global.palette = projectPalette;
global.styleVariables = projectStyles;

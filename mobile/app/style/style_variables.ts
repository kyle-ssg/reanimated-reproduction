require('./style-utils/style_pxToEm')
import { Dimensions, Platform } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'
const deviceH = Dimensions.get('screen').height
const windowH = Dimensions.get('window').height
const bottomNavBarH = deviceH - windowH

export const projectPalette = {
  bodyBackground: '#fff', // General app  background (overriding palette)
  primary: '#1AC0C6',
  primaryOutline: '#15a6ac',
  primaryPressed: '#15a6ac',
  secondary: '#2C2736',
  text: '#333',
  link: '#2e7bf7',
  danger: '#fe4948',
}

//= = Other Variables
const insets = {
  ...initialWindowMetrics?.insets||{},
  frame: initialWindowMetrics.frame,
  bottom: Platform.select({
    android: (initialWindowMetrics?.insets.bottom||0)  - bottomNavBarH,
    ios: initialWindowMetrics?.insets.bottom,
  }),
  top: Platform.select({
    // android: initialWindowMetrics.insets.top  - StatusBar.currentHeight, // if you don't use a transparent status bar the height gets included
    android: Math.max(initialWindowMetrics?.insets.top||0,ReactNative.StatusBar.currentHeight),
    ios: initialWindowMetrics?.insets.top,
  }),
};
export const projectStyles = {
  insets,
  bottomNavPadding: 80 + (insets.bottom || 0),
  defaultStatusBarColour: 'dark-content',
  //= = Typography
  fontSizeBase: em(1), //16px
  fontSizeSmall: em(0.8), //14px
  fontSizeH1: em(2), // 32px
  fontSizeH2: em(1.45), // 24px
  fontSizeH3: em(1.25), // 20px
  fontSizeH4: em(1), // 16px
  fontSizeH5: em(0.8),

  normalFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  italicFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  boldFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  buttonFontFamily: Platform.select({ ios: 'System', android: 'System' }),

  // Buttons
  buttonHeight: 48,

  // Border Radius
  baseBorderRadius: 6,
  BorderRadiusXL: 18,

  // Grid
  marginBaseVertical: 15,
  marginBaseHorizontal: 10,
  paddingBase: 15,
  gutterBase: 10,

  // Inputs
  inputFontSizeBase: em(1), //16px
  inputHeight: 44,
}

global.palette = projectPalette
global.styleVariables = projectStyles

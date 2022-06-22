import em from './style-utils/style_pxToEm'
import { Platform } from 'react-native'

export const palette = {
  bodyBackground: '#fff', // General app  background (overriding palette)
  primary: '#1AC0C6',
  primaryOutline: '#15a6ac',
  primaryPressed: '#15a6ac',
  secondary: '#2C2736',
  secondaryPressed: '#26222f',
  text: '#333',
  backdrop: 'rgba(0,0,0,.2)',
  link: '#2e7bf7',
  success: '#1AC0C6',
  textHighlight: '#1AC0C6',
  danger: '#fe4948',
}

export type TProjectPalette = typeof palette

export const styleVariables = {
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

// @ts-ignore
global.styleVariables = styleVariables
// @ts-ignore
global.palette = palette

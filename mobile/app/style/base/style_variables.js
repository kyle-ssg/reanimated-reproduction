/**
 * Created by kylejohnson on 18/04/2016.
 */
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const em = require('./style_pxToEm');
let deviceH = Dimensions.get('screen').height;
// the value returned does not include the bottom navigation bar, I am not sure why yours does.
let windowH = Dimensions.get('window').height;
let bottomNavBarH = deviceH - windowH;

global.palette = {
  bodyBackground: '#fff', // General app  background
  primary: 'rgb(10,132,255)',
  primaryPressed: 'rgb(0,109,217)',
  secondary: 'rgb(255,55,95)',
  secondaryPressed: 'rgb(236,50,86)',

  ...global.palette };

//= = Other Variables

export const styleVariables =  global.styleVariables = {
  insets: {
    ...initialWindowMetrics.insets||{},
    bottom: Platform.select({
      android: initialWindowMetrics?.insets.bottom  - bottomNavBarH,
      ios: initialWindowMetrics?.insets.bottom,
    }),
    top: Platform.select({
      // android: initialWindowMetrics.insets.top  - StatusBar.currentHeight, // if you don't use a transparent status bar the height gets included
      android: initialWindowMetrics?.insets.top,
      ios: initialWindowMetrics?.insets.top,
    })
  },

  // Buttons
  buttonHeight: 44,

  // Grid
  marginBaseVertical: 15,
  marginBaseHorizontal: 10,
  paddingBase: 15,
  gutterBase: 10,
  borderWidth: 1,
  borderBottomWidth: StyleSheet.hairlineWidth*2,



  //= = Typography
  fontSizeBase: em(1), //16px
  fontSizeH1: em(2), // 32px
  fontSizeH2: em(1.5), // 24px
  fontSizeH3: em(1.25), // 20px
  fontSizeH4: em(1), // 16px
  normalFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  italicFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  boldFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  buttonFontFamily: Platform.select({ ios: 'System', android: 'System' }),

  ...global.styleVariables };

global.colour = { ...palette, ...global.colour };

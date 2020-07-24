/**
 * Created by kylejohnson on 18/04/2016.
 */
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const em = require('../base/style_pxToEm');
let deviceH = Dimensions.get('screen').height;
// the value returned does not include the bottom navigation bar, I am not sure why yours does.
let windowH = Dimensions.get('window').height;
let bottomNavBarH = deviceH - windowH;

global.palette = { bodyBackground: '#fff', // General app  background
    primary: 'rgb(10,132,255)',
    secondary: 'rgb(255,55,95)',
    success: 'rgb(48,209,88)',
    divider: 'rgb(229,229,234)',
    textLight: 'rgb(174,174,178)',
    iconFaint: 'rgb(229,229,234)',
    text: 'rgb(28,28,30)',
    ...global.palette };

//= = Other Variables

global.styleVariables = {
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

    //= = Typography
    fontSizeBase: em(1), //16px
    fontSizeH1: em(2), // 32px
    fontSizeH2: em(1.5), // 24px
    fontSizeH3: em(1.25), // 20px
    fontSizeH4: em(1), // 16px

    // Buttons
    buttonHeight: 44,

    // Inputs
    fontSizeInputLarge: em(2),

    // Grid
    marginBaseVertical: 15,
    marginBaseHorizontal: 10,
    paddingBase: 15,
    gutterBase: 10,
    borderWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth*2,
    disabledOpacity: 0.2,
    borderRadiusDefault: 2,

    // font weights and family
    normalFontWeight: 'normal',
    boldFontWeight: 'bold',
    buttonFontWeight: 'bold',

    normalFontFamily: Platform.select({ ios: 'System', android: 'System' }),
    italicFontFamily: Platform.select({ ios: 'System', android: 'System' }),
    boldFontFamily: Platform.select({ ios: 'System', android: 'System' }),
    buttonFontFamily: Platform.select({ ios: 'System', android: 'System' }),

    ...global.styleVariables };

global.colour = { ...palette,
    iosStyle: 0,
    buttonActiveOpacity: 0.8,
    disabledOpacity: 0.8,
    bodyBackground: '#ffffff', // General app  background
    backdropBackground: 'rgba(0,0,0,0.2)',

    // text
    text: palette.text, // General app text colour
    anchor: palette.anchor, // General app text colour
    textLight: palette.textLight, // General app text colour
    label: palette.textLightest, // text color for labels

    // input
    input: palette.text,
    inputBackground: '#fff',
    inputBorder: palette.divider,
    placeholderTextColor: palette.textLight,
    disabledText: palette.textLight,

    // list items
    listBackground: 'white',
    listBackgroundAlt: '#f9f9fa',
    listItemNav: '#d9d9d9',
    listItemDivider: palette.divider,

    dividerAlt: palette.secondary,

    // Loader.js
    loader: palette.text,

    // BUTTON / SELECT COLOURS

    buttonDefault: palette.primary,
    btnAlt: palette.primary,

    modalBackground: 'white',

    panel: '#f1f1f1',

    // nav
    navBar: palette.primary,
    navBarIcon: 'white',
    // navBarSubtitle: palette.secondary,
    navBarButtonText: 'white',
    navBarBorder: 'transparent',
    navBarText: 'black',
    alert: 'red',
    avatar: '#dbdbdb',

    facebook: '#3b5998',
    twitter: '#1DA1F3',
    google: '#dd4b39',
    ...global.colour };

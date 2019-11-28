require('../base/style_pxToEm');


global.pallette = {
    bodyBackground: '#fcfbfa', // General app  background
    panelBackground: '#f7f4f3', // General app  background
    primary: '#d11f25',
    primaryDark: '#a90000',
    secondary: '#27323e',
    iconColor: '#007fa3',
    success: '#3CBF88',
    brandThird: '#7d00a1',
    divider: '#cdcdcd',
    dividerLight: '#ebe7e6',
    textDark: '#171717',
    borderColor: '#d7dce1',
    textLight: '#8d97a4',
    textMid: '#707c8c',
    textMidDark: '#657180',
    text: '#28323f',
    textAlt: '#394657',
    textAlt2: '#415062',
    switchTint: '#0080a1',
    navBarText: 'white',
    navBarIcon: 'white',
    navBarSubtitle: '#a8a8a8',
    navBarBackground: '#222',
    tabIcon: '#222',
    tabText: '#222',
    tabIconActive: '#ff0000',
    tabTextActive: '#ff0000',
    linkBlue: '#4b8cdc',
    racingPostLightGray: '#d0cece',
    racingPostDarkGray: '#bfbfbf',
    bookmakerPrimary: '#279547',
    bookmakerPrimaryDark: '#004834',
};

global.styleVariables = {

    // normalFontFamily: Platform.select({ ios: 'Helvetica', android: 'ProximaNovaA-Regular' }),
    // italicFontFamily: Platform.select({ ios: 'ProximaNovaA-RegularIt', android: 'ProximaNovaA-RegularIt' }),
    // semiboldFontFamily: Platform.select({ ios: 'Proxima Nova Alt', android: 'ProximaNovaA-Semibold' }),
    // boldFontFamily: Platform.select({ ios: 'Proxima Nova Alt', android: 'ProximaNovaA-Bold' }),

    // eslint-disable-next-line import/no-unresolved
    ...require('./style_platform_variables') };

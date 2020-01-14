require('../base/style_pxToEm');


global.pallette = {
    bodyBackground: '#fff', // General app  background
    // tabs
    navBarText: 'black',
    navBarIcon: 'black',

    tabIcon: '#666666',
    tabText: 'white',
    tabIconActive: 'white',
    tabTextActive: 'white',
    tabBackground: '#2d2d2d',
    tabActive: 'white',
    danger: '#fe4948',
};

global.styleVariables = {

    // normalFontFamily: Platform.select({ ios: 'Helvetica', android: 'ProximaNovaA-Regular' }),
    // italicFontFamily: Platform.select({ ios: 'ProximaNovaA-RegularIt', android: 'ProximaNovaA-RegularIt' }),
    // semiboldFontFamily: Platform.select({ ios: 'Proxima Nova Alt', android: 'ProximaNovaA-Semibold' }),
    // boldFontFamily: Platform.select({ ios: 'Proxima Nova Alt', android: 'ProximaNovaA-Bold' }),

    // eslint-disable-next-line import/no-unresolved
    ...require('./style_platform_variables') };

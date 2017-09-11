import {NativeModules,PixelRatio} from 'react-native';
var em = require('../base/style_pxToEm');
window.pallette = {
    backgroundBase: '#ffffff',

    primaryBlue:'#368de8',
    primaryBlueLight:'#61aaff',
    primaryGreen:'#03bd69',
    primaryGreenLight:'#00d5ac',

    blueGrey:'#ced6e4',
    blueGreyDark:'#8796ab',

    blueGreyText:'#848d99',
    blueGreyDarkText:'#313c4a',

    facebook:'#3b5998',
    google:'#e83d38',
    twitter:'#00acee',

    primary: '#368de8',
    primaryLight: '#7e8592',
    primaryLightest: '#7e8592',
    secondary: '#03bd69',
    third: '#c84d38',

    text: '#555',
    textLight: '#a8a8a8',
    textLightest: '#fff',
    textLightestHighlight: '#e2e2e2',
    divider: '#d1d1d1',
    dividerLight: '#f9f9fa',

    error: '#b94d4d',

    fromGradient:'#fafafa',
    toGradient:'#fff',
    anchor: '#7e8592'
};

window.colour = {
    errorBackground: '#c84d38',
    bodyBackground: '#fff', //General app  background
    bodyBackgroundAlt: '#f1f1f1', //General app  background
    btnDefault: pallette.primaryGreen,
    inputBackground:'#e4e7f2',
    inputBorder:pallette.blueGrey,
    textFaint:'rgba(255,255,255,.75)',
    textFaintLight:'rgba(0,0,0,.2)',

    navBarSubtitle: pallette.blueGrey,
};

window.styleVariables =  Object.assign({
    //SCAFFOLD
    statusHeight: NativeModules.StatusBarManager.HEIGHT || 20,
    baseNavHeight: 54,
    marginBaseVertical: em(1),
    marginBaseHorizontal: em(1),
    paddingBase: em(1),
    paddingList: em(1.1),
    gutterBase: 10,
    borderRadiusDefault: 4,
    fontSizeH1: em(2.286),
    fontSizeH2: em(1.75),
    fontSizeH3: em(1.25),

    //BASE
    borderWidth: 2 / PixelRatio.get(),
    borderDefault: pallette.textLight,

    //TYPE
    fontSizeBase: em(1.2),
    fontSizeSmall: em(0.85),
    fontSizeHeading: em(1.5),
    fontSizeSubHeading: em(1.3),

    fontSizeIcon: 30,

    fontSansSerif: 'helvetica neue',

    text: pallette.text, //General app text colour
    textLight: pallette.textLight, //Light app text colour

    //FORMS
    inputHeight: 44, //Need to change this value in both platform variables files at the moment
    inputText: pallette.text,
    inputBackground: pallette.backgroundBase,
    inputBorder: pallette.textLightest,
    placeholderTextColor: pallette.blueGreyDark,

    //NAV
    navBar: pallette.primaryBlue,
    navBarIcon: pallette.textLight,
    navBarButtonText: pallette.text,
    navBarBorder: pallette.primary,
    navBarText: pallette.white,

    //MODALS
    modalBackground: '#F0F0F0',


    //BUTTONS
    button: 50,

    buttonPrimary: pallette.primary,
    buttonTextLight: pallette.textLight
}, require('./style_platform_variables'));

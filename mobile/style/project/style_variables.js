window.pallette = {
    backgroundBase: '#ffffff',

    primary: '#2f8cfe',
    secondary: '#f5f5f5',

    text: '#222222',
    textLight: '#f0f0f0',
    textLightest: '#a8a8a8',
    textLightestHighlight: '#e2e2e2',
    divider: '#a8a8a8',

    error: '#f2dede',
};

window.colour = {
    bodyBackground: '#fafafa', //General app  background

}

window.styleVariables =  Object.assign({
    //SCAFFOLD
    statusHeight: NativeModules.StatusBarManager.HEIGHT || 20,
    baseNavHeight: 54,
    marginBaseVertical: 10,
    marginBaseHorizontal: 10,
    paddingBase: 10,
    gutterBase: 10,
    borderRadiusDefault: 8,

    //BASE
    borderWidth: 2 / PixelRatio.get(),
    borderDefault: pallette.textLight,

    //TYPE
    fontSizeBase: em(1.2),

    fontSizeSmall: em(0.5),
    fontSizeHeading: em(1.5),
    fontSizeSubHeading: em(1.3),

    fontSizeIcon: 34,

    fontSansSerif: 'helvetica neue',

    text: pallette.text, //General app text colour
    textLight: pallette.textLight, //Light app text colour

    //FORMS
    inputHeight: 50, //Need to change this value in both platform variables files at the moment
    inputText: pallette.text,
    inputBackground: pallette.backgroundBase,
    inputBorder: pallette.textLightest,

    //NAV
    navBar: pallette.primary,
    navBarIcon: pallette.textLight,
    navBarButtonText: pallette.text,
    navBarBorder: pallette.primary,
    navBarText: pallette.white,

    //MODALS
    modalBackground: '#F0F0F0',


    //BUTTONS
    buttonHeight: 50,

    buttonPrimary: pallette.primary,
    buttonTextLight: pallette.textLight
}, require('./style_platform_variables'));

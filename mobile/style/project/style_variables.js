window.pallette = {
  backgroundBase:'#ffffff',

  primary: '#e6764f',
  primaryDark: '#cb572e',
  primaryLight: '€f1a083',

  //secondary
  secondary: '#e6764f',

  text: '#222222',
  textLight: '#6c6c6c',
  textLightest: '#a8a8a8',
  textLightestHighlight: '#e2e2e2',
  buttonText: '#222222',
  divider: '#a8a8a8',

  error:'#f2dede',
  errorBorder:'#f2dede',
  errorText:'#a94442'
},

window.base = {
  //SCAFFOLD
  baseNavHeight: 44,
  marginBaseVertical: 10,
  marginBaseHorizontal: 10,
  paddingBase: 10,
  gutterBase: 10,

  //BASE
  borderWidth: 2 / PixelRatio.get(),

  //TYPE
  fontSizeBase:em(1),
  fontSizeHeading: em(1.5),
  fontSizesubheading: em(1.2),

  fontSizeH1: em(1.5),
  fontSizeH2: em(1.3),
  fontSizeH3: em(1.2),
  fontSizeIcon: 24,

  fontSansSerif: 'helvetica neue',

  text: pallette.text, //General app text colour
  textLight: pallette.textLight, //General app text colour

  //FORMS
  inputText: pallette.text,
  inputBackground: pallette.backgroundBase,
  inputBorder: pallette.textLightest,

  //NAV
  navBar: 'red',
  navBarIcon: pallette.text,
  navBarButtonText: pallette.text,
  navBarBorder: 'red',
  navBarText: 'red',

  //MODALS
  modalBackground:'#F0F0F0'
}


/**
 * Created by kylejohnson on 18/04/2016.
 */

// need to require platform specific variables here

//
// Variables
// --------------------------------------------------

//== Colors
//
//## Gray and brand colors for use across app.

window.pallette = {

  //primary
  primary: '#faaf3b',
  primaryDark: '#f79529',
  primaryLight: '#AD70EC',

  //secondary

  secondary: '#0a3a81',

  cancel: '#acafb7',
  cancelDark: '#7c828f',

  //text

  text: '#333',
  textLight: '#333',
  textLightest: '#B6B6B6',
  textLightestHighlight: '#CDCDCD',
  buttonText: 'white',
  divider: '#dbdbdb',

  //radio, checkbox switch etc

  toggle: '#B6B6B6',
  toggleAlt: '#CDCDCD',
  toggleActive: '#3CBF88',
  toggleActiveAlt: '#46D899',


  grayLighter: '#eaeaea',
  warning: '#DE000B',
  warningText: '#fff',
  dark: '#333',
  white: '#fff',
  brandDanger: '#d9534f',
  success: '#3CBF88',

  anchor: '#0066ff'

};

//== Other Variables

window.styleVariables = Object.assign({

  //== Typography
  //
  //## Font, line-height, and color for body text, headings, and more.
  inputHeightLarge: 54,
  fontSansSerif: 'helvetica',
  fontSerif: 'helvetica',
  fonstSizeParagraph: 1.1,
  fontSizeAnchor: 1.1,
  fontSizeHeading: 1.7,
  fontSizesubheading: 1.2, //18px
  fontSizeH1: 2.286, //32px
  fontSizeH2: 1.2, //18px
  fontSizeH3: 0.714, //10px
  fontSizeNote: 0.786, //11px
  fontSizelistitem: 0.714, //10px
  fontSizelistTitle: 0.857, //12px
  fontSizeInputLarge: 24,
  fontSizeAlert: 14,
  fontSizeIcon: 24,
  heroFontSize: 64,
  headingsFontWeight: 'bold',
  mediumFontWeight: '300',
  fontSizeAnchorIcon: 24,

  fontSizeAnchorLarge: 24,
  fontSizeAnchorIconLarge: 32,

  button: 44,
  buttonLarge: 54,

  //== Components
  logoSize: 100,
  //
  //## Define common padding and border radius sizes and more.

  baseNavHeight: 44,
  marginBaseVertical: 10,
  marginBaseHorizontal: 10,
  paddingBase: 10,
  gutterBase: 5,
  borderWidth: 1,
  borderBottomWidth: 2 / PixelRatio.get(),
  disabledOpacity: 0.2,

  //## Images

  baseImageHeight: 200,
  baseImageWidth: 200,

  //## Notifications

  notificationWidth: 18,
  notificationHeight: 18,
  notificationBorderRadius: 12,
  notificationFontSize: 9,

  //Avatars
  avatarWidth: 64,
  avatarHeight: 64,
  avatarRadius: 32,

  avatarSmallWidth: 32,
  avatarSmallHeight: 32,
  avatarSmallRadius: 16,

  //Posts
  postWidth: 500,
  postHeight: 500,
}, require('./style_platform_variables'));

window.colour = Object.assign({}, pallette, {
  iosStyle: 0,
  buttonActiveOpacity: 0.8,
  disabledOpacity: 0.8,
  bodyBackground: '#f1f1f1', //General app  background
  backdropBackground: 'rgba(0,0,0,0.2)',

  //text
  text: pallette.text, //General app text colour
  textLight: pallette.textLight, //General app text colour
  label: pallette.textLightest, //text color for labels

  //input
  input: pallette.text,
  inputBackground: '#fff',
  inputBorder: pallette.divider,
  placeholderTextColor: pallette.textLight,
  disabledText: pallette.textLight,

  //radio
  radio: '#ffffff',
  radioBorder: pallette.toggle,
  radioText: pallette.text,
  radioTextActive: pallette.text, //text color for labels
  radioActive: pallette.toggleActive,
  radioActiveBorder: pallette.toggleActive,

  //tabs
  tabIcon: pallette.primaryDark,
  tabBackground: 'white',
  tabLine: pallette.divider,
  tabActive: pallette.primary,
  tabText: pallette.text,

  //notifications
  notification: pallette.primary,
  notificationText: '#fff',

  //switch
  switch: pallette.toggle,
  switchBackground: pallette.toggleAlt,
  switchActive: pallette.toggleActive, //text color for labels
  switchActiveBackground: pallette.toggleActiveAlt, //text color for labels

  //Menu.js
  menuDivider: pallette.divider,
  menu: pallette.secondary,
  menuItemText: pallette.text,

  // list items
  listBackground: 'white',
  listItem: 'white',
  listItemDivider: pallette.divider,

  dividerAlt: pallette.secondary,

  // Loader.js
  loader: pallette.text,

  //BUTTON / SELECT COLOURS
  btnText: pallette.buttonText,
  btnDefault: pallette.primary,
  btnAlt: pallette.primary,

  modalBackground: 'white',

  panel: 'white',

  //nav
  navBar: pallette.secondary,
  navBarIcon: 'white',
  navBarButtonText: 'white',
  navBarBorder: 'transparent',
  navBarText: 'white',
  alert: 'red',
  avatar: "#dbdbdb",

  facebook: '#3b5998'

});

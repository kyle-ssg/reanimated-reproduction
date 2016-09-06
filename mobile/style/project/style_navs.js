module.exports = {

  navBar: {
    backgroundColor: base.navBar
  },

  bar: {
    padding: base.paddingBaseLarge,
    backgroundColor: colour.secondary
  },
  barText: {
    fontWeight: 'bold',
    color: base.text,
    fontSize: base.fontSizeSmall
  },

  //TILED NAV
  tileContainer: {},

  navTile: {
    width: DeviceWidth / 2,
    height: DeviceWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1 / PixelRatio.get() * 2,
    borderBottomWidth: 1 / PixelRatio.get() * 2,
    borderColor: base.borderDefault
  },

  navBarTitle: {
    fontSize: em(styleVariables.fontSizeH2),
    fontWeight: styleVariables.headingsFontWeight,
    color: base.text
  },

  navButton:{
    color:base.navBarIcon,
    marginLeft: 10,
    marginBottom: -5,
    marginRight: 10
  },

  navTileActive: {
    backgroundColor: pallette.primaryLight
  },

  navTile0: {
    borderRightWidth: 1 / PixelRatio.get() * 2
  },
  navTile2: {
    borderLeftWidth: 1 / PixelRatio.get() * 2
  },

  tileTitle: {
    fontSize: em(1.25),
    color: pallette.primary,
    letterSpacing: 1
  },

  tileTitleActive: {
    color: pallette.text
  }
};

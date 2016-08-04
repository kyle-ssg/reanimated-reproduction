module.exports = {

  navBar: {
    backgroundColor: base.primaryBlue
  },

  bar: {
    padding: base.paddingBaseLarge,
    backgroundColor: colour.secondary
  },
  barText: {
    fontWeight: 'bold',
    color: pallette.pallette,
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

  navTileActive: {
    backgroundColor: base.primaryBlue
  },

  navTile0: {
    borderRightWidth: 1 / PixelRatio.get() * 2
  },
  navTile2: {
    borderLeftWidth: 1 / PixelRatio.get() * 2
  },

  tileTitle: {
    fontSize: em(1.25),
    color: base.primaryBlue,
    letterSpacing: 1
  },

  tileTitleActive: {
    color: base.white
  },

  tileSub: {
    fontSize: em(0.6),
    color: base.actionOrangeDark
  },

  tileDash: {
    backgroundColor: base.primaryBlue,
    height: 5,
    width: 25,
    marginTop: 15
  },

  tileDashActive: {
    backgroundColor: base.actionOrangeDark
  }
};

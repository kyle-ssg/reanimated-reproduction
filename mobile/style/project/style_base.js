module.exports = {
  baseWhite: {
    backgroundColor: 'white'
  },
  baseBlue: {
    backgroundColor: base.primaryBlue
  },
  baseBlueLight: {
    backgroundColor: base.primaryLight
  },

  padded: {
    padding: base.paddingBase
  },
  noPadding: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  anchor: {
    color: base.textLight,
    fontSize: base.fontSizeSmaller
  },

  ctaRow: {
    marginTop: base.paddingBaseSmaller,
    marginBottom: base.paddingBaseSmaller
  },

  textRow: {
    paddingBottom: base.paddingBase
  },

  anchorWhite: {
    color: base.white
  },

  anchorBlue: {
    color: base.primaryBlue
  },

  anchorSmall: {
    fontSize: em(0.55)
  },

  heroPanel: {
    paddingTop: base.paddingBaseLarge,
    paddingBottom: base.paddingBaseLarge
  },

  //LANDINGPAGE
  greeting: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    paddingBottom: 30,
    paddingLeft: 20
  },

  whiteBar: {
    backgroundColor: 'white',
    height: 35
  },
  blueBar: {
    backgroundColor: base.baseBlueLight,
    height: 60
  },

  logoPanel: {
    width: DeviceWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: (DeviceWidth / 2) - (DeviceWidth / 4),
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10
  },

  logo: {
    width: (DeviceWidth / 2) - 30,
    resizeMode: 'contain'
  },
  logoTagline: {
    color: 'white',
    fontSize: 8
  },

  //ICONS

  iconDefault: {
    height: 30,
    resizeMode: 'contain'
  },

  iconButton: {
    height: 25,
    resizeMode: 'contain'
  },

  dropListIcon: {
    fontSize: em(1.2),
    color: base.white
  },

  //ERRORS

  errorContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 90,
    marginBottom: 20
  },

  prependError: {
    backgroundColor: '#E2747D',
    width: 50,
    height: 90,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  prependText: {
    fontSize: em(2),
    fontWeight: 'bold',
    color: 'white'
  }
}

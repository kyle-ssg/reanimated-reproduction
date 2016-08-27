module.exports = {

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

  textRow: {
    paddingBottom: base.paddingBase
  },

  anchorSmall: {
    fontSize: em(0.55)
  },

  heroPanel: {
    paddingTop: base.paddingBase * 2,
    paddingBottom: base.paddingBase * 2
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
    backgroundColor: pallette.error,
    borderRadius: 8,
    borderColor: pallette.errorBorder,
    color:pallette.errorText
  }
};

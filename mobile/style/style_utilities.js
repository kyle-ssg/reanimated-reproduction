require('./style_pxToEm');

module.exports = {
  // Utility classes
  // -------------------------

  right: {
    alignSelf: 'flex-end',
    margin: 5,
  },

  center: {
    textAlign: 'center'
  },

  centerChildren: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  opaque: {
    backgroundColor: pallette.white
  },

  price: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: colour.btnDefault,
  },

  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height,
  },

  backdrop: {
    flex: 1,
    backgroundColor: styleVariables.backdropBackground
  }

};

module.exports = {
  // Utility classes
  // -------------------------

  center: {
    textAlign: 'center'
  },

  centerChildren: {
    justifyContent: 'center',
    alignItems: 'center'
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

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;

// We set our base font size value
const baseUnit = 22;
// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
window.em = function (value) {
  return unit * value;
};

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

import em from './style_pxToEm';
const style:Record<string, ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle> = {

  button: {
    height: styleVariables.buttonHeight,
  },

  buttonText: {
    fontFamily: styleVariables.buttonFontFamily,
    backgroundColor: 'transparent',
    color: 'white',
  },

  buttonGroupPressed: {
    backgroundColor: palette.primaryPressed,
  },

  buttonGroupSecondaryPressed: {
    backgroundColor: palette.secondaryPressed,
  },

  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary,
    height: styleVariables.buttonHeight,
  },

};

module.exports = style;

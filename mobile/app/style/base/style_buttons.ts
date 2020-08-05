require('./style_pxToEm');
const style: Record<
string,
ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  button: {
    height: styleVariables.buttonHeight,
  },

  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: styleVariables.buttonFontWeight,
    fontFamily: styleVariables.buttonFontFamily,
    backgroundColor: 'transparent',
    color: 'white',
  },

  buttonIcon: {
    fontSize: em(1),
    color: 'white',
    marginRight: 10,
  },

  buttonIconRight: {
    marginLeft: 10,
    marginRight: 0,
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

  buttonGroupLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  buttonGroupRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
};

module.exports = style;

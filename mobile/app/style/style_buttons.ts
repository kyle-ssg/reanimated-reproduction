// eslint-disable-next-line @typescript-eslint/no-unused-vars
import asStyle from './style-utils/asStyle';
export default asStyle({
  button: {
    height: styleVariables.buttonHeight,
  },

  buttonPrimary: {
    backgroundColor: palette.primary,
  },

  buttonPrimaryPressed: {
    backgroundColor: palette.primary,
  },

  buttonSecondary: {
    backgroundColor: palette.secondary,
  },

  buttonSecondaryPressed: {
    backgroundColor: palette.secondary,
  },

  buttonTertiary: {
    backgroundColor: 'white',
    borderColor: palette.primary,
    borderWidth: 1,
  },
  buttonTertiaryPressed: {
    backgroundColor: '#eaeaea',
  },

  buttonText: {
    fontFamily: styleVariables.buttonFontFamily,
    backgroundColor: "transparent",
    color: "white",
  },

  buttonTextText: {
    color: palette.primary
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonGroup: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.primary,
    height: styleVariables.buttonHeight,
  },
  buttonGroupPressed: {
    backgroundColor: palette.secondary,
  },

  buttonTertiaryText: {
    color: palette.primary,
  },
  buttonPrimaryText: {
    color: 'white',
  },

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import asStyle from './style-utils/asStyle';
export default asStyle({
  button: {
    height: styleVariables.buttonHeight,
  },

  buttonPrimary: {
    backgroundColor: palette.primary,
  },
  buttonOutlinePrimary: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: palette.primaryOutline
  },

  buttonOutlinePrimaryText: {
    color: palette.primary
  },

  buttonOutlinePrimaryPressedText: {
    color: palette.primaryPressed
  },

  buttonOutlinePrimaryPressed: {
    borderColor: palette.primary
  },

  buttonLink: {
    backgroundColor: "transparent",
    height: "auto",
  },

  buttonLinkText: {
    color: palette.primary
  },

  buttonLinkPressedText: {
    color: palette.primaryPressed
  },

  buttonLinkPressed: {
    borderColor: palette.primary
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
    overflow:"hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.primary,
    borderRadius: styleVariables.borderRadius,
    height: styleVariables.buttonHeight,
  },
  buttonGroupPressed: {
    backgroundColor: palette.primaryPressed,
  },

  buttonTertiaryText: {
    color: palette.primary,
  },
  buttonPrimaryText: {
    color: 'white',
  },

});

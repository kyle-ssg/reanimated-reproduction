import asStyle from "../asStyle";

export default asStyle({
  button: {
    height: styleVariables.buttonHeight,
  },

  buttonPrimary: {
    backgroundColor: "#ddd",
    borderRadius: styleVariables.buttonRadius,
  },

  buttonSecondary: {
    borderRadius: styleVariables.buttonRadius,
  },

  buttonPrimaryPressed: {
    backgroundColor: palette.primaryPressed,
  },

  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    // fontWeight: styleVariables.buttonFontWeight,
    fontFamily: styleVariables.buttonFontFamily,
    backgroundColor: "transparent",
    color: "white",
  },

  buttonIcon: {
    fontSize: em(1),
    color: "white",
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

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonGroup: {
    alignItems: "center",
    justifyContent: "center",
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
});

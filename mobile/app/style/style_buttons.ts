// eslint-disable-next-line @typescript-eslint/no-unused-vars
import asStyle from './style-utils/asStyle'
import { palette, styleVariables } from './style_variables'

export default asStyle({
  button: {
    height: styleVariables.buttonHeight,
  },

  buttonPrimary: {
    backgroundColor: palette.primary,
  },
  buttonOutlinePrimary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: palette.primaryOutline,
  },

  buttonOutlinePrimaryText: {
    color: palette.primary,
  },

  buttonOutlinePrimaryPressedText: {
    color: palette.primaryPressed,
  },

  buttonOutlinePrimaryPressed: {
    borderColor: palette.primary,
  },

  buttonLink: {
    backgroundColor: 'transparent',
    height: 'auto',
  },

  buttonLinkText: {
    color: palette.primary,
  },

  buttonLinkPressedText: {
    color: palette.primaryPressed,
  },

  buttonLinkPressed: {
    borderColor: palette.primary,
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

  buttonSecondaryText: {},
  buttonSecondaryTextPressed: {},

  buttonTertiary: {
    backgroundColor: 'white',
    borderColor: palette.primary,
    borderWidth: 1,
  },

  buttonDanger: {
    borderColor: palette.danger,
    borderRadius: styleVariables.baseBorderRadius,
    borderWidth: 1,
  },

  buttonDangerText: {
    color: palette.danger,
    fontSize: styleVariables.fontSizeH2,
  },

  buttonTertiaryPressed: {
    backgroundColor: '#eaeaea',
  },

  buttonText: {
    fontFamily: styleVariables.normalFontFamily,
    backgroundColor: 'transparent',
    color: 'white',
  },

  buttonTextText: {
    color: palette.primary,
    fontSize: styleVariables.fontSizeH2,
  },

  buttonTextPressed: {},

  buttonNav: {},

  buttonSmallText: {
    fontSize: styleVariables.fontSizeH4,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonGroup: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary,
    borderRadius: styleVariables.baseBorderRadius,
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
    fontSize: styleVariables.fontSizeH2,
  },
})

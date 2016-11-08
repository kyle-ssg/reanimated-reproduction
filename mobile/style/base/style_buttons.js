module.exports = {


  button: {
    height:styleVariables.buttonHeight
  },

  actionButton: {
    borderRadius: 0,
    backgroundColor: '#4A4A4A'
  },

  imageBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },

  //Button

  buttonText: {
    color: colour.btnText,
    fontWeight: styleVariables.mediumFontWeight,
    fontSize: styleVariables.fontSizeBase
  },

  //example variation
  buttonGroupWarning: {
    backgroundColor: colour.warning
  },

  buttonTextWarning: {
    color: colour.warningText
  },

  //Other variation
  buttonGroupLarge: {
    height: styleVariables.buttonTall
  },

  buttonTextLarge: {
    fontSize: styleVariables.fontSizeIcon
  },

  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colour.btnDefault,
    borderRadius: styleVariables.paddingBase,
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase,
    height: styleVariables.button
  },

  buttonGroupCenter: {
    borderRadius: 0
  },

  buttonGroupFooter: {
    borderRadius: 40
  },
  buttonGroupLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonGroupRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  buttonPrimary:{
    backgroundColor:styleVariables.buttonPrimary
  },

  buttonTextLight:{
    color:styleVariables.buttonTextLight,
    fontSize: styleVariables.fontSizeBase
  },

};

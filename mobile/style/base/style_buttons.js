module.exports = {


  button: {
    height:styleVariables.buttonHeight
  },

  //Button

  buttonText: {
    color: colour.btnText,
    fontWeight: styleVariables.mediumFontWeight,
    fontSize: styleVariables.fontSizeBase
  },

  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colour.btnDefault,
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase,
    height: styleVariables.button
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

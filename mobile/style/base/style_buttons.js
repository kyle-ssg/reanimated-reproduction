module.exports = {


    button: {
        height: styleVariables.buttonHeight
    },

    buttonFacebook: {
        backgroundColor: colour.facebook
    },

    buttonGoogle: {
        backgroundColor: colour.google
    },

    //Button

    buttonWithIcon: {
        flexDirection:'row',
        alignItems:'center',
    },

    buttonText: {
        backgroundColor:'transparent',
        color: colour.btnText,
        fontWeight: styleVariables.mediumFontWeight,
        fontSize: styleVariables.fontSizeBase
    },

    buttonIcon:{
        fontSize:styleVariables.fontSizeBase * 2,
        marginRight:styleVariables.paddingBase,
    },

    buttonSup:{
        fontSize:styleVariables.fontSizeBase / 2,
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

    buttonPrimary: {
        backgroundColor: styleVariables.buttonPrimary
    },

    buttonTextLight: {
        color: styleVariables.buttonTextLight,
        fontSize: styleVariables.fontSizeBase
    },

};

module.exports = {

    text: {
    	backgroundColor: 'transparent',
        color: colour.text,
        fontSize: styleVariables.fontSizeBase,
        fontFamily: 'helvetica',
    },

    h1: {
        marginBottom: styleVariables.marginBaseVertical * 2,
    },

    h2: {
        fontWeight: '400',
    },

    paragraph: {
        marginBottom: styleVariables.marginBaseVertical,
    },

    textSmall: {
        fontSize: styleVariables.fontSizeSmall,
    },

    textFaint: {
        color: colour.textFaint,
    },

    textError: {
        color: colour.errorText,
    },

    anchor: {
        color: colour.anchor,
        fontSize: styleVariables.fontSizeBase,
    },

    errorText: {
        color: pallette.error,
    },

    fontSizeHeading: {
        fontSize: styleVariables.fontSizeHeading,
        fontWeight: 'bold',
    },

    fontSizeSubHeading: {
        fontSize: styleVariables.fontSizesubheading,
        fontWeight: 'bold',
    },

    fontSizeSmall: {
        fontSize: styleVariables.fontSizeSmall,
    },

    sup: {
        fontSize: em(0.65),
    },

};

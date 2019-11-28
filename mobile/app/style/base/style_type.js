require('./style_pxToEm');

module.exports = {


    //
    // Typography
    // --------------------------------------------------

    h1: {
        fontSize: styleVariables.fontSizeH1,
        lineHeight: styleVariables.fontSizeH1,
        fontWeight: 'bold',
        fontFamily: styleVariables.boldFontFamily,
    },

    h2: {
        fontSize: styleVariables.fontSizeH2,
        lineHeight: styleVariables.fontSizeH2,
        fontWeight: 'bold',
        fontFamily: styleVariables.boldFontFamily,
    },

    h3: {
        fontSize: styleVariables.fontSizeH3,
        lineHeight: styleVariables.fontSizeH3,
        fontFamily: styleVariables.boldFontFamily,
        fontWeight: 'bold',
    },

    h4: {
        fontSize: styleVariables.fontSizeH4,
        lineHeight: styleVariables.fontSizeH4,
        fontWeight: '600',
        fontFamily: styleVariables.semiboldFontFamily,
    },
    p: {
        marginBottom: styleVariables.marginBaseVertical,
    },

    italic: {
        fontFamily: styleVariables.italicFontFamily,
        fontWeight: 'normal',
    },

    textError: {
        color: colour.errorText,
    },

    fontWeightLight: {
        fontWeight: 'normal',
        fontFamily: styleVariables.normalFontFamily,
    },


    textLight: {
        color: colour.textLight,
    },

    textMid: {
        color: colour.textMid,
    },

    textPrimary: {
        color: pallette.primary,
    },

    textMidDark: {
        color: pallette.textMidDark,
    },

    textCenter: {
        textAlign: 'center',
    },

    textBottom: {
        textAlignVertical: 'bottom',
    },

    icon: {
        fontSize: em(2),
    },

    bold: {
        fontWeight: 'bold',
        fontFamily: styleVariables.boldFontFamily,
    },
    text: {
        backgroundColor: 'transparent',
        color: pallette.text,
        fontFamily: styleVariables.semiboldFontFamily,
        fontSize: styleVariables.fontSizeBase,
        lineHeight: styleVariables.fontSizeBase + 2.5,
        fontWeight: '600',
    },

    onboardingH1: {
        fontSize: 24,
        color: pallette.primaryDarkAlt,
        fontFamily: styleVariables.paragraphText,
    },

    paragraph: {
        marginBottom: styleVariables.marginBaseVertical,
        fontFamily: styleVariables.paragraphText,
        lineHeight: 28,
        fontSize: 18,
        color: pallette.primaryDark,
        // letterSpacing: 0.9
    },
    paragraphMutedItallic: {
        fontSize: 18,
        textAlign: 'center',
        color: pallette.primaryDarkAlt,
    },
    legalText: {
        lineHeight: 22,
        fontSize: 16,
        color: 'black',
    },
    legalTextSmall: {
        lineHeight: 22,
        fontSize: 14,
        color: pallette.primaryDark,
    },

    paragraphMuted: {
        marginBottom: styleVariables.marginBaseVertical,
        fontFamily: styleVariables.paragraphText,
        lineHeight: 25,
        fontSize: 16,
        opacity: 0.6,
        color: pallette.primaryDark,
    },
    paragraphMutedSmall: {
        marginBottom: styleVariables.marginBaseVertical,
        fontFamily: styleVariables.paragraphText,
        lineHeight: 25,
        fontSize: 14,
        opacity: 0.6,
        color: pallette.primaryDark,
    },

    textSmall: {
        fontSize: styleVariables.fontSizeSmall,
    },

    textFaint: {
        color: pallette.textFaint,
    },

    errorText: {
        color: pallette.error,
    },

    fontSizeHeading: {
        fontSize: styleVariables.fontSizeHeading,
        fontWeight: 'bold',
        fontFamily: styleVariables.boldFontFamily,
    },

    fontSizeSubHeading: {
        fontWeight: 'bold',
        fontFamily: styleVariables.boldFontFamily,
    },

    fontSizeSmall: {
        fontSize: styleVariables.fontSizeSmall,
    },

    sup: {
        fontSize: em(0.65),
    },

    anchor: {
        color: pallette.primaryDark,
        fontFamily: styleVariables.headerText,
        textDecorationLine: 'underline',
        letterSpacing: em(0.06),
        fontSize: em(0.86),
    },
    dosageUnitText: {
        color: pallette.primaryDark,
        fontSize: 24,
    },

};

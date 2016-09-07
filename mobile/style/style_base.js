module.exports = {

    //
    // Base styles
    // --------------------------------------------------

    body: {
        flex: 1,
        backgroundColor: colour.bodyBackground
    },

    anchorIcon: {
        marginTop: 2,
        marginLeft: styleVariables.gutterBase,
        marginRight: styleVariables.gutterBase,
        color: pallette.primary,
        fontSize: styleVariables.fontSizeAnchorIcon
    },

    anchorLarge: {
        color: pallette.primary,
        fontWeight: styleVariables.mediumFontWeight,
        fontSize: styleVariables.fontSizeAnchorLarge
    },

    anchorIconLarge: {
        marginTop: 2,
        marginLeft: styleVariables.gutterBase,
        marginRight: styleVariables.gutterBase,
        color: pallette.primary,
        fontSize: styleVariables.fontSizeAnchorIconLarge
    },

    divider: {
        height: (1 / PixelRatio.get()) * 2,
        alignSelf: 'stretch',
        borderColor: colour.divider,
        borderBottomWidth: 1 / PixelRatio.get(),
    },

    //Images

    entryImage: {
        marginTop: styleVariables.marginBaseVertical,
        marginBottom: styleVariables.marginBaseVertical,
        height: styleVariables.baseImageHeight,
        flex: 1
    },

    imageIcon: {
        width: styleVariables.baseImageWidth,
        height: styleVariables.baseImageHeight,
        resizeMode: "contain",
        marginRight: 5
    },

    //Hero

    hero: {
        marginTop: styleVariables.marginBaseVertical,
        marginBottom: styleVariables.marginBaseVertical,
        height: null,
        width: null,
        flex: 1,
        margin: -10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: colour.menuDivider,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroText: {
        color: pallette.buttonText,
        fontSize: styleVariables.heroFontSize,
        fontWeight: '400'
    },

    heroSubText: {
        color: pallette.buttonText,
        fontSize: styleVariables.fontSizeIcon,
        fontWeight: '200'
    }

};

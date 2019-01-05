module.exports = {

    listContainer: {
        flex: 1,
        backgroundColor: colour.listBackground,
    },

    insetList: {
        padding: styleVariables.paddingBase,
        backgroundColor: '#fff',
    },

    listItem: {
        minHeight: 44,
        // justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        borderBottomWidth: 1 / PixelRatio.get(),
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
        borderBottomColor: colour.divider,
        backgroundColor: colour.listBackground,
        paddingTop: styleVariables.paddingBase,
        paddingBottom: styleVariables.paddingBase,
    },

    listItemAlt: {
        borderBottomColor: colour.dividerAlt,
        backgroundColor: colour.listBackgroundAlt,
    },

    listItemDisabled: {
        opacity: 0.5,
    },

    listItemLast: {
        borderBottomWidth: 0,
    },
    liContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    listItemText: {
        color: pallette.textLight,
    },

    listIcon: {
        fontSize: styleVariables.fontSizeBase * 2.5,
        marginRight: styleVariables.paddingBase,
    },

    listIconNav: {
        fontSize: styleVariables.fontSizeBase * 1.5,
        marginRight: styleVariables.paddingBase,
        color: colour.textFaintLight,
    },

    listItemTitle: {
        fontWeight: 'bold',
    },

    listHeaderText: {
        color: '#fff',
    },

    indentListItem: {
        paddingLeft: 30,
    },
};

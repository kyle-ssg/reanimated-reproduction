module.exports = {

    listContainer: {
        flex: 1,
        backgroundColor: colour.listBackground
    },

    insetList: {
        padding: styleVariables.paddingBase,
        backgroundColor: '#fff'
    },

    listItem: {
        minHeight: 44,
        // justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf:'stretch',
        borderBottomWidth: 1,
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
        borderBottomColor: colour.dividerLight,
        backgroundColor: colour.listBackground,
        paddingTop:styleVariables.paddingBase,
        paddingBottom:styleVariables.paddingBase,
    },

    listItemAlt: {
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderBottomWidth: 1,
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
        borderBottomColor: colour.divider,
        backgroundColor: colour.listBackgroundAlt,
    },

    listItemDisabled: {
        opacity: .5
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
        color: pallette.text,
        flex: 1,
    },

    listIcon: {
        fontSize: styleVariables.fontSizeBase * 2.5,
        marginRight: styleVariables.paddingBase,
    },

    listIconNav: {
        fontSize: styleVariables.fontSizeBase * 1.5,
        marginRight: styleVariables.paddingBase,
        color: colour.blueGreyText
    },

    listActionIcon: {
        fontSize: styleVariables.fontSizeBase * 2,
        color: styleVariables.listItemText,
    },

    listItemTitle: {
        fontWeight: 'bold'
    },

    listHeader: {
        padding: styleVariables.paddingBase / 2,
        backgroundColor: pallette.listHeader,
    },

    listHeaderText: {
        color: '#fff',
    },

    listSubText: {
        fontSize:styleVariables.fontSizeSmall,
    },

    listItemUnstyled: {
        borderBottomWidth: 0
    },

    dropButton: {
        height: em(3),
        width: em(3),
        borderRadius: em(3) / 2,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    listItemFlag: {
        height: 40,
        width: 55,
        marginRight:styleVariables.marginBaseHorizontal,
    },

    indentListItem:{
        paddingLeft:30,
    },
    whiteShadowTop:{
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
};

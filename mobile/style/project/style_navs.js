module.exports = {

    navBar: {
        backgroundColor: styleVariables.navBar
    },

    bar: {
        padding: styleVariables.paddingBaseLarge,
        backgroundColor: colour.secondary
    },
    barText: {
        fontWeight: 'bold',
        color: styleVariables.text,
        fontSize: styleVariables.fontSizeSmall
    },

    //TILED NAV

    navTile: {
        width: DeviceWidth / 2,
        height: DeviceWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1 / PixelRatio.get() * 2,
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderColor: styleVariables.borderDefault
    },

    navBarTitle: {
        fontSize: styleVariables.fontSizeH2,
        fontWeight: styleVariables.headingsFontWeight,
        color: styleVariables.textLight
    },

    navButton: {
        color: styleVariables.navBarIcon,
        marginLeft: 10,
        marginBottom: -5,
        marginRight: 10
    },

    navTileActive: {
        backgroundColor: pallette.primaryLight
    },

    navTile0: {
        borderRightWidth: 1 / PixelRatio.get() * 2
    },
    navTile2: {
        borderLeftWidth: 1 / PixelRatio.get() * 2
    },

    tileTitle: {
        fontSize: em(1.25),
        color: pallette.primary,
        letterSpacing: 1
    },

    tileTitleActive: {
        color: pallette.text
    },

    //OFF CANVAS

    menu:{
        backgroundColor:pallette.primaryDark,
        height:DeviceHeight
    },

    menuHeading:{
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderBottomColor:pallette.primary,
        height:styleVariables.baseNavHeight + styleVariables.statusHeight,
        justifyContent:'center'
    },

    menuItem:{
        height:44,
        backgroundColor:'transparent',
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderBottomColor:pallette.primary
    },
    menuItemActive:{
        backgroundColor:'rgba(0,0,0,.2)',
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderBottomColor:pallette.primary
    },

    menuItemText:{
        color:styleVariables.textLight,
        fontSize:styleVariables.fontSizeBase
    },
};

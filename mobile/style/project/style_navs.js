module.exports = {

    navBar: {
        backgroundColor: base.navBar
    },

    bar: {
        padding: base.paddingBaseLarge,
        backgroundColor: colour.secondary
    },
    barText: {
        fontWeight: 'bold',
        color: base.text,
        fontSize: base.fontSizeSmall
    },

    //TILED NAV

    navTile: {
        width: DeviceWidth / 2,
        height: DeviceWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1 / PixelRatio.get() * 2,
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderColor: base.borderDefault
    },

    navBarTitle: {
        fontSize: em(styleVariables.fontSizeH2),
        fontWeight: styleVariables.headingsFontWeight,
        color: base.textLight
    },

    navButton: {
        color: base.navBarIcon,
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
        height:base.baseNavHeight + base.statusHeight,
        justifyContent:'center'
    },

    menuItem:{
        backgroundColor:'transparent',
        borderBottomWidth: 1 / PixelRatio.get() * 2,
        borderBottomColor:pallette.primary
    },

    menuItemText:{
        color:base.textLight,
        fontSize:base.fontSizeBase
    },
};

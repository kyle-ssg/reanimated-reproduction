// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 14
// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
    return unit * value;
}

module.exports = {
    //
    // Navs
    // --------------------------------------------------

    navBarStatic: {
        height: 44,
        justifyContent: 'center',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: colour.navBarBorder
    },

    navBar: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: colour.navBar,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: colour.navBarBorder
    },

    navBarText: {
        color: 'white',
        fontSize: styleVariables.fontSizeAlert,
        fontWeight: styleVariables.headingsFontWeight
    },
    actionBar: {
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: pallette.grayLighter
    },
    actionBarLink: {
        height: styleVariables.baseNavHeight,
        paddingLeft: 5,
        paddingRight: 5,

    },

    navItemContainer: {
        height: styleVariables.baseNavHeight,
        justifyContent: 'center'
    },

    navBarButton: {
        padding: 10,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },

    navBarButtonText: {
        fontSize: styleVariables.fontSizeH2,
        color: 'white',
    },
    navBarTitle: {
        fontSize: em(styleVariables.fontSizeH2),
        color: 'white',
        //backgroundColor: 'pink',
        fontWeight: styleVariables.headingsFontWeight
    },
    navItem: {
        height: 44,
        justifyContent: 'center'
    },
    selectNavBar: {
        backgroundColor: colour.selectNavBar,
    },

    // Tabs
    // -------------------------

    tabContainer: {
        width: Dimensions.get("window").width,
        justifyContent: 'space-between',
        backgroundColor: colour.tabBackground
    },
    tabItem: {
        flex: 1,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabLine: {
        height: 5,
        backgroundColor: colour.tabLine
    },
    tabText: {
        color: colour.tabText,
        textAlign: 'center'
    },
    tabActive: {
        backgroundColor: colour.tabActive
    },

    // Bar
    // -------------------------

    bar: {
        padding: styleVariables.paddingBase,
        backgroundColor: colour.secondary
    },
    barText: {
        fontWeight: 'bold',
        color: pallette.pallette,
        fontSize: em(styleVariables.fontSizesubheading)
    },

    // Menu
    // -------------------------

    menu: {
        backgroundColor: colour.menu,
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get("window").width / 1.5,
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: pallette.divider,
        height: Dimensions.get("window").height
    },
    menuIcon: {
        fontSize: styleVariables.fontSizeIcon,
        color: colour.primary,
        marginRight: styleVariables.marginBaseHorizontal
    },
    menuIconClose: {
        fontSize: em(styleVariables.fontSizeH1),
        color: 'white',
        marginRight: styleVariables.marginBaseHorizontal
    },
    menuText: {
        color: 'white'
    },
    menuHeading: {
        padding: styleVariables.paddingBase,
        marginTop: styleVariables.marginBaseVertical,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: colour.menuDivider,
        justifyContent: 'center',
    },
    menuHeadingText: {
        fontSize: em(styleVariables.fontSizeH2),
        color: colour.text,
    },

    menuButtonImage: {
        width: 34,
        height: 34,
        marginRight: 5,
        borderRadius: 5
    },

    // Footer
    // -------------------------

    footer: {
        backgroundColor: '#4A4A4A'
    },

    footerContainer: {
        height: styleVariables.baseNavHeight,
        justifyContent: 'center',
    },

    footerIconText: {
        color: pallette.white,
        fontSize: styleVariables.fontSizeH3,
    },

    footerIconActive: {
        color: pallette.white
    },


    footerItemAlert: {
        justifyContent: "center",
        alignItems: "center",
        width: em(1),
        height: em(1),
        borderRadius: em(0.5),
        position: 'absolute',
        top: 5,
        left: 10,
        backgroundColor: colour.alert
    },

    footerItemAlertText: {
        color: "white",
        fontSize: em(.5),
    },


    listItemIcon: {
        fontSize: em(2),
        marginTop: -em(0.5),
        marginBottom: -em(0.5)
    }

}
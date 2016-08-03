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
window.em = function (value) {
    return unit * value;
};

module.exports = {

    //so 14 is em(1), 28 is em(2)

    //
    // Typography
    // --------------------------------------------------

    // Body text
    // -------------------------

    text: {
        color: colour.text,
        fontSize: 12
    },

    footerIcon: {
        fontSize: em(2),
        color: colour.tabIcon,
    },

    icon: {
        fontSize: em(2)
    },

    anchor: {
        color: pallette.anchor,
        fontWeight: '500',
        fontSize: em(styleVariables.fontSizeAnchor)
    },

    debug: {
        borderWidth: styleVariables.borderWidth,
        borderColor: pallette.brandDanger
    },

    p: {
        marginBottom: styleVariables.marginBaseVertical,
    },

    bold: {
        fontWeight: 'bold'
    },


    // Headings
    // -------------------------

    heading: {
        fontSize: em(styleVariables.fontSizeHeading),
        color: colour.heading,
        alignSelf: 'center'
    },

    subheading: {
        fontSize: em(styleVariables.fontSizesubheading),
        color: colour.subheading,
        fontFamily: 'SFUIDisplay-Bold',
        alignSelf: 'center'
    },

    h1: {
        paddingTop: 0,
        fontWeight: styleVariables.headingsFontWeight,
        fontSize: em(styleVariables.fontSizeH1),
        fontWeight: "300"
    },

    h2: {
        paddingTop: 0,
        fontSize: em(styleVariables.fontSizeH2),
        fontWeight: styleVariables.headingsFontWeight,
    },

    h3: {
        paddingTop: 0,
        fontSize: em(styleVariables.fontSizeH3),
        fontWeight: styleVariables.headingsFontWeight,
        color: pallette.textLight
    },

    // Emphasis & misc
    // -------------------------

    note: {
        paddingTop: 0,
        fontSize: em(styleVariables.fontSizeNote),
        fontWeight: styleVariables.mediumFontWeight,
        color: pallette.textLight,
    },

    productName: {
        color: colour.primaryDark,
        fontWeight: styleVariables.headingsFontWeight
    },

    // Lists
    // -------------------------

    listContainer: {
        flex: 1,
        paddingTop: styleVariables.paddingBase,
        backgroundColor: colour.listBackground
    },

    li: {
        backgroundColor: colour.listItem,
        borderColor: colour.listItemDivider,
        borderBottomWidth: styleVariables.borderBottomWidth,
        justifyContent: 'center'
    },

    listItemTitle: {
        fontWeight: 'bold'
    },

    listItemText: {
        color: pallette.textLight,
        fontSize: em(styleVariables.fontSizelistitem)
    },

    liContent: {
        paddingTop: 12,
        paddingLeft: styleVariables.paddingBase,
        paddingRight: styleVariables.paddingBase,
        paddingBottom: 12,
    },

    listTitle: {
        color: pallette.text,
        fontSize: em(styleVariables.fontSizelistTitle),
        fontWeight: styleVariables.mediumFontWeight
    },

    listText: {
        color: pallette.textLight,
        fontSize: styleVariables.fontSizelistitem,
        fontWeight: styleVariables.mediumFontWeight
    }

}
require('./style_pxToEm');

module.exports = {

  //so 14 is em(1), 28 is em(2)

  //
  // Typography
  // --------------------------------------------------

  // Body text
  // -------------------------

  text: {
    color: colour.text,
    fontSize: em(2)
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
    fontSize: styleVariables.fontSizeHeading,
    color: colour.heading,
    alignSelf: 'center'
  },

  subheading: {
    fontSize: styleVariables.fontSizesubheading,
    color: colour.subheading,
    fontFamily: 'SFUIDisplay-Bold',
    alignSelf: 'center'
  },

  h1: {
    paddingTop: 0,
    fontWeight: styleVariables.headingsFontWeight,
    fontSize: styleVariables.fontSizeH1,
  },

  h2: {
    paddingTop: 0,
    fontSize: styleVariables.fontSizeH2,
    fontWeight: styleVariables.headingsFontWeight,
  },

  h3: {
    paddingTop: 0,
    fontSize: styleVariables.fontSizeH3,
    fontWeight: styleVariables.headingsFontWeight,
    color: pallette.textLight
  },

  // Emphasis & misc
  // -------------------------

  note: {
    paddingTop: 0,
    fontSize: styleVariables.fontSizeNote,
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
    fontSize: styleVariables.fontSizelistitem
  },

  liContent: {
    paddingTop: 12,
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase,
    paddingBottom: 12,
  },

  listTitle: {
    color: pallette.text,
    fontSize: styleVariables.fontSizelistTitle,
    fontWeight: styleVariables.mediumFontWeight
  },

  listText: {
    color: pallette.textLight,
    fontSize: styleVariables.fontSizelistitem,
    fontWeight: styleVariables.mediumFontWeight
  }

};

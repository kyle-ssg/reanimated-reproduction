module.exports = {

  insetList: {
    paddingLeft: styleVariables.paddingBaseLarge,
    paddingRight: styleVariables.paddingBaseLarge
  },

  basicListItem: {
    paddingTop: styleVariables.paddingBase,
    paddingBottom: styleVariables.paddingBase
  },

  listFull: {
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase
  },

  listHeader: {
    paddingTop: styleVariables.paddingBase,
    paddingLeft: styleVariables.paddingBase
  },

  listTitle: {
    paddingBottom: styleVariables.paddingBaseSmall
  },

  listUnstyled: {
    borderBottomWidth: 0
  },

  dropList: {
    padding: styleVariables.paddingBaseLarge
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

  listBaseText: {
    fontSize: styleVariables.fontSizeSmaller
  }
};

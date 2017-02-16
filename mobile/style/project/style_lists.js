module.exports = {

  basicListItem: {
    paddingTop: styleVariables.paddingBase,
    paddingBottom: styleVariables.paddingBase
  },

  listHeader: {
    paddingTop: styleVariables.paddingBase,
    paddingLeft: styleVariables.paddingBase
  },

  listUnstyled: {
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
  }
};

module.exports = {

  listContainer: {
    flex: 1,
    backgroundColor: colour.listBackground
  },

  insetList:{
    padding:styleVariables.paddingBase,
    backgroundColor:'#fff'
  },

  listItem: {
    padding: styleVariables.paddingBase,
    borderBottomWidth:1,
    borderBottomColor:'#f1f1f1',
  },

  listItemLast: {
    borderBottomWidth:0,
  },

  liContent: {
    flexDirection:'row',
    alignItems:'center',
  },

  listItemText: {
    color: pallette.text,
    flex:1,
  },

  listIcon:{
    fontSize:styleVariables.fontSizeBase * 1.5,
    marginRight:styleVariables.paddingBase,
  },

  listActionIcon: {
    fontSize:styleVariables.fontSizeBase * 2,
  },

  listItemTitle: {
    fontWeight: 'bold'
  },

  listHeader: {
    padding: styleVariables.paddingBase / 2,
    backgroundColor:pallette.primary,
  },

  listHeaderText:{
    color:'#fff',
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
  }
};

module.exports = {
  //
  // Grid system / Rows
  // --------------------------------------------------

  column: {
    marginLeft: styleVariables.gutterBase,
    marginRight: styleVariables.gutterBase
  },

  container: {
    padding: styleVariables.paddingBase,
  },
  noPad: {
    marginLeft: -styleVariables.paddingBase,
    marginRight: -styleVariables.paddingBase,
  },

  containeLoadingr: {
    opacity: 0.8,
  },

  marginBase: {
    paddingBottom: 20
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  alignCenter: {
    alignSelf: 'center'
  },

  alignRight: {
    alignSelf: 'flex-end'
  },

  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  row: {
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowDarker: {
    backgroundColor: colour.rowDarker,
  },
  rowLighter: {
    backgroundColor: colour.rowLighter,
  },
  rowHighlight: {
    backgroundColor: colour.rowHighlight
  },
  textRow: {
    marginRight: styleVariables.marginBaseHorizontal
  }

};

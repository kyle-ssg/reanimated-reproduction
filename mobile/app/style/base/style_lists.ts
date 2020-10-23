import asStyle from '../asStyle';

export default asStyle({
  listItem: {
    minHeight: 44,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colour.divider,
    backgroundColor: 'white',
    paddingTop: styleVariables.paddingBase,
    paddingBottom: styleVariables.paddingBase,
  },
  listItemDisabled: {
    opacity: 0.5,
  },
});

import asStyle from '../asStyle';

export default asStyle({
  //
  // Base styles
  // --------------------------------------------------

  body: {
    flex: 1,
    backgroundColor: palette.bodyBackground,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    borderColor: palette.divider,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

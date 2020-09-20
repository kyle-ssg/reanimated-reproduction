import { StyleSheet } from 'react-native';

const style:Record<string, ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle> = {

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
};

module.exports = style;

import { StyleSheet } from 'react-native';

const style: Record<
string,
ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  listItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.divider,
  },
};

module.exports = style;

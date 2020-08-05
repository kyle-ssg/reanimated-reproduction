// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleSheet } from "react-native";

const style: Record<
  string,
  ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  //
  // Base styles
  // --------------------------------------------------

  body: {
    flex: 1,
    backgroundColor: palette.bodyBackground,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    borderColor: palette.divider,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
};

module.exports = style;

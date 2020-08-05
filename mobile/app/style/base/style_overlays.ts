import { Dimensions } from "react-native";

const style: Record<
  string,
  ReactNative.ViewStyle | ReactNative.ImageStyle | ReactNative.TextStyle
> = {
  //
  // Overlays
  // --------------------------------------------------

  lightboxOuter: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 40,
    height: Dimensions.get("window").height,
  },

  lightbox: {
    width: Dimensions.get("window").width - 40,
    borderRadius: 5,
    backgroundColor: "white",
  },
};

module.exports = style;

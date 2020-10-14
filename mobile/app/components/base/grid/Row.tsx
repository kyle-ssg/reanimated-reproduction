import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  children?: React.ReactNode;
  space?: boolean;
  noWrap?: boolean;
  style?: ReactNative.ViewStyle;
}

const Row: React.FC<Props> = ({ space, style, children }) => (
  <View
    style={[styles.row, space && { justifyContent: "space-between" }, style]}
  >
    {children}
  </View>
);

const styles = ReactNative.StyleSheet.create({
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Row;

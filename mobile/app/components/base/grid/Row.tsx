import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";

interface Props {
  children?: React.ReactNode;
  space?: boolean;
  noWrap?: boolean;
  style?: ViewStyle;
  testID?: string;
}

const Row: React.FC<Props> = ({ testID,space, style, children }) => (
  <View
    testID={testID}
    style={[styles.row, space && { justifyContent: "space-between" }, style]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Row;

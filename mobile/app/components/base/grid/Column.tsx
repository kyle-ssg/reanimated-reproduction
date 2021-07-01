import React from "react";
import { View, ViewStyle } from "react-native";
import Flex from "./Flex";

interface Props {
  flexStyle?: any;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const Column: React.FC<Props> = ({ style, children }) => (
  <View style={[Styles.column, style]}>{children}</View>
);

export default Column;

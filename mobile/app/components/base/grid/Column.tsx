import React from "react";
import Flex from "./Flex";

interface Props {
  flexStyle?: any;
  style?: ReactNative.ViewStyle;
  children?: React.ReactNode;
}

export const Column: React.FC<Props> = ({ style, children }) => (
  <View style={[Styles.column, style]}>{children}</View>
);

export default Column;
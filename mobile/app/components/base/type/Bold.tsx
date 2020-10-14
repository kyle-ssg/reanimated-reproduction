import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: ReactNative.TextStyle;
}

const Bold: React.FC<Props> = ({ style, children }) => (
  <Text style={[Styles.bold, style]}>{children}</Text>
);

export default Bold;

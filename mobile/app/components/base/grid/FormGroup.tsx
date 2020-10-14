import React from "react";

interface Props {
  children: React.ReactNode;
  style?: ReactNative.ViewStyle;
}

const FormGroup: React.FC<Props> = ({ style, children }) => (
  <View style={[Styles.pv5, style]}>{children}</View>
);

FormGroup.displayName = "FormGroup";
export default FormGroup;

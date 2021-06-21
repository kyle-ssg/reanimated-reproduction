import React from "react";
import { View, ViewStyle } from "react-native";
import Styles from '../../../style/_style_screen';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const FormGroup: React.FC<Props> = ({ style, children }) => (
  <View style={[Styles.pv5, style]}>{children}</View>
);

FormGroup.displayName = "FormGroup";
export default FormGroup;

import React from "react";
import { Text, TextStyle } from 'react-native';
import Styles from '../../../style/_style_screen';

interface Props {
  accessible?: boolean;
  accessibilityLabel?: string;
  style?: TextStyle;
  children?: React.ReactNode;
}

const h2: React.FC<Props> = ({
  accessible,
  accessibilityLabel,
  style,
  children,
}) => (
  <Text
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    style={[Styles.h2, style]}
  >
    {children}
  </Text>
);

export default h2;

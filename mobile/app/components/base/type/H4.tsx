import React from 'react'
import { Text, TextStyle } from 'react-native'
import Styles from '../../../style/_style_screen'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  testID?: string
  style?: TextStyle
  children?: React.ReactNode
  numberOfLines?: number
}

const H4: React.FC<Props> = ({
  accessible,
  accessibilityLabel,
  testID,
  numberOfLines,
  style,
  children,
}) => (
  <Text
    testID={testID}
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    numberOfLines={numberOfLines}
    style={[Styles.h4, style]}
  >
    {children}
  </Text>
)

export default H4

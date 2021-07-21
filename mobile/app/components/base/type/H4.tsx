import React from 'react'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  testID?: string
  style?: ReactNative.TextStyle
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

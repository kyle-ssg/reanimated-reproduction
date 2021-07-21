import React from 'react'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  style?: ReactNative.TextStyle
  children?: React.ReactNode
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
)

export default h2

import React from 'react'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  style?: ReactNative.TextStyle
  children?: React.ReactNode
}

const h3: React.FC<Props> = ({
  accessible,
  accessibilityLabel,
  style,
  children,
}) => (
  <Text
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    style={[Styles.h3, style]}
  >
    {children}
  </Text>
)

export default h3

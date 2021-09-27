import React from 'react'
import { View } from 'react-native'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  value?: number
  children?: React.ReactNode
  style?: ReactNative.ViewStyle
  testID?: string
  space?: boolean
}

const Flex: React.FC<Props> = ({
  value = 1,
  accessible,
  accessibilityLabel,
  style,
  space,
  testID,
  children,
}) => (
  <View
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    style={[
      style,
      { flex: value },
      space && { justifyContent: 'space-between' },
    ]}
    testID={testID}
  >
    {children}
  </View>
)

export default Flex

import React from 'react'
import { View } from 'react-native'

export type FlexType = {
  accessible?: boolean
  accessibilityLabel?: string
  value?: number
  children?: React.ReactNode
  style?: ReactNative.ViewStyle
  testID?: string
  space?: boolean
}

const Flex: React.FC<FlexType> = ({
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
      { flex: value },
      space && { justifyContent: 'space-between' },
    ].concat(style)}
    testID={testID}
  >
    {children}
  </View>
)

export default Flex

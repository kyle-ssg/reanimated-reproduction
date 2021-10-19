import React from 'react'
import { View } from 'react-native'

export type FlexType = {
  accessible?: boolean
  accessibilityLabel?: string
  value?: number
  children?: React.ReactNode
  style?: ReactNative.StyleProp<ReactNative.ViewStyle>
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
}) => {
  // @ts-ignore
  const _style: ReactNative.ViewStyle = [
    { flex: value },
    space && { justifyContent: 'space-between' },
  ]
    // @ts-ignore
    .concat(style)
  return (
    <View
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      style={_style}
      testID={testID}
    >
      {children}
    </View>
  )
}

export default Flex

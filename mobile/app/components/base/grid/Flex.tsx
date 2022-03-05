import { FC, ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

export type FlexType = {
  accessible?: boolean
  accessibilityLabel?: string
  value?: number
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  testID?: string
  space?: boolean
}

const Flex: FC<FlexType> = ({
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

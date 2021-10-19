import React from 'react'
import { View } from 'react-native'

export type RowType = {
  children?: React.ReactNode
  space?: boolean
  noWrap?: boolean
  style?: ReactNative.StyleProp<ReactNative.ViewStyle>
  testID?: string
}

const Row: React.FC<RowType> = ({ testID, space, style, children }) => (
  <View
    testID={testID}
    style={[styles.row, space && { justifyContent: 'space-between' }, style]}
  >
    {children}
  </View>
)

const styles = ReactNative.StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Row

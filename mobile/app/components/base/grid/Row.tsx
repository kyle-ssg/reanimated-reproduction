import { View, StyleProp, ViewStyle } from 'react-native'
import { FC, ReactNode } from 'react'

export type RowType = {
  children?: ReactNode
  space?: boolean
  noWrap?: boolean
  style?: StyleProp<ViewStyle>
  testID?: string
}

const Row: FC<RowType> = ({ testID, space, style, children }) => (
  <View
    testID={testID}
    style={[styles.row, space && { justifyContent: 'space-between' }, style]}
  >
    {children}
  </View>
)

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Row

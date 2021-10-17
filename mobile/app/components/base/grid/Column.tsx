import React from 'react'

export type ColumnType = {
  flexStyle?: any
  style?: ReactNative.StyleProp<ReactNative.ViewStyle>
  children?: React.ReactNode
}

export const Column: React.FC<ColumnType> = ({ style, children }) => (
  <View style={[Styles.column, style]}>{children}</View>
)

export default Column

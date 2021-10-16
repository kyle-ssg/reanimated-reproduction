import React from 'react'

export type FormGroupType = {
  children: React.ReactNode
  style?: ReactNative.ViewStyle
}

const FormGroup: React.FC<FormGroupType> = ({ style, children }) => (
  <View style={[Styles.pv5, style]}>{children}</View>
)

FormGroup.displayName = 'FormGroup'
export default FormGroup

import { Text } from 'react-native'
import React from 'react'

const TextComponent: React.FC<ReactNative.TextProps> = (props) => {
  const style = Array.isArray(props.style) ? props.style : [props.style]

  return (
    <Text {...props} style={[Styles.text, ...style]}>
      {props.children}
    </Text>
  )
}

export default TextComponent

import { Text } from 'react-native'
import React from 'react'

interface Props {
  style?: ReactNative.TextStyle
}

const TextComponent: React.FC<Props> = (props) => {
  const style = Array.isArray(props.style) ? props.style : [props.style]

  return (
    <Text {...props} style={[Styles.text, ...style]}>
      {props.children}
    </Text>
  )
}

export default TextComponent

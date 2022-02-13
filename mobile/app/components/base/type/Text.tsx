import { Text, TextProps } from 'react-native'
import { FC } from 'react'

export type TextType = TextProps & {}
const TextComponent: FC<TextProps> = (props) => {
  const style = Array.isArray(props.style) ? props.style : [props.style]

  return (
    <Text {...props} style={[Styles.text, ...style]}>
      {props.children}
    </Text>
  )
}

export default TextComponent

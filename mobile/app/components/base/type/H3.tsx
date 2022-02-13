import { FC, ReactNode } from 'react'
import { TextStyle } from 'react-native'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  style?: TextStyle | TextStyle[]
  children?: ReactNode
}

const h3: FC<Props> = ({ accessible, accessibilityLabel, style, children }) => (
  <Text
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    style={[Styles.h3, style]}
  >
    {children}
  </Text>
)

export default h3

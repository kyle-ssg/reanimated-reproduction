import React from 'react'
import useInsets from 'components/base/useInset'

//This component, for iOS, lets you draw a custom view where the navbar is, use with a backgroundColor:"transparent"
// This will be cross platform when the following is merged https://github.com/software-mansion/react-native-screens/pull/575

type Props = {
  style?: ReactNative.ViewStyle
  navbarStyle?: ReactNative.ViewStyle
}

const NavBackgroundHelper: React.FC<Props> = ({ navbarStyle, children }) => {
  const insets = useInsets()
  return (
    <Flex>
      <View style={[{ minHeight: insets.top + 44 }, navbarStyle]} />
      {children}
    </Flex>
  )
}

// const styles = ReactNative.StyleSheet.create({
// })

export default NavBackgroundHelper

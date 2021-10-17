import React, { FunctionComponent, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import useInsets from 'components/base/useInset'
import { ViewStyle } from 'react-native'

type Props = {
  style?: ReactNative.StyleProp<ReactNative.ViewStyle>
  titleStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>
  title: string
}

const CustomNavbar: FunctionComponent<Props> = ({
  style,
  title,
  titleStyle,
}) => {
  const navigation = useNavigation()
  const pop = useCallback(() => {
    // @ts-ignore
    navigation.pop()
  }, [navigation])
  const insets = useInsets()
  const navHeight = insets.top + 44

  // @ts-ignore
  const _styles: ViewStyle = [
    {
      position: 'relative',
      paddingTop: insets.top,
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: navHeight,
      backgroundColor: 'transparent',
    },
    style,
  ]

  return (
    <Row style={_styles}>
      {navigation.canGoBack() && (
        <View
          style={{
            justifyContent: 'center',
            position: 'absolute',
            left: 20,
            top: insets.top,
            bottom: 0,
          }}
        >
          <TouchableOpacity style={styles.buttonContainer} onPress={pop}>
            <FA5Pro style={styles.icon} name='chevron-back' />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </Row>
  )
}

const styles = ReactNative.StyleSheet.create({
  titleContainer: {
    height: 44,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  buttonContainer: {
    width: 34,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
})

export default CustomNavbar

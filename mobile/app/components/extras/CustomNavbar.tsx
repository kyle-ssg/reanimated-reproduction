import React, { FunctionComponent, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import useInsets from 'components/base/useInset'

type Props = {
  style?: ReactNative.ViewStyle
  titleStyle?: ReactNative.ViewStyle
  title: string
  navbarStyle?: ReactNative.ViewStyle
}

const CustomNavbar: FunctionComponent<Props> = ({
  style,
  title,
  titleStyle,
  navbarStyle,
}) => {
  const navigation = useNavigation()
  const pop = useCallback(() => {
    navigation.pop()
  }, [navigation])
  const insets = useInsets()
  const navHeight = insets.top + 44

  return (
    <Row
      style={[
        {
          position: 'relative',
          paddingTop: insets.top,
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: navHeight,
          backgroundColor: 'transparent',
        },
        style,
      ]}
    >
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
            <ION style={styles.icon} name='ios-chevron-back' />
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

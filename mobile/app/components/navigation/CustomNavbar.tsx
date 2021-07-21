import React, { FunctionComponent, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {
  style?: ReactNative.ViewStyle
  titleStyle?: ReactNative.ViewStyle
  hideBack?: boolean
  title: string
}

const CustomNavbar: React.FC<Props> = ({
  style,
  title,
  hideBack,
  titleStyle,
}) => {
  const navigation = useNavigation()
  const pop = useCallback(() => {
    navigation.pop()
  }, [navigation])

  return (
    <>
      <Row style={[styles.navbar, style]}>
        {navigation.canGoBack() && !hideBack && (
          <View style={styles.leftContainer}>
            <ButtonPrimary
              testID='jsBack'
              style={{ width: 30, height: 30 }}
              onPress={pop}
            >
              <FA5Pro name='chevron-left' size={16} color={'white'} light />
            </ButtonPrimary>
          </View>
        )}

        <View style={styles.titleContainer}>
          <H4 style={[Styles.textCenter, titleStyle]}>{title}</H4>
        </View>
      </Row>
    </>
  )
}

const styles = ReactNative.StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    // height: 44
  },
  leftContainer: {
    position: 'absolute',
    zIndex: 9999999,
    left: 20,
    // top: styleVariables.insets.top,
    // bottom: 0,
  },
  navbar: {
    paddingTop: styleVariables.insets.top + 20,
    backgroundColor: 'transparent',
  },
})

export default CustomNavbar

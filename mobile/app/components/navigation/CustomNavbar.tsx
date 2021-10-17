import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import useInsets from 'components/base/useInset'

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
  const insets = useInsets()

  return (
    <>
      <Row
        style={[
          {
            paddingTop: insets.top + 20,
            backgroundColor: 'transparent',
          },
          style,
        ]}
      >
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
    // bottom: 0,
  },
})

export default CustomNavbar

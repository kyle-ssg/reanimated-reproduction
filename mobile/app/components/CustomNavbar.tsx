import { FC, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import useInsets from 'components/base/useInset'
import { TextStyle, ViewStyle } from 'react-native'
import Row from './base/grid/Row'
import H4 from 'components/base/type/H4'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'

type Props = {
  style?: ViewStyle
  titleStyle?: TextStyle
  title: string
}

const CustomNavbar: FC<Props> = ({ style, title, titleStyle }) => {
  const navigation = useNavigation()
  const pop = useCallback(() => {
    // @ts-ignore
    navigation.pop()
  }, [navigation])
  const insets = useInsets()
  const navHeight = insets.top + 44
  //@ts-ignore
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
        <H4 style={[styles.title, titleStyle]}>{title}</H4>
      </View>
    </Row>
  )
}

const styles = StyleSheet.create({
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

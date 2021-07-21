import React, { FunctionComponent, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {
  style?: ReactNative.ViewStyle
  titleStyle?: ReactNative.ViewStyle
  title: string
  textButtonText?: string
  onPress?: React.ReactNode
  onTextButtonPressed?: React.ReactNode
}

const CustomModalNavbar: React.FC<Props> = ({ style, title, titleStyle }) => {
  const navigation = useNavigation()
  const pop = useCallback(() => {
    navigation.pop()
  }, [navigation])

  return (
    <>
      <Row style={[Styles.modalNavbar, style]}>
        <View style={Styles.titleContainer}>
          <H4 style={[Styles.textCenter, titleStyle]}>{title}</H4>
        </View>
        {navigation.canGoBack() && (
          <View style={Styles.modalRightContainer}>
            <ButtonText onPress={pop}>
              <FA5Pro
                name='times-circle'
                size={24}
                color={palette.lightSteelBlue}
                solid
              />
            </ButtonText>
          </View>
        )}
      </Row>
    </>
  )
}

// export const ConfirmationModalNavbar: React.FC<Props> = ({ style, title, onPress, onTextButtonPressed, textButtonText }) => {
//   const navigation = useNavigation();
//   const pop = useCallback(() => {
//     navigation.pop();
//   }, [navigation]);
//
//   return (
//     <>
//       <Row style={[Styles.m10, style]}>
//         <Flex/>
//         <Flex>
//           <Text style={[Styles.textBold, Styles.textCenter]}>{title}</Text>
//         </Flex>
//         <Flex style={Styles.alignEnd}>
//           <ButtonNeumorphRounded onPress={pop}>
//             <FA5Pro name="times" size={16} color={'white'}
//               light
//             />
//           </ButtonNeumorphRounded>
//         </Flex>
//       </Row>
//     </>
//   );
// };

export const CustomActionSheetNavbar: FunctionComponent<Props> = ({
  style,
  titleStyle,
  title,
  onPress,
  onTextButtonPressed,
  textButtonText,
}) => {
  return (
    <>
      <Row style={[Styles.m10, Styles.mt15, style]}>
        <Flex>
          <H2>{title}</H2>
        </Flex>
        <View style={[Styles.actionSheetRightContainer]}>
          <ButtonText>
            <FA5Pro
              name='times-circle'
              size={24}
              color={palette.lightSteelBlue}
              solid
            />
          </ButtonText>
        </View>
      </Row>
    </>
  )
}

const styles = ReactNative.StyleSheet.create({})

export default CustomModalNavbar

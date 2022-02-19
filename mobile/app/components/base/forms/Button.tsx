import Text from 'components/base/type/Text'
import {
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'
import Utils from 'common/utils/base/_utils'
import debounce from 'lodash/debounce'
import { FunctionComponent, ReactNode, useCallback, useMemo } from 'react'
import { styleVariables } from '../../../style/style_variables'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'

export type ButtonType = PressableProps & {
  children: ReactNode
  icon?: boolean
  iconColour?: string
  textStyle?: StyleProp<TextStyle | TextStyle[]>
  pressedStyle?: StyleProp<ViewStyle> | ViewStyle[]
  containerStyle?: StyleProp<ViewStyle> | ViewStyle[]
  pressedTextStyle?: TextStyle | TextStyle[]
  style?: StyleProp<ViewStyle>
  throttle?: number
}

export const standardAndroidRipple: PressableAndroidRippleConfig = {
  color: 'rgba(255,255,255,.25)',
  borderless: false,
}

const circleButtonRipple: PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.15)',
  borderless: true,
}

export const darkAndroidRipple: PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.05)',
  borderless: false,
}

const Button: FunctionComponent<ButtonType> = ({
  disabled,
  android_ripple,
  children,
  style,
  pressedStyle,
  pressedTextStyle,
  containerStyle,
  textStyle,
  icon,
  iconColour,
  onPress,
  throttle: _throttle = 500,
  ...rest
}) => {
  const groupStyles = useMemo(
    () =>
      style
        ? [Styles.buttonGroup, style, disabled ? Styles.buttonDisabled : null]
        : [Styles.buttonGroup, disabled ? Styles.buttonDisabled : null],
    [style, disabled],
  )

  const onPressThrottle =
    onPress && debounce(onPress, _throttle, { leading: true })

  const pressedStyles = useMemo(
    () => [Styles.buttonGroup, Styles.buttonGroupPressed, style, pressedStyle],
    [pressedStyle, style],
  )

  // @ts-ignore
  const textStyles: TextStyle[] = useMemo(() => {
    // @ts-ignore
    const additionalTextStyles =
      // @ts-ignore
      textStyle && textStyle?.length ? textStyle : [textStyle]
    return textStyle
      ? [
          Styles.buttonText,
          // @ts-ignore
          ...additionalTextStyles,
        ]
      : Styles.buttonText
  }, [textStyle])

  const pressableStyle = useCallback(
    ({ pressed }) => (pressed ? pressedStyles : groupStyles),
    [pressedStyles, groupStyles],
  )

  return (
    <View style={Styles.buttonContainer}>
      <Pressable
        {...rest}
        onPress={onPressThrottle}
        style={pressableStyle}
        disabled={disabled}
        android_ripple={android_ripple || darkAndroidRipple}
      >
        {Utils.reactChildIsString(children)
          ? ({ pressed }) => (
              // @ts-ignore
              <Text
                style={
                  !pressed || !pressedTextStyle
                    ? textStyles
                    : pressedTextStyle
                    ? [...textStyles, pressedTextStyle]
                    : textStyles
                }
              >
                {/*@ts-ignore*/}
                {children.length === 1 ? children[0] : children}
              </Text>
            )
          : children}
      </Pressable>
      {icon ? (
        <View style={Styles.buttonIcon}>
          <FA5Pro solid name={icon} size={18} color={iconColour || 'white'} />
        </View>
      ) : null}
    </View>
  )
}

export const ButtonPrimary: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonPrimary, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonPrimaryPressed, props.pressedStyle]}
      // @ts-ignore
      textStyle={[Styles.buttonPrimaryText, props.textStyle]}
    />
  )
}

export const ButtonSecondary: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonSecondary, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonSecondaryPressed, props.pressedStyle]}
      textStyle={[Styles.buttonSecondaryText, props.textStyle]}
      pressedTextStyle={Styles.buttonSecondaryTextPressed}
    />
  )
}

export const ButtonOutlinePrimary: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonOutlinePrimary, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonOutlinePrimaryPressed, props.pressedStyle]}
      // @ts-ignore
      textStyle={[Styles.buttonOutlinePrimaryText, props.textStyle]}
      pressedTextStyle={Styles.buttonOutlinePrimaryPressedText}
    />
  )
}

export const ButtonLink: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      android_ripple={{ color: 'transparent' }}
      style={[Styles.buttonLink, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonLinkPressed, props.pressedStyle]}
      // @ts-ignore
      textStyle={[Styles.buttonLinkText, props.textStyle]}
      pressedTextStyle={Styles.buttonLinkPressedText}
    />
  )
}

export const ButtonTertiary: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonTertiary, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonTertiaryPressed, props.pressedStyle]}
      // @ts-ignore
      textStyle={[Styles.buttonTertiaryText, props.textStyle]}
    />
  )
}

export const ButtonText: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonText, props.style]}
      // @ts-ignore
      textStyle={[Styles.buttonTextText, props.textStyle]}
      pressedTextStyle={[Styles.buttonTextPressed, props.pressedTextStyle]}
    />
  )
}

export const ButtonNav: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      android_ripple={circleButtonRipple}
      style={[props.style, Styles.buttonNav]}
    />
  )
}

export default Button

import {
  Platform,
  Pressable,
  RippleBackgroundPropType,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";

import Utils from "common/utils/base/_utils";
import throttle from "lodash/debounce";
import React, { FunctionComponent, useMemo } from "react";
import useTheme from "common/providers/useTheme";

export type ButtonType = ReactNative.PressableProps & {
  children: React.ReactNode,
  icon?: boolean,
  textStyle?: ReactNative.TextStyle | ReactNative.TextStyle[],
  pressedStyle?: ReactNative.ViewStyle | ReactNative.ViewStyle[],
  containerStyle?: ReactNative.ViewStyle | ReactNative.ViewStyle[],
  pressedTextStyle?: ReactNative.TextStyle | ReactNative.TextStyle[],
  style?: ReactNative.ViewStyle
  throttle?: number
};

export const standardAndroidRipple: ReactNative.PressableAndroidRippleConfig = {
  color: "rgba(255,255,255,.25)",
  borderless: false
};

const circleButtonRipple: ReactNative.PressableAndroidRippleConfig = {
  color: "rgba(0,0,0,.15)",
  borderless: true
};

export const darkAndroidRipple: ReactNative.PressableAndroidRippleConfig = {
  color: "rgba(0,0,0,.05)",
  borderless: false
};

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
  onPress,
  throttle: _throttle = 500,
  ...rest
}) => {
  const groupStyles = useMemo(() => (
    style ? [Styles.buttonGroup, style, disabled ? Styles.buttonDisabled : null] : [Styles.buttonGroup, disabled ? Styles.buttonDisabled : null]
  ), [style, disabled]);

  const onPressThrottle = onPress && throttle(onPress, _throttle, { leading: true });

  const pressedStyles = useMemo(() => (
    [Styles.buttonGroup, Styles.buttonGroupPressed, style, pressedStyle]
  ), [pressedStyle, style]);

  const textStyles = useMemo(() => {
    // @ts-ignore
    const additionalTextStyles = textStyle && textStyle?.length ? textStyle : [textStyle];
    return textStyle ? [
      Styles.buttonText,
      // @ts-ignore
      ...additionalTextStyles
    ] : Styles.buttonText;
  }, [textStyle]);


  return (
    <View style={[{ overflow: "hidden", position: "relative" }, containerStyle]}>
      <Pressable
        {...rest}
        onPress={onPressThrottle}
        style={({ pressed }) => pressed ? pressedStyles : groupStyles}
        disabled={disabled}
        android_ripple={android_ripple || darkAndroidRipple}
      >
        {Utils.reactChildIsString(children) ?
          ({ pressed }) => (
            // @ts-ignore
            <Text style={!pressed || !pressedTextStyle ? textStyles : [...textStyles, pressedTextStyle]}>
              {/*@ts-ignore*/}
              {children.length === 1 ? children[0] : children}
            </Text>
          )
          : (children)

        }
      </Pressable>
      {icon ?
        <View style={{
          position: "absolute",
          right: 10,
          width: 30,
          height: 30,
          top: 10,
          borderRadius: styleVariables.baseBorderRadius,
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <FA5Pro solid name={icon} size={18}
            color={palette.white}
          />
        </View>
        :
        null
      }
    </View>
  );
};


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
  );
};

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
  );
};

export const ButtonLink: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      android_ripple={{ color: "transparent" }}
      style={[Styles.buttonLink, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonLinkPressed, props.pressedStyle]}
      // @ts-ignore
      textStyle={[Styles.buttonLinkText, props.textStyle]}
      pressedTextStyle={Styles.buttonLinkPressedText}
    />
  );
};

export const ButtonSecondary: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonSecondary, props.style]}
      // @ts-ignore
      pressedStyle={[Styles.buttonSecondaryPressed, props.pressedStyle]}
    />
  );
};

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
  );
};

export const ButtonText: FunctionComponent<ButtonType> = (props) => {

  return (
    <Button
      {...props}
      style={[Styles.buttonText, props.style]}
      // @ts-ignore
      textStyle={[Styles.buttonTextText, props.textStyle]}
    />
  );
};

export const ButtonNav: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      android_ripple={circleButtonRipple}
      style={[props.style, Styles.buttonText]}
    />
  );
};

const styles = ReactNative.StyleSheet.create({});

export default Button;

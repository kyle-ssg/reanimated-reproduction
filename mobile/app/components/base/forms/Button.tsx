import {
  Platform,
  Pressable,
  RippleBackgroundPropType,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import Utils from 'common/utils/base/_utils';

import React, { FunctionComponent, useMemo } from 'react';
import useTheme  from 'common/providers/useTheme';

type ComponentType = ReactNative.PressableProps & {
  children: React.ReactNode,
  textStyle?: ReactNative.TextStyle | ReactNative.TextStyle[],
  pressedStyle?: ReactNative.ViewStyle | ReactNative.ViewStyle[],
  pressedTextStyle?: ReactNative.TextStyle | ReactNative.TextStyle[],
  style?: ReactNative.ViewStyle
};

export const standardAndroidRipple:ReactNative.PressableAndroidRippleConfig = {
  color: 'rgba(255,255,255,.25)',
  borderless: false,
}

const circleButtonRipple:ReactNative.PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.15)',
  borderless: true,
}

export const darkAndroidRipple:ReactNative.PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.15)',
  borderless: false,
}

const Button: FunctionComponent<ComponentType> = ({
  disabled,
  android_ripple,
  children,
  style,
  pressedStyle,
  pressedTextStyle,
  textStyle,
  ...rest
}) => {
  const groupStyles = useMemo(()=>(
    style?[Styles.buttonGroup, style, disabled? Styles.buttonDisabled : null]:Styles.buttonGroup
  ), [style, disabled])

  const pressedStyles = useMemo(()=>(
    [Styles.buttonGroup, Styles.buttonGroupPressed, style, pressedStyle]
  ), [pressedStyle,style])

  const textStyles = useMemo(()=>{
    // @ts-ignore
    const additionalTextStyles = textStyle && textStyle?.length ? textStyle : [textStyle];
    return textStyle?  [
      Styles.buttonText,
      // @ts-ignore
      ...additionalTextStyles,
    ] : Styles.buttonText;
  }, [textStyle])


  return (
      <View style={{ overflow: 'hidden' }}>
          <Pressable
            {...rest}
            style={({ pressed })=> pressed? pressedStyles: groupStyles}
            disabled={disabled}
            android_ripple={android_ripple || darkAndroidRipple}
          >
              {Utils.reactChildIsString(children) ?
                ({ pressed }) => (
                    <Text style={!pressed|| !pressedTextStyle? textStyles: [...textStyles, pressedTextStyle]}>
                        {/*@ts-ignore*/}
                        {children.length === 1 ? children[0] : children}
                    </Text>
                )
              : (children)}
          </Pressable>
      </View>
  )
};


export const ButtonPrimary: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        style={[Styles.buttonPrimary, props.style]}
        pressedStyle={[Styles.buttonPrimaryPressed, props.pressedStyle]}
        textStyle={[Styles.buttonPrimaryText, props.textStyle]}
      />
  );
};

export const ButtonSecondary: FunctionComponent<ComponentType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonSecondary, props.style]}
      pressedStyle={[Styles.buttonSecondaryPressed, props.pressedStyle]}
    />
  );
};

export const ButtonTertiary: FunctionComponent<ComponentType> = (props) => {
  return (
    <Button
      {...props}
      style={[Styles.buttonTertiary, props.style,]}
      // @ts-ignore
      pressedStyle={[Styles.buttonTertiaryPressed, props.pressedStyle]}
      // @ts-ignore
      textStyle={[Styles.buttonTertiaryText, props.textStyle]}
    />
  );
};

export const ButtonText: FunctionComponent<ComponentType> = (props) => {

  return (
      <Button
        {...props}
        style={[Styles.buttonText, props.style]}
        // @ts-ignore
        textStyle={[Styles.buttonTextText, props.textStyle]}
      />
  );
};

export const ButtonNav: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        android_ripple={circleButtonRipple}
        style={[ props.style, Styles.buttonText]}
      />
  );
};

const styles = ReactNative.StyleSheet.create({



});

export default Button

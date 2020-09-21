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
import withTheme, { useTheme } from 'common/providers/withTheme';
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
  const theme = useTheme();
  const tint = theme?.primary;
  return (
      <Button
        {...props}
        style={[Styles.buttonPrimary, props.style, tint && { backgroundColor:tint }]}
        pressedStyle={[Styles.buttonPrimaryPressed, props.pressedStyle, tint && { backgroundColor:theme.primaryDark }]}
        textStyle={[styles.buttonPrimaryText, Styles.textBold, props.textStyle]}
      />
  );
};

export const ButtonOutlinePrimary: FunctionComponent<ComponentType> = (props) => {
  const theme = useTheme();
  const tint = theme?.primary;
  return (
      <Button
        {...props}

        style={[Styles.buttonOutlinePrimary, props.style, tint && { borderColor:tint }]}
        pressedStyle={[Styles.buttonOutlinePrimaryPressed, props.pressedStyle, tint && { borderColor:theme.primaryDark }]}
        textStyle={[styles.buttonOutlinePrimaryText, Styles.textBold, props.textStyle, tint && { color:tint }]}
        pressedTextStyle={[tint && { color:theme.primaryDark }]}
      />
  );
};

export const ButtonText: FunctionComponent<ComponentType> = (props) => {
  const theme = useTheme();
  const tint = theme?.primary;
  return (
      <Button
        {...props}
        style={[Styles.buttonText, props.style]}
        // @ts-ignore
        textStyle={[{ color: tint||palette.primary }, props.textStyle]}
      />
  );
};

export const ButtonSecondary: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        pressedStyle={[Styles.buttonGroupSecondaryPressed, props.pressedStyle]}
        style={[{ backgroundColor: palette.secondary }, props.style]}
      />
  );
};

export const ButtonTertiary: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        style={[styles.buttonTertiary, props.style,]}
        // @ts-ignore
        pressedStyle={[styles.buttonTertiaryPressed, props.pressedStyle]}
        // @ts-ignore
        textStyle={[styles.buttonTertiaryText, props.textStyle]}
      />
  );
};

export const ButtonNav: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        android_ripple={circleButtonRipple}
        style={[ props.style, { backgroundColor: palette.gainsboro, width:28, height:28, borderRadius: 14 }]}
      />
  );
};

const styles = ReactNative.StyleSheet.create({
  TabButtonPill: {
    height: 34,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TabButtonPillText: {
    color: palette.primaryDark,
  },
  buttonNav: {
    backgroundColor: 'white',
    width: 44,
    height:44,
    borderRadius:22,
    overflow:"hidden"
  },
  buttonTertiary: {
    backgroundColor: 'white',
    borderColor: palette.primary,
    borderWidth: 1,
  },
  buttonTertiaryPressed: {
    backgroundColor: '#eaeaea',
  },
  buttonTertiaryText: {
    color: palette.primary,
  },
  buttonPrimaryText: {
    color: 'white',
  },
  buttonOutlinePrimaryText: { color: palette.primary },
  buttonOutlinePrimaryTextPressed: { color: palette.primaryDark },
  buttonPrimary: { backgroundColor: 'pink' },
});

export default Button

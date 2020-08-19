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
type ComponentType = ReactNative.PressableProps & {
  children: string
  textStyle: ReactNative.TextStyle | ReactNative.TextStyle[],
  pressedStyle: ReactNative.ViewStyle | ReactNative.ViewStyle[],
};

const standardAndroidRipple:ReactNative.PressableAndroidRippleConfig = {
  color: 'rgba(255,255,255,.25)',
  borderless: false,
}
const circleButtonRipple:ReactNative.PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.15)',
  borderless: true,
  borderRadius:5
}
const darkAndroidRipple:ReactNative.PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.15)',
  borderless: false,
}

const Button: FunctionComponent<ComponentType> = ({
  disabled,
  android_ripple,
  children,
  style,
  pressedStyle,
  textStyle,
  ...rest
}) => {
  const groupStyles = useMemo(()=>(
    style?[Styles.buttonGroup, style]:Styles.buttonGroup
  ), [style])

  const pressedStyles = useMemo(()=>(
    [Styles.buttonGroup, Styles.buttonGroupPressed, style, pressedStyle]
  ), [pressedStyle,style])

  const textStyles = useMemo(()=>{
    const additionalTextStyles = textStyle && textStyle.length ? textStyle : [textStyle];
    return textStyle?  [
      Styles.buttonText,
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
              {Utils.reactChildIsString(children) ? (
                  <Text style={textStyles}>
                      {children.length === 1 ? children[0] : children}
                  </Text>
              ) : (children)}
          </Pressable>
      </View>
  )
};


export const ButtonPrimary: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        style={[Styles.buttonPrimary, props.style]}
        textStyle={[styles.buttonPrimaryText, props.textStyle]}
      />
  );
};

export const ButtonText: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        style={[Styles.buttonText, props.style]}
        textStyle={[{ color: palette.primary }, props.textStyle]}
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
        pressedStyle={[styles.buttonTertiaryPressed, props.pressedStyle]}
        textStyle={[styles.buttonTertiaryText, props.textStyle]}
      />
  );
};

export const ButtonNav: FunctionComponent<ComponentType> = (props) => {
  return (
      <Button
        {...props}
        android_ripple={circleButtonRipple}
        pressedStyle={{ opacity:0.75 }}
        style={{ backgroundColor:'transparent', width:34, height:34 }}
        textStyle={[styles.buttonTertiaryText, props.textStyle]}
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
  buttonPrimary: { backgroundColor: 'pink' },
});

export default Button

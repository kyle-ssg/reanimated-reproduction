import React, { useRef } from "react";
import { FunctionComponent } from "react";
import Animated from "react-native-reanimated";
import { timing } from "react-native-redash";
import { Modal } from "react-native";
import { easingConfigModal } from "../project/reanimations";

export type ModalType = {
  animatedValue?: Animated.Value<number>;
  dark?: boolean;
  visible: boolean;
  fadeContent?: boolean;
  style: ReactNative.ViewStyle;
  onDismissPress?: () => void;
};

const CustomModal: FunctionComponent<ModalType> = ({
  animatedValue: _animatedValue,
  dark,
  style,
  onDismissPress,
  visible,
  children,
  fadeContent = true,
}) => {
  const animatedValue =
    _animatedValue || useRef(_animatedValue || new Animated.Value(0)).current;
  const shouldAnimate = !_animatedValue;
  if (shouldAnimate) {
    Animated.useCode(() => {
      return Animated.set(
        animatedValue,
        timing({
          ...easingConfigModal,
          from: visible ? 0 : 1,
          to: visible ? 1 : 0,
        })
      );
    }, [visible]);
  }

  return (
      <Modal visible={!!visible} transparent={true} statusBarTranslucent={true}>
          <Animated.View
            style={[
          style,
          dark ? styles.darkBackdrop : styles.lightBackdrop,
          {
            opacity: animatedValue,
          },
        ]}
          >
              {fadeContent && (
              <>
                  <TouchableOpacity
                    onPress={onDismissPress}
                    activeOpacity={1}
                    style={ReactNative.StyleSheet.absoluteFill}
                  />
                  {children}
              </>
        )}
          </Animated.View>
          {!fadeContent && (
          <View style={[styles.childrenContainer, style]}>
              <TouchableOpacity
                onPress={onDismissPress}
                activeOpacity={1}
                style={ReactNative.StyleSheet.absoluteFill}
              />
              {children}
          </View>
      )}
      </Modal>
  );
};

export { CustomModal };

export const styles = ReactNative.StyleSheet.create({
  parentContainer: {
    ...ReactNative.StyleSheet.absoluteFillObject,
  },
  lightBackdrop: {
    ...ReactNative.StyleSheet.absoluteFillObject,
    backgroundColor: palette.lightBackdrop,
  },
  darkBackdrop: {
    ...ReactNative.StyleSheet.absoluteFillObject,
    backgroundColor: palette.darkBackdrop,
  },
  childrenContainer: {
    ...ReactNative.StyleSheet.absoluteFillObject,
  },
});

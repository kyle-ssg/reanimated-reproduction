import React from "react";
import { FunctionComponent, useState, useEffect } from "react";
import { AnimationConfig, Modal } from "react-native";
import { ease } from "../project/animations";
import { usePreviousState } from "./utility-components/usePreviousState";

const fadeInConfig: ReactNative.Animated.TimingAnimationConfig = {
  duration: 350,
  useNativeDriver: true,
  easing: ease,
  toValue: 1,
};

const fadeOutConfig: ReactNative.Animated.TimingAnimationConfig = {
  duration: 350,
  useNativeDriver: true,
  easing: ease,
  toValue: 0,
};

type ComponentType = {
  dark?: boolean;
  visible: boolean;
  fadeContent?: boolean;
  style: ReactNative.ViewStyle;
  onDismissPress?: () => void;
};

const CustomModal: FunctionComponent<ComponentType> = ({
  dark,
  style,
  onDismissPress,
  visible,
  children,
  fadeContent = true,
}) => {
  const [animatedValue, _] = useState(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(visible);
  const prevVisible = usePreviousState(visible);
  useEffect(() => {
    if (prevVisible === undefined) {
      if (visible) {
        // animate in if the modal starts as visible
        Animated.timing(animatedValue, fadeInConfig).start();
      }
    } else if (prevVisible !== visible) {
      if (visible) {
        // The modal has become visible=true
        setModalVisible(true);
        Animated.timing(animatedValue, fadeInConfig).start();
      } else {
        // The modal has become visible=false
        Animated.timing(animatedValue, fadeOutConfig).start(() =>
          setModalVisible(false)
        );
      }
    }
  }, [dark, visible]);
  return (
    <Modal
      visible={!!modalVisible}
      transparent={true}
      statusBarTranslucent={true}
    >
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
    backgroundColor: "rgba(255,255,255,.5)",
  },
  darkBackdrop: {
    ...ReactNative.StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  childrenContainer: {
    ...ReactNative.StyleSheet.absoluteFillObject,
  },
});

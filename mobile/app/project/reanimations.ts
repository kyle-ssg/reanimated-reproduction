import Animated, { Easing } from "react-native-reanimated";

export type AnimationConfigType = {
  duration: number;
  easing: Animated.EasingFunction;
};

export const easingConfigDrawerIn: AnimationConfigType = {
  duration: 300,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1) //Easing.ease
};

export const easingConfigDrawerOut: AnimationConfigType = {
  duration: 300,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1) //Easing.ease
};

export const easingConfigSlide: AnimationConfigType = {
  duration: 250,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1) //Easing.ease
}

export const easingConfigModal: AnimationConfigType = {
  duration: 300,
  easing: Easing.ease,
};

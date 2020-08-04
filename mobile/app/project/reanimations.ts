import Animated, { Easing } from 'react-native-reanimated';

export type AnimationConfigType = {
  duration: number;
  easing: Animated.EasingFunction;
};

export const easingConfigDrawerIn: AnimationConfigType = {
  duration: 250,
  easing: Easing.ease,
};

export const easingConfigDrawerOut: AnimationConfigType = {
  duration: 250,
  easing: Easing.out(Easing.ease),
};

export const easingConfigModal: AnimationConfigType = {
  duration: 300,
  easing: Easing.ease,
};

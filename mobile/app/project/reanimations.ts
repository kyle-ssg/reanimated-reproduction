import Animated, { Easing } from 'react-native-reanimated';

export type AnimationConfigType = {
    duration:number,
    easing: Animated.EasingFunction
}

export const easingConfigDrawer:AnimationConfigType = {
    duration:350,
    easing: Easing.bezier(.17,.67,.46,.9),
}

export const easingConfigModal:AnimationConfigType = {
    duration: 250,
    easing: Easing.ease,
}

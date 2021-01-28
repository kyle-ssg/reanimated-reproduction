import React, { FunctionComponent, useEffect, useRef } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import useIsMount from 'common/providers/useIsMount';
import { easingFade } from '../../../project/animation-util/reanimations';

type ComponentType = ReactNative.ViewProps & {
  value: number // between 0 and 1
  startValue?:number
  autostart: boolean
  delay?:number
  duration?: number
  animatedValue?: number
}

const Fade: FunctionComponent<ComponentType> = ({ value, delay=0,autostart, duration= easingFade.duration, startValue = 0, ...props }) => {
  const isMount = useIsMount();
  const animationValue = useSharedValue<number>(autostart?startValue:value, false);

  useEffect(()=>{
    if (isMount && !autostart) return // determine whether to start animation on mount
    if (!delay && value) {
      animationValue.value = withTiming(value, {
        ...easingFade,
        duration
      });
    } else {
      setTimeout(()=>{
        animationValue.value = withTiming(value, {
          ...easingFade,
          duration
        }); // animate to new value
      }, delay)

    }

  },[value,isMount, delay, duration, animationValue.value, autostart]);

  const animatedStyle = useAnimatedStyle(()=>{
    return {
      opacity: animationValue.value
    }
  })

  return (
    <Animated.View {...props} style={[animatedStyle, props.style]} />
  );
};

export default Fade;

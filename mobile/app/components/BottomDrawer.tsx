import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import Animated, {
  add,
  and,
  block,
  call,
  clockRunning,
  cond,
  eq,
  interpolate,
  set,
  startClock,
  stopClock,
  timing,
  useCode,
  useValue,
  Extrapolate,
  Value, not, multiply, divide, min, max,
} from 'react-native-reanimated';
import { clamp, snapPoint, timing as timing2, useClock, useConst, usePanGestureHandler } from 'react-native-redash/src';
import { easingConfigDrawerIn, easingConfigDrawerOut, easingConfigModal } from '../project/reanimations';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import CustomModal from 'components/CustomModal';

export type ModalType = {
  animatedValue?: Animated.Value<number>;
  visible: boolean;
  preventDismiss: boolean;
  height: number;
  style: ReactNative.ViewStyle;
  onDismissPress?: () => void;
};

const BottomDrawer: FunctionComponent<ModalType> = ({
  animatedValue: _animatedValue,
  style,
  onDismissPress,
  visible,
  preventDismiss,
  height = 200,
  children,
})=> {
  const [modalVisible,setModalVisible]= useState<boolean>(false);
  const snapPoints = [0,height]
  const $clock = useClock();

  const {
    state:gestureState,
    gestureHandler,
    translation,
    velocity,
  } = usePanGestureHandler();

  const $trigger = useValue<number>(0);
  const $on = useValue<number>(visible?1:0);
  const state = useConst({
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  });

  const value = useConst(add(interpolate(
    state.position,
    {
      inputRange: [0,1],
      outputRange: [height,0]
    }
  ), translation.y));
  const gestureAnimationFinished = useValue(0);


  useCode(()=>( // gesture finished, animate to snap point
    cond(eq(gestureState,State.END), [
      set(translation.y, timing2({
        from:translation.y,
        easing:easingConfigDrawerIn.easing,
        duration:max(50,min(easingConfigDrawerIn.duration,multiply(easingConfigDrawerIn.duration,clamp(divide(100,velocity.y),1,5)))),
        finished:gestureAnimationFinished,
        to:snapPoint(value,velocity.y,snapPoints)
      }))
    ])
  ),[translation.y, velocity.y])

  useCode(()=>(
    cond(gestureAnimationFinished, [ // gesture animation completed, reset the gesture states
      set(gestureState, 0),
      set(gestureAnimationFinished, 0),

      cond(eq(translation.y,0),[
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        set(translation.y, 0),
        set(state.position, 1),
      ]),
      cond(not(eq(translation.y, 0)),[
        set(translation.y, 0),
        call([],()=>{
          setModalVisible(false);
          onDismissPress();
        })
      ])

    ])),[gestureAnimationFinished, translation.y, state]);

  const translateY = useConst(clamp(value,
    snapPoints[0],
    snapPoints[1]
  ));

  useEffect(()=>{
    if(visible) {
      setModalVisible(true);
    }
    $trigger.setValue(1);
    $on.setValue(visible?1:0);
  },[$on,$trigger, visible]);

  const onComplete = useCallback(([newValue]: readonly number[]) => {
    if (newValue === 0) {
      setModalVisible(false)
    }
  }, [setModalVisible])

  useCode(()=>(
    block([
      cond ($trigger, [ // modal has been triggered, start the clock
        startClock($clock),
        set($trigger, 0),
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
      ]),
      cond($on, timing($clock, state, {
        toValue: $on,
        ...easingConfigDrawerIn
      })),
      cond(not($on), timing($clock, state, { // slide out
        toValue: $on,
        ...easingConfigDrawerOut
      })),
      cond(and(clockRunning($clock),state.finished), [ // Reset the clocks and state
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        stopClock($clock),
        call([state.position],onComplete),
      ])
    ])
  ), [$on, $clock, translation.y]);

  const animation = useConst(add(
    state.position,
    interpolate(translateY, {
      inputRange: [0, height],
      outputRange: [0, -1],
      extrapolate: Extrapolate.CLAMP
    })
  ))

  return (
      <CustomModal
        animatedValue={animation}
        fadeContent={false}
        onDismissPress={onDismissPress}
        preventDismiss={preventDismiss}
        style={styles.container}
        visible={modalVisible}
      >
          <PanGestureHandler enabled={!preventDismiss} {...gestureHandler}>
              <Animated.View
                style={[styles.drawer,style, { height, transform: [{ translateY }] }]}
              >
                  {children}
              </Animated.View>
          </PanGestureHandler>
      </CustomModal>
  )

}

const styles = ReactNative.StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  drawer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
});


export default BottomDrawer;

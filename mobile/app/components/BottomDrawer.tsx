import React, { FunctionComponent, useEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useDerivedValue,
  withDecay, runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import CustomModal from './CustomModal';
import { drawerSlideInConfig, drawerSlideOutConfig } from '../project/animation-util/reanimations';
import { Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import { clamp } from '../project/animation-util/clamp';
import ScreenContainer from 'components/ScreenContainer';
import LinearGradient from "react-native-linear-gradient";

export const closest = (value, values) => {
  'worklet';
  return values.reduce(function (prev, curr) {
    return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
  });
};

export type ModalType = {
  animatedValue?: Animated.SharedValue<number>;
  visible: boolean;
  preventDismiss?: boolean;
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
                                                      height = Dimensions.get('window').height / 2,
                                                      children,
                                                    }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const snapPoints = [0, height];
  const translateY = useSharedValue<number>(
    Platform.select({
      ios: height,
      android: height + 80 // for some reason
    })
  );
  useEffect(() => {
    if (visible) {
      visible && runOnJS(setModalVisible)(true);
      setTimeout(()=>{
        requestAnimationFrame(()=>{
          translateY.value = withTiming(snapPoints[0], drawerSlideInConfig);
          if (_animatedValue) {
            _animatedValue.value = withTiming(1, drawerSlideInConfig);
          }
        })
      },100)

    } else if (modalVisible) {
      if (_animatedValue) {
        _animatedValue.value = withTiming(0, drawerSlideOutConfig);
      }
      translateY.value = withTiming(snapPoints[1], drawerSlideOutConfig, () => {
        runOnJS(setModalVisible)(false);
      });
    }
  }, [visible, _animatedValue, modalVisible, snapPoints, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedValue = useDerivedValue(() =>
    interpolate(
      translateY.value,
      [snapPoints[0], snapPoints[1]],
      [1, 0],
      Extrapolate.CLAMP
    )
  );

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      // @ts-ignore
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      // @ts-ignorer
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, height);
      if (_animatedValue) {
        _animatedValue.value = (height - translateY.value) / height;
      }
    },
    onEnd: ({ velocityY }) => {
      const value = velocityY * 0.2 + translateY.value;
      const closestValue = closest(value, snapPoints);
      if (closestValue === snapPoints[0]) {
        translateY.value = withTiming(closestValue, drawerSlideInConfig);
        if (_animatedValue) {
          _animatedValue.value = withTiming(1, drawerSlideInConfig);
        }
      } else {
        if (_animatedValue) {
          //todo : ideally this should use decay like the
          _animatedValue.value = withTiming(0, drawerSlideInConfig);
        }
        translateY.value = withDecay(
          {
            velocity: Math.min(1200, Math.max(700, velocityY)),
            clamp: [snapPoints[0], snapPoints[1]],
          },
          () => {
            runOnJS(onDismissPress)();
            runOnJS(setModalVisible)(false);
          }
        );
      }
    },
  });

  return (
    <CustomModal
      controlled
      fadeContent={false}
      onDismissPress={onDismissPress}
      preventDismiss={preventDismiss}
      style={styles.container}
      controlledValue={animatedValue}
      visible={modalVisible}
    >
      <KeyboardAvoidingView behavior="padding">
        <PanGestureHandler enabled={!preventDismiss} {...{ onGestureEvent }}>
          <Animated.View
            style={[animatedStyle, { height }]}
          >
            <View style={[styles.drawer, style]}>
              {children}
            </View>
          </Animated.View>
        </PanGestureHandler>
      </KeyboardAvoidingView>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  drawer: {
    flex:1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
});

export default BottomDrawer;

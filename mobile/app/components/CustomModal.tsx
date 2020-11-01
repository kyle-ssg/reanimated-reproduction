import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Modal } from "react-native";
import Animated, {
  and,
  block,
  cond,
  not,
  set,
  useCode,
  useValue,
  Value,
  timing,
  Easing,
  startClock,
  clockRunning,
  call,
  stopClock,
  interpolate,
} from "react-native-reanimated";
import { useClock, useConst } from "react-native-redash/src";
import { easingConfigModal } from "../project/reanimations";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

export type ModalType = {
  animatedValue?: Animated.Node<number>;
  fadeContent?: boolean;
  visible: boolean;
  style: ReactNative.ViewStyle;
  onDismissPress?: () => void;
  preventDismiss?: boolean;
};

export type ModalInnerType = {
  fadeContent?: boolean;
  style: ReactNative.ViewStyle;
  onDismissPress?: () => void;
  children: React.ReactNode;
  animation: Animated.Value<number>;
};

const ModalInner = gestureHandlerRootHOC(function GestureExample({
  style,
  onDismissPress,
  fadeContent,
  children,
  animation,
}: ModalInnerType) {
  // We do this in order to support gestures within the modal
  return (
    <View style={[style, ReactNative.StyleSheet.absoluteFill]}>
      <TouchableOpacity
        onPress={onDismissPress}
        activeOpacity={1}
        style={[ReactNative.StyleSheet.absoluteFill]}
      />
      {fadeContent ? (
        <Animated.View style={{ opacity: animation }}>{children}</Animated.View>
      ) : (
        children
      )}
    </View>
  );
});

export const CustomModal: FunctionComponent<ModalType> = ({
  animatedValue: _animatedValue,
  children,
  fadeContent = true,
  onDismissPress,
  preventDismiss,
  style,
  visible,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const $clock = useClock();

  const $trigger = useValue<number>(0);
  const $on = useValue<number>(visible ? 1 : 0);
  const state = useConst({
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  });

  useEffect(() => {
    if (_animatedValue) {
      setModalVisible(visible);
    } else {
      if (visible) {
        setModalVisible(true);
      }
      $trigger.setValue(1);
      $on.setValue(visible ? 1 : 0);
    }
  }, [$on, $trigger, visible, _animatedValue]);

  const onComplete = _animatedValue
    ? null
    : function ([newValue]: readonly number[]) {
      if (newValue === 0) {
        setModalVisible(false);
      }
    };

  if (!_animatedValue) {
    useCode(
      () =>
        block([
          cond($trigger, [
            // modal has been triggered, reset the clock
            startClock($clock),
            set($trigger, 0),
            set(state.finished, 0),
            set(state.time, 0),
            set(state.frameTime, 0),
          ]),
          block([
            // set the current timing function
            timing($clock, state, {
              toValue: $on,
              ...easingConfigModal,
            }),
          ]),
          cond(and(clockRunning($clock), state.finished), [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.frameTime, 0),
            stopClock($clock),
            call([state.position], onComplete),
          ]),
        ]),
      [$on, $clock]
    );
  } else {
    useConst(null);
  }

  const animation = _animatedValue || state.position;

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      statusBarTranslucent={true}
    >
      <Animated.View style={[styles.backdrop, { opacity: animation }]} />
      <ModalInner
        style={style}
        onDismissPress={preventDismiss ? null : onDismissPress}
        fadeContent={fadeContent}
        animation={animation}
      >
        {children}
      </ModalInner>
    </Modal>
  );
};

const styles = ReactNative.StyleSheet.create({
  backdrop: {
    ...ReactNative.StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
});

export default CustomModal;

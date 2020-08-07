import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import Animated, {
  and,
  block,
  cond,
  not,
  set,
  useCode,
  useValue,
  Value,
  Easing, startClock, clockRunning, call, stopClock,
} from 'react-native-reanimated';
import { timing, useClock, useConst } from 'react-native-redash';


export type ModalType = {
  animatedValue?: Animated.Value<number>;
  visible: boolean;
  style: ReactNative.ViewStyle;
  onDismissPress?: () => void;
};


const CustomModal: FunctionComponent<ModalType> = ({
  animatedValue: _animatedValue,
  style,
  onDismissPress,
  visible,
  children,

})=> {
  const [modalVisible,setModalVisible]= useState<boolean>(false);
  const $clock = useClock();
  const $on = useValue<number>(visible?1:0);
  const $animation = useValue<number>(0);

  useEffect(()=>{
    if(visible) {
      setModalVisible(true);
    }
    $on.setValue(visible?1:0);
  },[$on, visible]);

  const onComplete = function([newValue]: readonly number[]) {
    if (newValue === 0) {
      setModalVisible(false)
    }
  }

  useCode(()=>(
    block([
      set($animation, timing({
        from: $animation,
        clock:$clock,
        duration: 300,
        easing: Easing.ease,
        to:$on
      })),
      cond(
        not(clockRunning($clock)),
        block([
          call([$animation],onComplete)
        ])
      )
    ])

  ), [$animation, $clock]);
  return (
      <Modal
        visible={modalVisible}
        transparent={true}
        statusBarTranslucent={true}
      >
          <Animated.View style={[style, styles.backdrop, { opacity: $animation, }]} >
              <>
                  <TouchableOpacity
                    onPress={onDismissPress}
                    activeOpacity={1}
                    style={ReactNative.StyleSheet.absoluteFill}
                  />
                  {children}
              </>
          </Animated.View>
      </Modal>
  )

}

const styles = ReactNative.StyleSheet.create({
  backdrop: {
    ...ReactNative.StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
});


export default CustomModal;

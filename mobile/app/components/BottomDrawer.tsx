import React, { FunctionComponent, useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native'; // we need this to make JSX compile
import Animated, {
    add,
    cond,
    eq,
    interpolate,
    set,
    Easing,
    useCode,
    and
} from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
    clamp,
    useConst,
    useValue,
    timing,
    snapPoint,
    onGestureEvent,
    usePanGestureHandler
} from 'react-native-redash';
import { CustomModal, ModalType } from 'components/CustomModal';
import { usePreviousState } from 'components/utility-components/usePreviousState';
import { easingConfigDrawer } from '../project/reanimations';

type ComponentType = ModalType & {
  height: number;
  disabled: boolean;
  animatedValue?: Animated.Value<number>;
  visible;
};

const x = '';

const BottomDrawer: FunctionComponent<ComponentType> = ({
    visible,
    disabled = false,
    children,
    height = ReactNative.Dimensions.get('screen').height / 2,
    animatedValue = useValue(0)
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const snapPoints = useConst([0, height]);
    const {
        state,
        gestureHandler,
        translation,
        velocity
    } = usePanGestureHandler();
    const offset = useValue(height);
    const value = add(offset, translation.y);
    const translateY = clamp(
    // snap to snap points
        cond(
            eq(state, State.END),
            set(
                offset,
                timing({
                    from: value,
                    ...easingConfigDrawer,
                    to: snapPoint(value, velocity.y, snapPoints)
                })
            ),
            value
        ),
        snapPoints[0],
        snapPoints[1]
    );
    useCode(
        () =>
        // snap to snap points
            cond(
                and(eq(state, State.UNDETERMINED), visible),
                set(
                    offset,
                    timing({
                        from: value,
                        ...easingConfigDrawer,
                        to: 0
                    })
                )
            ),
        [visible]
    );
    useCode(
        () =>
            set(
                animatedValue,
                interpolate(translateY, {
                    inputRange: [0, height],
                    outputRange: [1, 0]
                })
            ),
        [animatedValue, translateY]
    );
    useEffect(
        () => {
            setModalVisible(visible);
        },
        [visible]
    );
    return (
        <CustomModal
          style={styles.container}
          animatedValue={animatedValue}
          visible={modalVisible}
    >
            <PanGestureHandler enabled={!disabled} {...gestureHandler}>
                <Animated.View
                  style={[styles.drawer, { height, transform: [{ translateY }] }]}
        >
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </CustomModal>
    );
};

const styles = ReactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    drawer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white'
    }
});
type PanGestureType = {
  // pass in usePanGestureHandler if you want to link animation values
  position: any;
  translation: any;
  velocity: any;
  state: any;
  gestureHandler: any;
};
export default BottomDrawer;

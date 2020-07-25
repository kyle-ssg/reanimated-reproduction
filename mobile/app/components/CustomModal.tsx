import React from 'react';
import { FunctionComponent, Component,useState, useEffect } from 'react';
import {
    Modal
} from 'react-native'
import { ease } from '../project/animations'
import { usePreviousState } from './utility-components/usePreviousState';

const fadeInConfig = {
    duration: 350,
    useNativeDriver:true,
    easing: ease,
    toValue:1
}

const fadeOutConfig = {
    duration: 350,
    useNativeDriver:true,
    easing: ease,
    toValue:0
}

type ComponentType = {
  dark?:boolean;
  visible:boolean;
  fadeContent?:boolean;
  style: ReactNative.ViewStyle;
  onDismissPress?:()=>void;
}

const CustomModal: FunctionComponent<ComponentType> = ({ dark, style, onDismissPress, visible, children, fadeContent }) => {
    const [animatedValue, _] = useState(new Animated.Value(0));
    const [modalVisible, setModalVisible] = useState(visible);
    const prevVisible = usePreviousState(visible)
    useEffect(()=>{
        if(prevVisible === undefined) {
            if (visible) {
                // animate in if the modal starts as visible
                Animated.timing(animatedValue, fadeInConfig).start();
            }
        } else if (prevVisible!==visible) {
            if (visible) { // The modal has become visible=true
                setModalVisible(true)
                Animated.timing(animatedValue, fadeInConfig).start();
            } else { // The modal has become visible=false
                Animated.timing(animatedValue, fadeOutConfig).start(()=>setModalVisible(false));
            }
        }
    }, [dark,visible])
    return (
        <Modal
          visible={!!modalVisible}
          transparent={true}
          statusBarTranslucent={true}
    >
            <Animated.View
              style={[
                  style,
                  dark? styles.darkBackdrop: styles.lightBackdrop,
                  {
                      opacity: animatedValue,
                  },
              ]}
      >
                <TouchableOpacity onPress={onDismissPress} activeOpacity={1} style={ReactNative.StyleSheet.absoluteFill}/>
                {fadeContent && children}
            </Animated.View>
            {!fadeContent && (
            <View style={styles.childrenContainer}>
                {children}
            </View>
            )}
        </Modal>
    );
};

export { CustomModal };


export const styles = ReactNative.StyleSheet.create({
    parentContainer: {
        position:"absolute",
    },
    lightBackdrop: {
        position: "absolute",
        backgroundColor:"rgba(255,255,255,.5)",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    },
    darkBackdrop: {
        position: "absolute",
        backgroundColor:"rgba(0,0,0,.5)",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    },
    childrenContainer: {
        position: "absolute",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    }
});


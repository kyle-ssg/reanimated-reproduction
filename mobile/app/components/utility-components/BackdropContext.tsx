import React, { FunctionComponent, useContext } from 'react'
export const darkBackdrop = React.createContext(new Animated.Value(0));
export const lightBackdrop = React.createContext(new Animated.Value(0));

type ComponentType = {}

export const LightBackdrop: FunctionComponent<ComponentType> = ({}) => {
    let theme = useContext(lightBackdrop);
    return (
        <Animated.View style={[styles.lightBackdrop, { opacity:theme }]}>
            <Text>{theme+""}</Text>
        </Animated.View>
    );
};

export const DarkBackdrop: FunctionComponent<ComponentType> = ({}) => {
    let theme = useContext(darkBackdrop);
    return (
        <Animated.View style={[styles.darkBackdrop, { opacity:theme }]}>
            <Text>{theme+""}</Text>
        </Animated.View>
    );
};

const styles = ReactNative.StyleSheet.create({
    lightBackdrop: {
        position: "absolute",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    },
    darkBackdrop: {
        position: "absolute",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    }
})

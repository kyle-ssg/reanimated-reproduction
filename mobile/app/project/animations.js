import * as Animatable from 'react-native-animatable';
import { Easing } from 'react-native';

Animatable.initializeRegistryWithDefinitions({
    basicListEntrance: {
        from: { opacity: 1, 'translateX': 40 },
        to: { opacity: 1, 'translateX': 0 },
    },
    basicListEntranceFade: {
        from: { opacity: 0, 'translateX': 40 },
        to: { opacity: 1, 'translateX': 0 },
    },
});

global.Animations = {
    acceleration: Easing.bezier(0.4, 0.0, 1, 1), // See https://material.io/design/motion/speed.html#easing
    deceleration: Easing.bezier(0.0, 0.0, 0.2, 1), // See https://material.io/design/motion/speed.html#easing
    standard: Easing.bezier(0.4, 0.0, 0.2, 1), // See https://material.io/design/motion/speed.html#easing
    listItem: {
        useNativeDriver: true,
        animation: 'basicListEntrance',
        duration: 360,
        easing: 'ease-in-cubic',
    },
};
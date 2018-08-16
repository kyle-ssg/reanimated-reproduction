import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
    basicListEntrance: {
        from: {opacity: 1, ['translateX']: 40},
        to: {opacity: 1, ['translateX']: 0},
    },
    basicListEntranceFade: {
        from: {opacity: 0, ['translateX']: 40},
        to: {opacity: 1, ['translateX']: 0},
    },
});

global.Animations = {
    listItem: {
        useNativeDriver:true,
        animation: 'basicListEntrance',
        duration: 360,
        easing: 'ease-in-cubic',
    }
}
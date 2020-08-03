// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleSheet } from 'react-native';

const style:Record<string, ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle> = {
    // Utility classes
    // -------------------------

    noPadding: {
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },

    textCenter: {
        textAlign: 'center',
    },

    textLeft: {
        textAlign: 'left',
    },

    textRight: {
        textAlign: 'right',
    },

    alignLeft: {
        alignItems: 'flex-start',
    },

    alignRight: {
        alignItems: 'flex-end',
    },

    backdrop: {
        flex: 1,
        backgroundColor: styleVariables.backdropBackground,
    },

    padded: {
        padding: styleVariables.paddingBase,
    },

    clipped: {
        overflow: 'hidden',
    },

    shadow: {
        shadowColor: '#333',
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
    },

};

module.exports = style;

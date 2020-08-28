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
};

module.exports = style;

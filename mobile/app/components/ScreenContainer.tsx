import React, { FunctionComponent } from 'react'; // we need this to make JSX compile
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import * as ReactNative from 'react-native';
type ComponentType = ReactNative.ViewProps & { withoutSafeAreaView? : boolean };

const ScreenContainer: FunctionComponent<ComponentType> = ({ children, withoutSafeAreaView, ...props }) => {
  // Note: if we use a transparent status bar we need to add StatusBar.currentHeight to padding top for android
  return !withoutSafeAreaView ?
    (
      <View style={Styles.body} {...props}>
        <ReactNative.SafeAreaView style={safeAreaStyles}>
          {children}
        </ReactNative.SafeAreaView>
      </View>
    )
    : (
      <View style={Styles.body} {...props}>
        <View style={Styles.body}>
          {children}
        </View>
      </View>
    )
  ;
};
const styles = ReactNative.StyleSheet.create({
  padTop:{ paddingTop: styleVariables.insets.top }
});
const safeAreaStyles = [Styles.body, styles.padTop ];

export default ScreenContainer;

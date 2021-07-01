import React, { FunctionComponent } from 'react'; // we need this to make JSX compile
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import * as ReactNative from 'react-native';
import '../style/style_variables';
import Flex from 'components/base/grid/Flex';

type ComponentType = ReactNative.ViewProps & { withoutSafeAreaView? : boolean };

const ScreenContainer: FunctionComponent<ComponentType> = ({ children, withoutSafeAreaView, ...props }) => {
  // Note: if we use a transparent status bar we need to add StatusBar.currentHeight to padding top for android
  return !withoutSafeAreaView ?
    (
        <ReactNative.SafeAreaView {...props} style={safeAreaStyles}>
          {children}
        </ReactNative.SafeAreaView>
    )
    : (
      <Flex {...props}>
          {children}
      </Flex>
    )
  ;
};
const styles = ReactNative.StyleSheet.create({
  padTop:{ paddingTop: styleVariables.insets.top }
});
const safeAreaStyles = [{ flex:1 }, styles.padTop ];

export default ScreenContainer;

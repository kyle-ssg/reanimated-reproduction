import React, { FunctionComponent } from 'react'; // we need this to make JSX compile
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type ComponentType = LinearGradientProps & { withoutSafeAreaView: boolean };

const ScreenContainer: FunctionComponent<ComponentType> = ({ children, withoutSafeAreaView, ...props }) => {
  return !withoutSafeAreaView ? (
      <SafeAreaProvider>
        <SafeAreaView style={Styles.body}>
          {children}
        </SafeAreaView>
      </SafeAreaProvider>
  ) : (
      <Flex style={Styles.body}>
        {children}
      </Flex>
  );
};

export default ScreenContainer;

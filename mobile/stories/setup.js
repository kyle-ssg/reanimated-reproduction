import '@storybook/addon-ondevice-knobs/register';
import GenericScreen from 'screens/examples/GenericScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { getStorybookUI, configure } from '@storybook/react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import '../app/project/api/api';
import _store from 'common/store';
import defaultNavigationOptions from '../app/style/style_navs';

const { store } = _store({}, true);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});

// import stories
export function setup(cb) {
  configure(() => {
    cb();
  }, module);
}

export const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
);
export const withSafeArea = (story) => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
      { story() }
    </SafeAreaView>
  </SafeAreaProvider>
);

export const withPaddedContainer = (story) => (
  <Flex style={Styles.p5}>
    { story() }
  </Flex>
);
export const withScrollView = (story) => (
  <Flex style={[Styles.pt10]}>
    <ScrollView style={{ overflow: 'visible' }}>
      { story() }
    </ScrollView>
  </Flex>
);

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;


export const withNavbarWrapper = (story) => (
  <Provider store={store}>
    <StatusBar backgroundColor="transparent" translucent barStyle="dark-content"/>
    <>
      <NavigationContainer independent>
        <Navigator screenOptions={defaultNavigationOptions} initialRouteName="1">
          <Stack.Screen
            name={"1"}
            options={{ title:"A generic page" }}
            initialParams={{ children: story() }}
            component={GenericScreen}
          />
        </Navigator>

      </NavigationContainer>
    </>
  </Provider>
);
export const getStory = (name) => storiesOf(name, module)
  .addDecorator(withKnobs)
  .addDecorator(withSafeArea)
  .addDecorator(withProvider);

export default StorybookUIRoot;

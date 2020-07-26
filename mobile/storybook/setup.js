// eslint-disable-next-line
import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';
import { Provider } from 'react-redux';
import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react-native';
// eslint-disable-next-line
import { withKnobs } from '@storybook/addon-knobs';
import _store from 'common/store';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../app/style/style_navs';
import { RouteUrls } from '../app/route-urls';
import { routes } from '../app/routes';
import GenericScreen from '../app/screens/GenericScreen';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const StorybookUIRoot = getStorybookUI({
    asyncStorage: ReactNative.AsyncStorage
});
const store = _store();

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
                      options={{title:"A generic page"}}
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

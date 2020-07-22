import React, { Component } from 'react';
import StorybookUIRoot from '../storybook/index';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from 'common/store';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


enableScreens();
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
import defaultNavigationOptions from './style/style_navs';

import { routes } from './routes'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RouteUrls } from './route-urls';
const linking = {
    prefixes: ['mobile://'],
};

class App extends Component {
    static displayName = 'TheComponent';
    state = {
        name: new Date().valueOf() + ""
    }
    static propTypes = {};

    render() {
        // const { props } = this
        return (
            <>
                <Provider store={store()}>
                    <NavigationContainer linking={linking}>
                        <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.home}>
                            <Stack.Screen
                              name={RouteUrls.home}
                              options={routes[RouteUrls.home].options}
                              component={routes[RouteUrls.home].component}
                            />
                            <Stack.Screen
                              name={RouteUrls.generic}
                              options={routes[RouteUrls.generic].options}
                              component={routes[RouteUrls.generic].component}
                            />
                            <Stack.Screen
                              name={RouteUrls.tabs}
                              options={routes[RouteUrls.tabs].options}
                              component={routes[RouteUrls.tabs].component}
                            />
                        </Navigator>
                    </NavigationContainer>
                </Provider>
            </>
        );
    }
}

export default App;

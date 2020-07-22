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
                    <NavigationContainer>
                        <Navigator screenOptions={defaultNavigationOptions} initialRouteName={routes.home.name}>
                            <Stack.Screen
                              name={RouteUrls.home}
                              options={routes.home.options}
                              component={routes.home.component}
                            />
                            <Stack.Screen
                              name={RouteUrls.about}
                              options={routes.about.options}
                              component={routes.about.component}
                        />
                            <Stack.Screen
                              name={RouteUrls.modal}
                              options={routes.modal.options}
                              component={routes.modal.component}
                        />
                            <Stack.Screen
                              name={RouteUrls.tabs}
                              options={routes.tabs.options}
                              component={routes.tabs.component}
                            />
                        </Navigator>
                    </NavigationContainer>
                </Provider>
            </>
        );
    }
}

export default App;

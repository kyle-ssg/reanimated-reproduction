import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { StatusBar, StyleSheet } from 'react-native';
import store from 'common/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import defaultNavigationOptions from './style/style_navs';
import { routes } from './routes';
import { RouteUrls } from '../../common/types/route-urls';
import { initialWindowMetrics } from 'react-native-safe-area-context';


enableScreens();
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
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
                    <StatusBar backgroundColor="#333" barStyle="light-content"/>
                    <>
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
                    </>
                </Provider>
            </>
        );
    }
}

const styles = StyleSheet.create({
    widgetContainer: {
        position:"absolute",
        right:(20 + initialWindowMetrics.insets.bottom)/2,
        bottom:20 + initialWindowMetrics.insets.bottom,
    }
})


export default App;

import React, { Component, ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import defaultNavigationOptions from '../style/style_navs';
import { routes } from '../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RouteUrls } from '../route-urls';
import BottomNav from 'components/BottomNav';

type ComponentType = {}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigator = Stack.Navigator;

const HomeStack = () => (
    <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.home}>
        <Stack.Screen
          name={RouteUrls.home}
          options={routes[RouteUrls.home].options}
          component={routes[RouteUrls.home].component}
          initialParams={routes[RouteUrls.home].params}
        />
    </Navigator>
)

class MainAppNavigator extends Component<ComponentType> {
  render() {
    return (
        <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
            <Tab.Screen
              name={RouteUrls.home}
              component={HomeStack}
            />
        </Tab.Navigator>
    )
  }
}

export default MainAppNavigator;

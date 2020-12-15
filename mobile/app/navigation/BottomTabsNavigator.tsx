import React, { Component, ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import defaultNavigationOptions from '../style/navigation_styles';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RouteUrls } from '../route-urls';
import BottomNav from 'components/BottomNav';

type ComponentType = {};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigator = Stack.Navigator;

const Stack1 = () => (
  <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.ReportsDashboardScreen}>
    <Stack.Screen
      name={RouteUrls.home}
      options={routes[RouteUrls.home].options}
      component={routes[RouteUrls.home].component}
      initialParams={routes[RouteUrls.home].params}
    />
  </Navigator>
)

const Stack2 = () => (
  <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.SeagullsScreen}>
    <Stack.Screen
      name={RouteUrls.generic}
      options={routes[RouteUrls.generic].options}
      component={routes[RouteUrls.generic].component}
      initialParams={routes[RouteUrls.generic].params}
    />
  </Navigator>
)

const MainAppNavigator = ({ route }) => {
  return (
    <Flex>
      <Tab.Navigator lazy={false} initialRouteName={RouteUrls.generic} tabBar={props => <BottomNav {...props} />}>
        <Tab.Screen
          name={RouteUrls.home}
          component={Stack1}
        />
        <Tab.Screen
          name={RouteUrls.generic}
          component={Stack2}
        />
      </Tab.Navigator>
    </Flex>

  );
};

export default MainAppNavigator;

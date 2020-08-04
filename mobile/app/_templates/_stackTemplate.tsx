import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../style/style_navs';
import { routes } from '../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RouteUrls } from '../route-urls';

type ComponentType = {};
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;

const TheComponent: FunctionComponent<ComponentType> = ({}) => {
  return (
    <NavigationContainer independent>
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={RouteUrls.home}
      >
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
      </Navigator>
    </NavigationContainer>
  );
};

export default TheComponent;

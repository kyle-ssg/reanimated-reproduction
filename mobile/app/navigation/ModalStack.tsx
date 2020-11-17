import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import defaultNavigationOptions from "../style/style_navs";
import { routes, withModalOptions } from '../routes';
import { RouteUrls } from "../route-urls";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "react-native-screens/native-stack";
import withScreen from 'screens/withScreen';

export default function (TheScreen: React.Component, url: RouteUrls) {
  const Stack = createNativeStackNavigator();
  const Navigator = Stack.Navigator;

  const StackScreen = FunctionComponent = ({ webViewProps }) => {
    return (
      <NavigationContainer independent>
        <Navigator
          screenOptions={defaultNavigationOptions}
          initialRouteName={RouteUrls.home}
        >
          <Stack.Screen
            name={RouteUrls.home}
            options={withModalOptions(routes[RouteUrls.home].options)}
            component={TheScreen}
            initialParams={{ webViewProps }}
          />
        </Navigator>
      </NavigationContainer>
    );
  };

  return withScreen(StackScreen);
}


// Usage
// export default ModalStack(SomeScreen, RouteUrls.SomeScreenScreen);

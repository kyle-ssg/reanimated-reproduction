import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import defaultNavigationOptions from "../style/style_navs";
import { routes } from "../routes";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { RouteUrls } from "../route-urls";
import withScreen, { Screen } from "./withScreen";

type ComponentType = Screen & {};
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;

const StackScreen: FunctionComponent<ComponentType> = ({ style }) => {
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
              <Stack.Screen
                name={RouteUrls.stack}
                options={routes[RouteUrls.stack].options}
                component={routes[RouteUrls.stack].component}
              />
          </Navigator>
      </NavigationContainer>
  );
};

export default withScreen(StackScreen);

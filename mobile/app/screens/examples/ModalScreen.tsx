import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import defaultNavigationOptions from "../../style/style_navs";
import { routes, withModalOptions } from '../../routes';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { RouteUrls } from "../../route-urls";
import withScreen, { Screen } from "../withScreen";
type ComponentType = Screen & {};
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;

import { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

class _ModalScreen extends Component<ComponentType> {
  state = {};

  render() {
    return (
        <SafeAreaView>
            <Text>Hi</Text>
        </SafeAreaView>
    );
  }
}

const ModalScreen = withScreen(_ModalScreen)



const StackScreen: FunctionComponent<ComponentType> = () => {
  return (
      <NavigationContainer independent>
          <Navigator
            screenOptions={defaultNavigationOptions}
            initialRouteName={RouteUrls.home}
          >
              <Stack.Screen  // Default modal title etc goes here
                name={"/"}
                options={withModalOptions({
                  title:"Modal Title"
                })}
                component={ModalScreen}
              />
          </Navigator>
      </NavigationContainer>
  );
};

export default withScreen(StackScreen);

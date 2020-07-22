import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../style/style_navs';
import { routes } from '../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

type ComponentType = {

}
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;

const TheComponent: FunctionComponent<ComponentType> = ({})=>{
    return (
        <NavigationContainer>
            <Navigator screenOptions={defaultNavigationOptions} initialRouteName={routes.home.name}>
                <Stack.Screen
                  name={routes.home.name}
                  options={routes.home.options}
                  component={routes.home.component}
          />
                <Stack.Screen
                  name={routes.about.name}
                  options={routes.about.options}
                  component={routes.about.component}
          />
                <Stack.Screen
                  name={routes.modal.name}
                  options={routes.modal.options}
                  component={routes.modal.component}
          />
            </Navigator>
        </NavigationContainer>
    );
}

export default TheComponent;


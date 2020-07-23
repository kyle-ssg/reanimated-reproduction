import React from 'react';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';
import { ButtonNav } from './components/base/forms/Button'
import GenericScreen from './screens/GenericScreen';
import HomeScreen from './screens/HomeScreen';
import { RouteUrls } from './route-urls';
import TabLayout from './screens/TabLayout';

interface IRoute {
  options?: Partial<NativeStackNavigationOptions>,
  component: React.ComponentType,
  params?: Record<string, any>
}
export const routes: Record<RouteUrls, IRoute> = {
    [RouteUrls.home]: {
        options: {
            title: 'Home',
            headerTitleStyle: {
                color:"white"
            },
            headerStyle: {
                backgroundColor:"#333"
            }
        },
        component: HomeScreen
    },
    [RouteUrls.generic]: {
        options: {
            title: 'About',
        },
        component: GenericScreen,
    },
    [RouteUrls.tabs]: {
        options: {
            headerShown: false
        },
        component: TabLayout,
    },
};

export const withModalOptions = (base:Partial<NativeStackNavigationOptions>, navigation) => (
    {
        ...base,
        hideBackButton:true,
        headerHideBackButton: true,
        headerRight: (props:any) => {
            return <ButtonNav onPress={()=>navigation.pop()}>
                <ION
                  style={{
                      color: props.tintColor,
                      fontSize: styleVariables.fontSizeH1
                  }} name="ios-close"
              />
            </ButtonNav>
        }
    }
)

global.routes = routes;

import React from 'react';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';
import { ButtonNav } from './components/base/forms/Button'
import GenericScreen from './screens/GenericScreen';
import HomeScreen from './screens/HomeScreen';
import { RouteUrls } from './route-urls';
import TabLayout from './screens/TabLayout';
import StackScreen from './screens/StackScreen';

type functionComponent = (props: any) => React.ReactNode;
interface IRoute {
  options?: Partial<NativeStackNavigationOptions>,
  component: React.ComponentType<any>| functionComponent,
  params?: Record<string, any>
}
// Contains default route config and components
export const routes: Record<RouteUrls, IRoute> = {
    [RouteUrls.home]: {
        options: {
            title: 'Home',
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
            headerShown: false,
        },
        component: TabLayout,
    },
    [RouteUrls.stack]: {
        options: {
            headerShown: false,
        },
        component: StackScreen,
    },
};

export const withModalOptions = (base:Partial<NativeStackNavigationOptions>, navigation) => (
    {
        ...base,
        hideBackButton:true,
        headerHideBackButton: true,
        headerRight: function HeaderRight(props:any) {
            return <ButtonNav onPress={()=>navigation.pop()}>
                <ION
                  style={{
                      color: props.tintColor,
                      fontSize: styleVariables.fontSizeH1
                  }}
                  name="ios-close"
              />
            </ButtonNav>
        }
    }
)

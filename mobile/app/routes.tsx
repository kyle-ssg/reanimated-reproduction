import React from 'react';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';
import { ButtonNav } from './components/base/forms/Button'
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import GenericModal from './screens/GenericModal';
import { RouteUrls } from './route-urls';
import TabLayout from './screens/tabs/TabLayout';
import TabScreen from './screens/tabs/TabScreen';

interface IRoute {
  name: RouteUrls,
  options?: Partial<NativeStackNavigationOptions>,
  component: React.ComponentType,
  params?: Record<string, any>
}
export const routes: Record<string, IRoute> = {
    home: {
        name:RouteUrls.home,
        options: {
            title: 'Home',
        },
        component: HomeScreen
    },
    about: {
        name: RouteUrls.about,
        options: {
            title: 'About',
        },
        component: AboutScreen,
    },
    tabs: {
        name: RouteUrls.tabs,
        options: {
            title: 'Tabs',
            headerShown: false,
        },
        component: TabLayout,
    },
    tab: {
        name: RouteUrls.tab,
        options: {
            title: 'Tab',
        },
        component: TabScreen,
    },
    modal: {
        name: RouteUrls.modal,
        component: GenericModal,
        options: {
            title: 'Modal',
            stackPresentation: 'fullScreenModal',
            headerShown: false,
        },
    },
};


export const withModalOptions = (base:Partial<NativeStackNavigationOptions>, navigation) => (
    {
        ...base,
        hideBackButton:true,
        headerHideBackButton: true,
        headerRight: props => {
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

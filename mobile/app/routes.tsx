import React from 'react'
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack'
import { RouteUrls } from './route-urls'
import BottomTabsNavigator from 'navigation/BottomTabsNavigator'
import HomeScreen from 'screens/HomeScreen'
import WebScreen from 'screens/WebScreen'
import StorybookUIRoot from '../stories/index'

import Tab1Screen from "screens/Tab1Screen";

import Tab2Screen from "screens/Tab2Screen";

// END OF IMPORT

export interface IRoute {
  options?: Partial<NativeStackNavigationOptions>
  component: any
  params?: Record<string, any>
}

// Contains default route config and components
export const routes: Record<RouteUrls, IRoute> = {
  [RouteUrls.mainApp]: {
    options: {
      title: '',
      headerShown: false,
    },
    component: BottomTabsNavigator,
  },

  [RouteUrls.web]: {
    options: {
      title: '',
    },
    component: WebScreen,
  },

  [RouteUrls.storybook]: {
    options: {
      headerShown: false,
    },
    component: StorybookUIRoot,
  },

  [RouteUrls.HomeScreen]: {
    options: {},
    component: HomeScreen,
  },
  [RouteUrls.Tab1Screen]: {
    options: {
    },
    component: Tab1Screen,
  },
  [RouteUrls.Tab2Screen]: {
    options: {
    },
    component: Tab2Screen,
  },
  // END OF SCREENS
}

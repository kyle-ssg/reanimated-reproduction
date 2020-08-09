import React from "react";
import { NativeStackNavigationOptions } from "react-native-screens/native-stack";
import { ButtonNav } from "components/base/forms/Button";
import GenericScreen from "screens/GenericScreen";
import HomeScreen from "screens/HomeScreen";
import { RouteUrls } from "./route-urls";
import TabLayout from "screens/TabLayout";
import StackScreen from "screens/StackScreen";
import StorybookUIRoot from "../stories/index";

type functionComponent = (props: any) => React.ReactNode;

export interface IRoute {
  options?: Partial<NativeStackNavigationOptions>,
  component: any,
  params?: Record<string, any>
}

export const withPushModalOptions = (base:Partial<NativeStackNavigationOptions>):NativeStackNavigationOptions => (
  {
    ...base,
    headerShown:false,
    stackPresentation:"modal",
  }
)

export const withFullScreenPushModalOptions = (base:Partial<NativeStackNavigationOptions>):NativeStackNavigationOptions => (
  {
    ...base,
    headerShown:false,
    stackPresentation:"fullScreenModal",
  }
)

export const withModalOptions = (base:Partial<NativeStackNavigationOptions>):NativeStackNavigationOptions => (
  {
    ...base,
    hideBackButton:true,
    headerHideBackButton: true,
    headerRight: ModalCloseButton
  }
)

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
      headerShown: false,
      title: 'About',
    },
    component: GenericScreen,
  },
  [RouteUrls.tabs]: {
    options: {
      headerShown: true,
    },
    component: TabLayout,
  },
  [RouteUrls.stack]: {
    options: {
      headerShown: false,
    },
    component: StackScreen,
  },
  [RouteUrls.storybook]: {
    options: {
      headerShown: false,
    },
    component: StorybookUIRoot,
  },
};

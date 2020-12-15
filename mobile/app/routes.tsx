import React from "react";
import { NativeStackNavigationOptions } from "react-native-screens/native-stack";
import { RouteUrls } from "./route-urls";
import BottomTabsNavigator from "navigation/BottomTabsNavigator";
import GenericScreen from "screens/examples/GenericScreen";
import Login from "screens/GenericScreen";
import HomeScreen from "screens/HomeScreen";
import WebScreen from "screens/WebScreen";
import ModalCloseButton from "components/ModalCloseButton";
import StorybookUIRoot from "../stories/index";

// END OF IMPORT

type functionComponent = (props: any) => React.ReactNode;

export interface IRoute {
  options?: Partial<NativeStackNavigationOptions>;
  component: any;
  params?: Record<string, any>;
}

export const withPushModalOptions = (
  base: Partial<NativeStackNavigationOptions>
): NativeStackNavigationOptions => ({
  ...base,
  headerShown: false,
  stackPresentation: "modal",
});

export const withFullScreenPushModalOptions = (
  base: Partial<NativeStackNavigationOptions>
): NativeStackNavigationOptions => ({
  ...base,
  headerShown: false,
  stackPresentation: "fullScreenModal",
});

export const withModalOptions = (
  base: Partial<NativeStackNavigationOptions>
): NativeStackNavigationOptions => ({
  ...base,
  headerShown: true,
  hideBackButton: true,
  headerHideBackButton: true,
  headerRight: ModalCloseButton,
});
// Contains default route config and components
export const routes: Record<RouteUrls, IRoute> = {
  [RouteUrls.mainApp]: {
    options: {
      title: "",
      headerShown: false,
    },
    component: BottomTabsNavigator,
  },

  [RouteUrls.web]: {
    options: {
      title: "",
    },
    component: WebScreen,
  },

  [RouteUrls.home]: {
    options: {
      title: "",
    },
    component: HomeScreen,
  },

  [RouteUrls.login]: {
    options: {
      headerShown: false,
    },
    component: Login,
  },

  [RouteUrls.onboarding]: {
    options: {
      // headerShown: false,
      title: "About",
    },
    component: GenericScreen,
  },

  [RouteUrls.generic]: {
    options: {
      headerShown: false,
      title: "About",
    },
    component: GenericScreen,
  },

  [RouteUrls.storybook]: {
    options: {
      headerShown: false,
    },
    component: StorybookUIRoot,
  },

  // END OF SCREENS
};
// @ts-ignore
global.routes = routes;
// @ts-ignore
global.withModalOptions = withModalOptions;
// @ts-ignore
global.withPushModalOptions = withPushModalOptions;
// @ts-ignore
global.withFullScreenPushModalOptions = withFullScreenPushModalOptions;

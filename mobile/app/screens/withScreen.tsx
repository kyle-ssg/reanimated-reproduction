import React, { useLayoutEffect, useCallback } from "react";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "react-native-screens/native-stack";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { AppActions } from "common/app-actions";
import { FocusAwareStatusBar } from "components/utility-components/FocusAwareStatusBar";
export interface IRouteParams {
  [extraProps: string]: any; // Means that extra props are fine
  statusBar: ReactNative.StatusBarProps;
  screenOptions: Partial<NativeStackNavigationOptions>;
}
export type Screen = {
  push: (name: string, routeParams?: Partial<IRouteParams>) => void;
  pop: () => void;
  canGoBack: () => boolean;
  replace: (name: string, routeParams?: Partial<IRouteParams>) => void;
  setOptions: (options: Partial<NativeStackNavigationOptions>) => void;
  style: ReactNative.ViewStyle;
  children: React.ReactNode;
};
export type ScreenProps = {
  navigation: NativeStackNavigationProp<any> & {
    replace: (name: string, params: any) => void;
  };
  route: {
    params?: any;
    name: string;
  };
};

const withScreen = (Component: React.ComponentType, isChild=false) => {
  return function withScreen(props: ScreenProps): React.ReactNode {

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    if (!isChild) {
      React.useEffect(() => {
        // @ts-ignore
        const previousStyle = ReactNative.StatusBar?._currentValues?.value || 'dark-content'
        const unsubscribe = navigation.addListener("focus", () => {
          dispatch(AppActions.setActiveScreen(route.name));
        });
        const unsubscribe2 = navigation.addListener("beforeRemove", () => {
          if (Platform.OS === "ios") {
            ReactNative.StatusBar.setBarStyle(previousStyle, true);
          }
        });

        if (Platform.OS === "ios") {
          const style = route?.params?.statusBar?.barStyle || "default";
          ReactNative.StatusBar.setBarStyle(style, true);
        }
        return () => {
          unsubscribe();
          unsubscribe2();
          return;
        };
      }, [navigation, dispatch, route]);
    }


    useLayoutEffect(() => {
      if (route?.params?.screenOptions) {
        navigation.setOptions(route.params.screenOptions);
      }
    }, [navigation, route]);

    const push = useCallback(
      (name, params) => {
        navigation.push(name, params);
      },
      [navigation]
    );

    const replace = useCallback(
      (name, params) => {
        navigation.replace(name, params);
      },
      [navigation]
    );

    const pop = useCallback(() => {
      navigation.pop();
    }, [navigation]);

    const setOptions = useCallback(
      (options) => {
        navigation.setOptions(options);
      },
      [navigation]
    );

    return (
        <>
            {Platform.OS !== "ios" && !isChild && (
            <FocusAwareStatusBar
              {...route.params?.statusBar}
              animated={true}
            />
            )}
            <Component
              push={push}
              pop={pop}
              replace={replace}
              canGoBack={navigation.canGoBack}
              setOptions={setOptions}
              {...route.params}
              {...props}
            />
        </>
    );
  };
};

export default withScreen;

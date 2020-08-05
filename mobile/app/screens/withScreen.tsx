import React, { useLayoutEffect, useCallback } from 'react';
import { NativeStackNavigationOptions, NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { useDispatch } from 'react-redux'
import { AppActions } from 'common/app-actions';
import { FocusAwareStatusBar } from 'components/utility-components/FocusAwareStatusBar';
export interface IRouteParams {
  [extraProps: string]: any; // Means that extra props are fine
  statusBar: ReactNative.StatusBarProps
  screenOptions: Partial<NativeStackNavigationOptions>
}
export type Screen = {
  push: (name:string, routeParams:Partial<IRouteParams>)=>void
  pop: ()=>void
  canGoBack: ()=>boolean
  replace: (name:string, routeParams:Partial<IRouteParams>)=>void
  setOptions:(options:Partial<NativeStackNavigationOptions>)=>void
  style: ReactNative.ViewStyle;
  children: React.ReactNode;
}
export type ScreenProps = {
  navigation: NativeStackNavigationProp<any> & { replace: (name:string, params:any)=>void }
  route: {
    params?: any
    name :string;
  }
}

const withScreen = (Component: React.ComponentType) => {
  return function withScreen (props: ScreenProps):React.ReactNode {
    const dispatch = useDispatch();
    React.useEffect(
      () => {
        const previousStyle = ReactNative.StatusBar?._currentValues?.value || "dark-content"
        const unsubscribe = props.navigation.addListener('focus', e => {
          dispatch(AppActions.setActiveScreen(props.route.name))
        });
        const unsubscribe2 = props.navigation.addListener('beforeRemove', e => {
          if (Platform.OS === 'ios') {
            ReactNative.StatusBar.setBarStyle(previousStyle, true)
          }
        });

        if (Platform.OS === 'ios') {
          const style = props.route?.params?.statusBar?.barStyle || "default"
          ReactNative.StatusBar.setBarStyle(style, true)
        }
        return ()=>{
          unsubscribe();
          unsubscribe2();
          return
        }
      },
      [props.navigation]
    );

    useLayoutEffect(() => {
      if (props.route?.params?.screenOptions) {
        props.navigation.setOptions(props.route.params.screenOptions)
      }
    }, [props.navigation, props.route]);

    const push = useCallback((name,params)=>{
      props.navigation.push(name, params)
    }, [props.navigation])

    const replace = useCallback((name,params)=>{
      props.navigation.replace(name, params)
    }, [props.navigation])

    const pop = useCallback(()=>{
      props.navigation.pop()
    }, [props.navigation])

    const setOptions = useCallback((options)=>{
      props.navigation.setOptions(options)
    }, [props.navigation])

    return <>
        {Platform.OS !== "ios" && (
            <FocusAwareStatusBar {...(props.route.params?.statusBar)} animated={true}/>
        )}
        <Component
          push={push}
          pop={pop}
          replace={replace}
          canGoBack={props.navigation.canGoBack}
          setOptions={setOptions}
          {...props.route.params}
          {...props}
            />
    </>
  };
};

export default withScreen;

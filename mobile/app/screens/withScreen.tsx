import React from 'react';
import { RouteUrls } from '../routes';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';
export interface IRouteParams {
  [extraProps: string]: any; // Means that extra props are fine
  screenOptions: Partial<NativeStackNavigationOptions>
}
export type Screen = {
  push: (name:string, routeParams:IRouteParams)=>void
  pop: ()=>void
  canGoBack: ()=>boolean
  replace: (name:string, routeParams:IRouteParams)=>void
  setOptions:(options:Partial<NativeStackNavigationOptions>)=>void
}
const withScreen = (Component: React.ComponentType) => {
    return (props: any) => {
        React.useLayoutEffect(() => {
            if (props.route?.params?.screenOptions) {
                props.navigation.setOptions(props.route.params.screenOptions)
            }
        }, [props.navigation, props.route]);
        const push = (name, params)=>{
            props.navigation.push(name, params)
        }
        const replace = (name, params)=>{
            props.navigation.replace(name, params)
        }
        const pop = ()=>{
            props.navigation.pop()
        }
        const setOptions = (options)=>{
            props.navigation.setOptions(options)
        }
        return <Component
          push={push}
          pop={pop}
          replace={replace}
          canGoBack={props.navigation.canGoBack}
          setOptions={setOptions}
          {...props.route.params}
          {...props}
        />;
    };
};

export default withScreen;

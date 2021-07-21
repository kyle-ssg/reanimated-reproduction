import React, { useLayoutEffect, useCallback, useRef, useEffect } from 'react'
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack'
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { AppActions } from 'common/app-actions'
import { StatusBarStyle } from 'react-native'
import useTheme from 'common/providers/useTheme'
import { AppState } from 'common/state-type'
import { CommonActions } from '@react-navigation/native'

export interface IRouteParams {
  [extraProps: string]: any // Means that extra props are fine
  statusBar: ReactNative.StatusBarProps
  screenOptions: Partial<NativeStackNavigationOptions>
}
export type Screen = {
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
  navigate: (name: string, routeParams?: Partial<IRouteParams>) => void
  pop: () => void
  dismissModal: () => void
  canGoBack: () => boolean
  replace: (name: string, routeParams?: Partial<IRouteParams>) => void
  resetTo: (name: string, routeParams?: Partial<IRouteParams>) => void
  setOptions: (options: Partial<NativeStackNavigationOptions>) => void
  setStatusBar: (colour: StatusBarStyle) => void
  style: ReactNative.ViewStyle
  children: React.ReactNode
  theme?: AppState['theme']
}
export type ScreenProps = {
  navigation: NativeStackNavigationProp<any> & {
    replace: (name: string, params: any) => void
  }
  route: {
    params?: any
    name: string
  }
}

const withScreen = (Component: React.ComponentType, isChild = false) => {
  return function withScreen(props: ScreenProps): React.ReactNode {
    // @ts-ignore
    const statusColour = useRef(
      route?.params?.statusBar?.barStyle ||
        styleVariables.defaultStatusBarColour,
    )
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const theme = useTheme()
    useEffect(() => {
      // @ts-ignore
      if (
        (route?.params?.statusBar?.barStyle ||
          styleVariables.defaultStatusBarColour) !== statusColour.current
      ) {
        // @ts-ignore
        statusColour.current =
          route?.params?.statusBar?.barStyle ||
          styleVariables.defaultStatusBarColour
        ReactNative.StatusBar.setBarStyle(statusColour.current, true)
      }
    }, [route])

    if (!isChild) {
      React.useEffect(() => {
        // @ts-ignore
        const unsubscribe = navigation.addListener('focus', () => {
          dispatch(AppActions.setActiveScreen(route.name))
          ReactNative.StatusBar.setBarStyle(statusColour.current, true)
        })
        return () => {
          unsubscribe()
          return
        }
      }, [navigation, dispatch, route])
    }

    const setNavOptions = navigation.setOptions

    const resetTo = useCallback(
      (name, params) => {
        // @ts-ignore
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name, params }],
          }),
        )
      },
      [navigation],
    )

    const setStatusBar = useCallback((colour: StatusBarStyle) => {
      statusColour.current = colour
      ReactNative.StatusBar.setBarStyle(statusColour.current, true)
    }, [])

    useEffect(() => {
      const options: Partial<NativeStackNavigationOptions> = {
        // @ts-ignore
        ...(route.params?.screenOptions || {}),
      }

      if (Platform.OS === 'android') {
        setTimeout(() => {
          setNavOptions(options)
        })
      } else {
        setNavOptions(options)
      }

      // @ts-ignore
      setNavOptions(options)
    }, [setNavOptions, setStatusBar, route, theme])

    const push = useCallback(
      (name, params) => {
        // @ts-ignore
        navigation.push(name, params)
      },
      [navigation],
    )

    const navigate = useCallback(
      (name, params) => {
        navigation.navigate(name, params)
      },
      [navigation],
    )

    const replace = useCallback(
      (name, params) => {
        // @ts-ignore
        navigation.replace(name, params)
      },
      [navigation],
    )

    const pop = useCallback(() => {
      // @ts-ignore
      navigation.pop()
    }, [navigation])

    const dismissModal = useCallback(() => {
      // @ts-ignore
      navigation.dangerouslyGetParent().pop()
    }, [navigation])

    const setOptions = useCallback(
      (options) => {
        navigation.setOptions(options)
      },
      [navigation],
    )

    return (
      <Component
        // @ts-ignore
        push={push}
        them={theme}
        navigate={navigate}
        pop={pop}
        dismissModal={dismissModal}
        resetTo={resetTo}
        replace={replace}
        setStatusBar={setStatusBar}
        canGoBack={navigation.canGoBack}
        setOptions={setOptions}
        {...route.params}
        {...props}
      />
    )
  }
}

export default withScreen

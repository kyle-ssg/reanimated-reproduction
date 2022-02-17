import {
  CommonActions,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { styleVariables } from 'app/style/style_variables'
import { AppActions } from 'common/app-actions'
import {
  ComponentType,
  ReactChildren,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import {
  Platform,
  StatusBar,
  StatusBarProps,
  StatusBarStyle,
  ViewStyle,
} from 'react-native'
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux'
import { ScreenErrorBoundary } from 'screens/ScreenErrorBoundary'

export interface IRouteParams {
  [extraProps: string]: any // Means that extra props are fine
  statusBar: StatusBarProps
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
  style: ViewStyle
  children: ReactChildren
}

interface IRouteProps extends RouteProp<ParamListBase, string> {
  params: IRouteParams
}

export type ScreenProps = {
  navigation: NativeStackNavigationProp<any> & {
    replace: (name: string, params: IRouteParams) => void
  }
  route: {
    params?: IRouteParams
    name: string
  }
}

const withScreen = (Component: ComponentType, isChild = false) => {
  return function WithScreen(props: ScreenProps) {
    const route = useRoute<IRouteProps>()
    const statusColour = useRef(
      route?.params?.statusBar?.barStyle ||
        styleVariables.defaultStatusBarColour,
    )
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const dispatch = useDispatch()
    useEffect(() => {
      if (
        (route?.params?.statusBar?.barStyle ||
          styleVariables.defaultStatusBarColour) !== statusColour.current
      ) {
        statusColour.current =
          route?.params?.statusBar?.barStyle ||
          styleVariables.defaultStatusBarColour
        StatusBar.setBarStyle(statusColour.current as StatusBarStyle, true)
      }
    }, [route])

    if (!isChild) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // @ts-ignore
        const unsubscribe = navigation.addListener('focus', () => {
          dispatch(AppActions.setActiveScreen(route.name))
          StatusBar.setBarStyle(statusColour.current as StatusBarStyle, true)
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
      StatusBar.setBarStyle(statusColour.current as StatusBarStyle, true)
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

      setNavOptions(options)
    }, [setNavOptions, setStatusBar, route])

    const push = useCallback(
      (name, params) => {
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
        navigation.replace(name, params)
      },
      [navigation],
    )

    const pop = useCallback(() => {
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
      <ScreenErrorBoundary>
        <Component
          // @ts-ignore
          push={push}
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
      </ScreenErrorBoundary>
    )
  }
}

export default withScreen

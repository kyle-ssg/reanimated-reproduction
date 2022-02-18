import { useEffect, useState } from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppActions } from 'common/app-actions'
import '../project/api'
import '../routes'
import _store from 'common/store'
import defaultNavigationOptions from '../style/navigation_styles'
import { RouteUrls } from '../route-urls'
import LinkHandler from 'components/LinkHandler'
import { Strings } from 'project/localisation'
import Flex from 'components/base/grid/Flex'
import { Constants } from 'common/utils'
import Loader from 'components/base/Loader'
import { DevSettings } from 'react-native'
import { API } from 'project/api'
// import Cognito from "common/cognito";

// API.auth.Cognito.init(Project.cognitoMobile)
const store = _store()

enableScreens()
const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

import { FC } from 'react'

type ComponentType = {}
const _bootstrapAsync = async (): Promise<boolean> => {
  let user, token

  try {
    // user = await API.auth.Cognito.getSession();
    // token = user.accessToken?.jwtToken;
  } catch (e) {
    console.log(e)
  }

  if (token) {
    return await new Promise((resolve) => {
      store.dispatch(
        AppActions.startup(
          { token, user, locale: user?.locale || Strings.getLanguage() },
          {
            onSuccess: () => {
              resolve(true)
            },
            onError: () => {
              resolve(false)
            },
          },
        ),
      )
    })
  }
  return false
}

const AppNavigator: FC<ComponentType> = ({}) => {
  const [user, setUser] = useState<boolean | null>(null)
  const [showStorybook, setShowStorybook] = useState<boolean>(false)
  const toggleStorybook = () => {
    setShowStorybook(!showStorybook)
    API.storage.setItem('storybook', `${showStorybook}`)
  }

  useEffect(() => {
    _bootstrapAsync().then((user) => {
      setUser(user)
    })
    DevSettings.addMenuItem('Toggle Storybook', toggleStorybook)
    // eslint-disable-next-line
  }, [])

  if (user === null)
    // app is loading
    return <Flex style={Styles.centeredContainer}>{<Loader />}</Flex>

  let initialRoute = user ? RouteUrls.mainApp : RouteUrls.HomeScreen

  if (Constants.simulate.FORCE_PAGE) {
    initialRoute = Constants.simulate.FORCE_PAGE
  }

  return (
    <>
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name={RouteUrls.mainApp}
          options={routes[RouteUrls.mainApp].options}
          component={routes[RouteUrls.mainApp].component}
        />
        {/*Modals*/}
        <Stack.Screen
          name={RouteUrls.web}
          options={{ presentation: 'modal', headerShown: false }}
          component={routes[RouteUrls.web].component}
        />

        <Stack.Screen
          name={RouteUrls.HomeScreen}
          options={routes[RouteUrls.HomeScreen].options}
          component={routes[RouteUrls.HomeScreen].component}
        />

        <Stack.Screen
          name={RouteUrls.Tab1Screen}
          options={routes[RouteUrls.Tab1Screen].options}
          component={routes[RouteUrls.Tab1Screen].component}
        />

        <Stack.Screen
          name={RouteUrls.Tab2Screen}
          options={routes[RouteUrls.Tab2Screen].options}
          component={routes[RouteUrls.Tab2Screen].component}
        />

        <Stack.Screen
          name={RouteUrls.ModalScreen}
          options={routes[RouteUrls.ModalScreen].options}
          component={routes[RouteUrls.ModalScreen].component}
        />

        {/* END OF ROUTES*/}
      </Navigator>
      <LinkHandler />
    </>
  )
}

export default AppNavigator

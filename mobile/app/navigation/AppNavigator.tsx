import React, { Component } from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import codePush from 'react-native-code-push'
import { AppActions } from 'common/app-actions'
import '../project/api/api'
import _store from 'common/store'
import defaultNavigationOptions from '../style/navigation_styles'
import { RouteUrls } from '../route-urls'
import withAuth, { IWithAuth } from 'common/providers/withAuth' // todo: migrate this to functional component and use useAuth
import Loader from './../components/base/Loader'
import { routes } from '../routes'
// import Cognito from "common/cognito";

// API.auth.Cognito.init(Project.cognitoMobile)
const store = _store()

enableScreens()
const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

const codePushOptions = {
  checkFrequency: __DEV__
    ? codePush.CheckFrequency.MANUAL
    : codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
}

type ComponentType = IWithAuth & {}

class AppNavigator extends Component<ComponentType> {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    let user, token

    try {
      // user = await API.auth.Cognito.getSession();
      // token = user.accessToken?.jwtToken;
    } catch (e) {
      console.log(e)
    }

    if (token) {
      await new Promise((resolve) => {
        store.dispatch(
          AppActions.startup(
            { token, user },
            {
              onSuccess: () => {
                resolve(user)
              },
              onError: () => {
                resolve(null)
              },
            },
          ),
        )
      })
    }

    this.setState({ isLoading: false })
  }
  render() {
    const {
      props: { user },
      state: { isLoading },
    } = this

    if (isLoading)
      return <Flex style={Styles.centeredContainer}>{<Loader />}</Flex>

    let initialRoute = user ? RouteUrls.mainApp : RouteUrls.HomeScreen

    if (Constants.STORYBOOK) {
      initialRoute = RouteUrls.storybook
    }

    if (Constants.simulate.FORCE_PAGE) {
      initialRoute = Constants.simulate.FORCE_PAGE
    }

    return (
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name={RouteUrls.mainApp}
          options={routes[RouteUrls.mainApp].options}
          component={routes[RouteUrls.mainApp].component}
        />
        <Stack.Screen
          name={RouteUrls.storybook}
          options={routes[RouteUrls.storybook].options}
          component={routes[RouteUrls.storybook].component}
        />
        {/*Modals*/}
        <Stack.Screen
          name={RouteUrls.web}
          options={{ stackPresentation: 'modal', headerShown: false }}
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
    )
  }
}

export default withAuth(codePush(codePushOptions)(AppNavigator))

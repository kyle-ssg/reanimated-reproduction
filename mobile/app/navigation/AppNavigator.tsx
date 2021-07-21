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

    let initialRoute = user ? RouteUrls.mainApp : RouteUrls.onboarding

    if (Constants.STORYBOOK) {
      initialRoute = RouteUrls.storybook
    } else if (Constants.simulate.SKIP_ONBOARDING) {
      initialRoute = RouteUrls.login
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
          name={RouteUrls.onboarding}
          initialParams={routes[RouteUrls.onboarding].params}
          options={routes[RouteUrls.onboarding].options}
          component={routes[RouteUrls.onboarding].component}
        />
        <Stack.Screen
          name={RouteUrls.login}
          options={routes[RouteUrls.login].options}
          component={routes[RouteUrls.login].component}
        />
        <Stack.Screen
          name={RouteUrls.home}
          options={routes[RouteUrls.home].options}
          component={routes[RouteUrls.home].component}
        />
        <Stack.Screen
          name={RouteUrls.storybook}
          options={routes[RouteUrls.storybook].options}
          component={routes[RouteUrls.storybook].component}
        />
        {/*Modals*/}
        <Stack.Screen
          name={RouteUrls.web}
          options={withPushModalOptions(routes[RouteUrls.web].options)}
          component={routes[RouteUrls.web].component}
        />

        {/* END OF ROUTES*/}
      </Navigator>
    )
  }
}

export default withAuth(codePush(codePushOptions)(AppNavigator))

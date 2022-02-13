import { Component } from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { AppActions } from 'common/app-actions'
import '../project/api'
import _store from 'common/store'
import defaultNavigationOptions from '../style/navigation_styles'
import { RouteUrls } from '../route-urls'
import withAuth, { IWithAuth } from 'common/providers/withAuth' // todo: migrate this to functional component and use useAuth
import LinkHandler from 'components/LinkHandler'
import { Strings } from 'project/localisation'
import Flex from 'components/base/grid/Flex'
import { Constants } from 'common/utils'
import Loader from 'components/base/Loader'
import { DevSettings } from 'react-native'
import { API } from '../project/api'
import StorybookUIRoot from '../../.storybook/Storybook'
// import Cognito from "common/cognito";

// API.auth.Cognito.init(Project.cognitoMobile)
const store = _store()

enableScreens()
const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

type ComponentType = IWithAuth & {}

class AppNavigator extends Component<ComponentType> {
  state = {
    isLoading: true,
    showStorybook: false,
  }

  initialRoute = null

  componentDidMount() {
    this._bootstrapAsync()

    DevSettings.addMenuItem('Toggle Storybook', () => {
      this.setState({ showStorybook: !this.state.showStorybook }, () => {
        API.storage.setItem('storybook', `${this.state.showStorybook}`)
      })
    })
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
            { token, user, locale: user?.locale || Strings.getLanguage() },
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

    const showStorybook = await API.storage.getItem('storybook')
    this.setState({
      isLoading: false,
      showStorybook: showStorybook === 'true',
    })
  }
  render() {
    const {
      props: { user },
      state: { isLoading, showStorybook },
    } = this

    if (isLoading)
      return <Flex style={Styles.centeredContainer}>{<Loader />}</Flex>

    if (showStorybook) {
      return <StorybookUIRoot />
    }

    let initialRoute = user ? RouteUrls.mainApp : RouteUrls.HomeScreen

    if (Constants.simulate.FORCE_PAGE) {
      initialRoute = Constants.simulate.FORCE_PAGE
    }
    this.initialRoute = initialRoute

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
        <LinkHandler />
      </>
    )
  }
}

//todo: I think this should not use withAuth
export default withAuth(AppNavigator)

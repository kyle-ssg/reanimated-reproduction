import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import codePush from 'react-native-code-push';
import { AppActions } from 'common/app-actions';
import _store from 'common/store';
import defaultNavigationOptions from '../style/style_navs';
import { routes, withPushModalOptions } from '../routes';
import { RouteUrls } from '../route-urls';
import withAuth, { IWithAuth } from 'common/providers/withAuth';

const store = _store();

enableScreens();
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
  installMode: codePush.InstallMode.MANUAL,
  updateDialog: true,
};

type ComponentType = IWithAuth & {

}

class AppNavigator extends Component<ComponentType> {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    API.storage.init();

    const token = await API.storage.getString('token');

    let user;
    if (token) {
      user = await API.storage.getObject('user');
      if (user) {
        await new Promise(resolve => {
          store.dispatch(AppActions.startup(
            { token, user },
            {
              onSuccess: () => {
                resolve(user);
              },
              onError: () => {
                resolve(null);
              },
            },
          ));
        });
      }
    }

    this.setState({ isLoading: false });
  }

  render() {
    const { props: { user }, state: { isLoading } } = this

    if (isLoading) return <Flex style={Styles.centeredContainer}><Loader /></Flex>

    let initialRoute = user ? RouteUrls.mainApp : RouteUrls.onboarding;

    if (Constants.STORYBOOK) {
      initialRoute = RouteUrls.storybook;
    } else if (Constants.simulate.SKIP_ONBOARDING) {
      initialRoute = RouteUrls.login
    }

    if (Constants.simulate.FORCE_PAGE) {
      initialRoute = Constants.simulate.FORCE_PAGE;
    }

    return (
        <Navigator screenOptions={defaultNavigationOptions} initialRouteName={initialRoute}>
            <Stack.Screen
              name={RouteUrls.mainApp}
              options={routes[RouteUrls.mainApp].options}
              component={routes[RouteUrls.mainApp].component}
            />
            <Stack.Screen
              name={RouteUrls.onboarding}
              options={routes[RouteUrls.onboarding].options}
              component={routes[RouteUrls.onboarding].component}
            />
            <Stack.Screen
              name={RouteUrls.login}
              options={routes[RouteUrls.login].options}
              component={routes[RouteUrls.login].component}
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
        </Navigator>
    )
  }
}

export default withAuth(codePush(codePushOptions)(AppNavigator));

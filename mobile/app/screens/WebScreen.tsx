import React from 'react';
import { Component, FunctionComponent } from 'react';
import withScreen, { Screen } from './withScreen';
import { WebView } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../style/style_navs';
import { routes, withModalOptions } from '../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RouteUrls } from '../route-urls';

type ComponentType = Screen & {
  text: string
}

class _WebScreen extends Component<ComponentType> {
  state = {};
  webview = null
  onNavigationStateChange = (navState)=> {
    this.props.setOptions({
      headerLeft: ()=> navState.canGoBack ? (
          <TouchableOpacity onPress={()=>this.webview?.goBack()}>
              <ION name={'ios-arrow-left'} size={20} color={palette.navy} />
          </TouchableOpacity>
      ) : <View/>
    })
    this.props.webViewProps.onNavigationStateChange && this.props.webViewProps.onNavigationStateChange(navState)
  }

  render() {
    return (
        <WebView
          ref={(webview)=>this.webview = webview}
          renderLoading={() =><Flex style={[
            ReactNative.StyleSheet.absoluteFill,
            Styles.centeredContainer
          ]}
                              ><Loader /></Flex>}
          startInLoadingState={true}
          {...this.props.webViewProps}
          onNavigationStateChange={this.onNavigationStateChange}
        />
    );
  }
}


const WebScreen = withScreen(_WebScreen)

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;

const TheComponent: FunctionComponent<ComponentType> = ({ webViewProps }) => {
  return (
      <NavigationContainer independent>
          <Navigator screenOptions={defaultNavigationOptions} initialRouteName={RouteUrls.home}>
              <Stack.Screen
                name={RouteUrls.home}
                options={withModalOptions(routes[RouteUrls.home].options)}
                component={WebScreen}
                initialParams={{ webViewProps }}
              />
          </Navigator>
      </NavigationContainer>
  );
};

export default withScreen(TheComponent);

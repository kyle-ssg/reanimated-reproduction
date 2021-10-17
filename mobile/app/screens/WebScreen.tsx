import React, { Component, FunctionComponent } from 'react'
import withScreen, { Screen } from './withScreen'
import { WebView, WebViewProps } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native'
import defaultNavigationOptions from '../style/navigation_styles'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { RouteUrls } from '../route-urls'

type Props = Screen & {
  webViewProps: Partial<WebViewProps>
}

class _WebScreen extends Component<Props> {
  state = {}
  webview = null
  onNavigationStateChange = (navState) => {
    this.props.setOptions({
      headerLeft: () =>
        navState.canGoBack ? (
          <TouchableOpacity onPress={() => this.webview?.goBack()}>
            <ION
              style={styles.icon}
              name='ios-close'
              size={20}
              color={palette.navy}
            />
          </TouchableOpacity>
        ) : (
          <View />
        ),
    })
    this.props.webViewProps.onNavigationStateChange &&
      this.props.webViewProps.onNavigationStateChange(navState)
  }

  render() {
    return (
      <ReactNative.SafeAreaView style={[Styles.bodyBackground, { flex: 1 }]}>
        <WebView
          ref={(webview) => (this.webview = webview)}
          renderLoading={() => (
            <Flex
              style={[
                ReactNative.StyleSheet.absoluteFill,
                Styles.centeredContainer,
              ]}
            >
              <Loader />
            </Flex>
          )}
          startInLoadingState={true}
          {...this.props.webViewProps}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </ReactNative.SafeAreaView>
    )
  }
}

export const ConnectedWebScreen = withScreen(_WebScreen)

const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

const TheComponent: FunctionComponent<Props> = ({ webViewProps }) => {
  return (
    <NavigationContainer independent>
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={RouteUrls.home}
      >
        <Stack.Screen
          name={RouteUrls.home}
          options={{ stackPresentation: 'modal' }}
          component={ConnectedWebScreen}
          initialParams={{ webViewProps }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default withScreen(TheComponent)

const styles = ReactNative.StyleSheet.create({
  icon: {
    fontSize: 24,
  },
})

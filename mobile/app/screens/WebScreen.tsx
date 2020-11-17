import React, { Component, FunctionComponent } from 'react';
import withScreen, { Screen } from './withScreen';
import { WebView, WebViewProps } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import defaultNavigationOptions from '../style/style_navs';
import { routes, withModalOptions } from '../routes';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { RouteUrls } from '../route-urls';
import ModalStack from 'navigation/ModalStack';

type Props = Screen & {
  text: string;
  webViewProps: Partial<WebViewProps>;
};

class _WebScreen extends Component<Props> {
  state = {};
  webview = null;
  onNavigationStateChange = (navState) => {
    this.props.setOptions({
      headerLeft: () =>
        navState.canGoBack ? (
          <TouchableOpacity onPress={() => this.webview?.goBack()}>
            <ION name={"ios-arrow-back"} size={20} color={palette.navy} />
          </TouchableOpacity>
        ) : (
          <View />
        ),
    });
    this.props.webViewProps?.onNavigationStateChange &&
      this.props.webViewProps.onNavigationStateChange(navState);
  };

  render() {
    return (
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
    );
  }
}

const WebScreen = withScreen(_WebScreen);

export default ModalStack(WebScreen,RouteUrls.home);

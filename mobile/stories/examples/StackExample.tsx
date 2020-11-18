import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { FlatList, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import defaultNavigationOptions from '../../app/style/style_navs';
import { RouteUrls } from '../../app/route-urls';
import withScreen, { Screen } from '../../app/screens/withScreen';
import _store from 'common/store';
import { WebViewProps } from 'react-native-webview';

const { store } = _store({}, true);

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;


type ComponentType = Screen & {
  text: string;
  style: ReactNative.ViewStyle,
}

class _GenericScreen extends Component<ComponentType> {
  state = {}
  goScreen = (url:RouteUrls)=> {
    this.props.push(url,{
      screenOptions: {
        headerShown: true
      }
    })
  }
  goModal = (url:RouteUrls)=> {
    const params = {}
    if (url ===RouteUrls.web) {
      const props: Partial<WebViewProps> = {
        source: {
          uri: "https://google.com"
        }
      }
      params.webViewProps = props;
    }
    this.props.push(url,{
      ...params,
      screenOptions:{
        stackPresentation:"modal"
      }
    })
  }
  render() {
    return this.props.children || <Flex style={Styles.body}>
      <FlatList
        keyExtractor={(item)=>item}
        style={{ padding:20, flex:1 }} data={Object.values(RouteUrls)} renderItem={({ item })=> item !== "/storybook" && (
        <View key={item}>
          <H3>{item}</H3>
          <ButtonPrimary onPress={()=>this.goScreen(item)}>
            Push
          </ButtonPrimary>
          <Button onPress={()=>this.goModal(item)}>
            Modal
          </Button>
        </View>
      )}
      />

    </Flex>
  }
}

const GenericScreen = withScreen(_GenericScreen)

class StackExample extends Component {
  static displayName = 'TheComponent';
  state = {
    name: new Date().valueOf() + ""
  }
  static propTypes = {};

  render() {
    // const { props } = this
    return (
      <>
        <Provider store={store}>
          <StatusBar backgroundColor="transparent" translucent barStyle="dark-content"/>
          <>
            <NavigationContainer independent>
              <Navigator screenOptions={defaultNavigationOptions} initialRouteName="1">
                <Stack.Screen
                  name={"1"}
                  options={{  }}
                  component={GenericScreen}
                />
                {
                  Object.values(RouteUrls).map((v)=>(
                    <Stack.Screen
                      key={v}
                      name={v}
                      options={routes[v].options}
                      component={routes[v].component}
                    />
                  ))
                }
              </Navigator>

            </NavigationContainer>
          </>
        </Provider>
      </>
    );
  }
}

export default StackExample;

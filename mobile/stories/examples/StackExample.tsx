import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { StatusBar, Animated, FlatList } from 'react-native';
import store from 'common/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import defaultNavigationOptions from '../../app/style/style_navs';
import { RouteUrls } from '../../app/route-urls';
import withScreen, { Screen } from '../../app/screens/withScreen';
import { ButtonSecondary } from '../../app/components/base/forms/Button';
import { routes } from '../../app/routes';
import { FocusAwareStatusBar } from 'components/utility-components/FocusAwareStatusBar';

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
    this.props.push(url,{
      statusBar: { backgroundColor: "red", barStyle:"light-content", animated:true },
      screenOptions:{
        stackPresentation:"modal"
      }
    })
  }
  render() {
    return this.props.children || <Flex style={Styles.body}>
        <FocusAwareStatusBar barStyle="dark-content" animated={true}/>
        <FlatList
          keyExtractor={(item)=>item}
          style={{ padding:20, flex:1 }} data={Object.values(RouteUrls)} renderItem={({ item })=> item !== "/storybook" && (
          <View key={item}>
              <H3>{item}</H3>
              <Button onPress={()=>this.goScreen(item)}>
                  Push
              </Button>
              <ButtonSecondary onPress={()=>this.goModal(item)}>
                  Modal
              </ButtonSecondary>
          </View>
            )}/>

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
            <Provider store={store()}>
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

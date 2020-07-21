import React, { Component } from 'react';
import StorybookUIRoot from './storybook';
import { enableScreens, ScreenProps } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from '../common/store';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/types';
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from './app/components/base/forms/Button';


enableScreens();
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
import defaultNavigationOptions from './app/style/style_navs';


const withModalOptions = (base:Partial<NativeStackNavigationOptions>, navigation) => (
  {
      ...base,
      hideBackButton:true,
      headerHideBackButton: true,
      headerRight: props => {
    return <ButtonNav onPress={()=>navigation.pop()}>
        <ION
          style={{
            color: props.tintColor,
            fontSize: styleVariables.fontSizeH1
        }} name="ios-close"
        />
    </ButtonNav>
}
  }
)

global.routes = routes;


class ExampleComponent extends React.PureComponent {
    static displayName = 'TheComponent';

    static propTypes = {};

    render() {
        // const { props } = this;
        return (
          <Flex style={{backgroundColor:'blue'}}><Text>Hi</Text></Flex>
        );
    }
}


const ExampleModal = (props)=> {
    return (
      <Navigator screenOptions={defaultNavigationOptions} initialRouteName={routes.about.name}>
          <Stack.Screen
            name={routes.home.name}
            options={withModalOptions(routes.home.options, props.navigation)}
            component={MyProfile}
          />
      </Navigator>
    )
}

class App extends Component {
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
                  <NavigationContainer>
                      <Navigator screenOptions={defaultNavigationOptions} initialRouteName={routes.home.name}>
                          <Stack.Screen
                            name={routes.home.name}
                            options={routes.home.options}
                            component={MyProfile}
                          />
                          <Stack.Screen
                            name={routes.about.name}
                            options={routes.about.options}
                            component={MyProfile}
                          />
                          <Stack.Screen
                            name={routes.modal.name}
                            options={routes.modal.options}
                            component={ExampleModal}
                          />
                      </Navigator>
                  </NavigationContainer>
              </Provider>
          </>
        );
    }
}

export default App;

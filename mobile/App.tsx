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
const defaultNavigationOptions:NativeStackNavigationOptions = {
    title: "Boilerplate",
    backButtonImage: undefined,
    headerBackTitle: "",
    headerBackTitleVisible: true, // iOS only
    headerShown: true,
    backButtonInCustomView: true,
    headerTranslucent: false,
    headerLargeTitle: false,
    headerTintColor: palette.primary,
    // headerRight?: (props: { tintColor?: string }) => React.ReactNode;
    // headerLeft?: (props: { tintColor?: string }) => React.ReactNode;
    // headerCenter?: (props: { tintColor?: string }) => React.ReactNode;
    headerHideBackButton: false,
    headerHideShadow: false,
    headerLargeTitleHideShadow: false,
    headerStyle: {
        backgroundColor: "white",
    },
    headerLargeStyle: {
        backgroundColor: "white",
    },
    headerTitleStyle: {
    // fontFamily: "System",
    // // fontSize: number
        color: "black"
    },
    contentStyle: {
        backgroundColor:'white'
    },
    headerLargeTitleStyle: {
    // fontFamily?: string;
    // fontSize?: number;
        color: "black"
    },
    headerBackTitleStyle: {
    // fontFamil?: string;
    // fontSize?: number;
    },
    headerTopInsetEnabled: true,
    gestureEnabled: true,
    stackPresentation: "push",
    stackAnimation: "default"
};


class MyProfile extends Component {
    static displayName = 'TheComponent';

    static propTypes = {};

    linkClick = ()=> {
      this.props.navigation.push(routes.home.name, routes.home.params)
    }
    modalClick = ()=> {
      this.props.navigation.push(routes.modal.name, {navigator:this.props.navigator})
    }
    pop = ()=> {
        this.props.navigation.pop();
    }

    render() {
        // const { props } = this;
        return <Flex style={Styles.body}>
            <Flex style={[Styles.mh5, Styles.mt10]}>
                <ButtonPrimary style={Styles.mb10} onPress={this.linkClick}>
                    Push
                </ButtonPrimary>
                <ButtonSecondary style={Styles.mb10} onPress={this.modalClick}>
                    Go modal
                </ButtonSecondary>
                <ButtonTertiary onPress={this.pop}>
                    Pop
                </ButtonTertiary>
            </Flex>


        </Flex>
    }
}
const modalOptions:Partial<NativeStackNavigationOptions> = {

}
interface IRoute {
    name: string,
    options: {
        title: string,
    } & Partial<NativeStackNavigationOptions>
    params?: Record<string, any>
}
enum RouteName {
    "home" = "home",
    "about" = "about",
    "modal" = "modal",
}

const routes: Record<RouteName, IRoute> = {
    home: {
        name:"/",
        options:{
            title: 'Home',
        }
    },
    about: {
        name:"/about",
        options:{
            title: 'About',
        }
    },
    modal: {
        name: "/modal",
        options: {
            title: 'Modal',
            stackPresentation: "fullScreenModal",
            headerShown: false,
        },
    }
}

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

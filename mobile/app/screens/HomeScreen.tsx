import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import { RouteUrls } from '../route-urls';
import { TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';


type ComponentType = Screen & {}

class HomeScreen extends Component<ComponentType> {
  state = {}

  goAbout = ()=> {
      const navBackground = "#333";
      if (!this.props.canGoBack()) {
          this.props.setOptions({
              headerTintColor: "white"
          })
      }
      this.props.push(RouteUrls.about, {
          fakeNavBackground: navBackground,
          screenOptions: {
              title: "Dynamic title",
              headerTintColor: "white",
              headerTitleStyle: {
                  color: "white"
              },
              headerTranslucent: true,
              headerStyle: {
                  backgroundColor: Platform.select({ ios:"transparent", android:navBackground })
              }
          }
      })
  }

  goTabs = ()=> {
      this.props.push(RouteUrls.tabs, {
          screenOptions: {}
      })
  }

  render() {
      return (
          <>
              <Flex style={Styles.body}>
                  <Text>Home</Text>
                  <Link to={RouteUrls.about}>
                      <Text>
                          Go About
                      </Text>
                  </Link>
                  <Link to={RouteUrls.tabs}>
                      <Text>
                          Go Tabs
                      </Text>
                  </Link>
              </Flex>
          </>
      )
  }
}

export default withScreen(HomeScreen)


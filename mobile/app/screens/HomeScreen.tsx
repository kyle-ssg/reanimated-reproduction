import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import { RouteUrls } from '../route-urls';
import { TouchableOpacity } from 'react-native';

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
      this.props.push(RouteUrls.generic, {
          fakeNavBackground: navBackground,
          text:"Some text",
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
                  <TouchableOpacity onPress={this.goAbout}>
                      <Text>
                          Go About
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.goTabs}>
                      <Text>
                          Go Tabs
                      </Text>
                  </TouchableOpacity>
              </Flex>
          </>
      )
  }
}

export default withScreen(HomeScreen)

console.disableYellowBox = true

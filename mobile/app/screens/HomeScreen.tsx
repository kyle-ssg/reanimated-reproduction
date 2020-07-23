import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import { RouteUrls } from '../../../common/types/route-urls';
import { TouchableOpacity } from 'react-native';
import CustomNavbar from '../components/CustomNavbar';

type ComponentType = Screen & {}

class HomeScreen extends Component<ComponentType> {
  state = {}

  constructor(props) {
      super(props);
  }

  goAbout = ()=> {
      this.props.push(RouteUrls.generic, {
          text:"Some text",
          screenOptions: {
              headerShown: false
          }
      })
  }

  goTabs = ()=> {
      this.props.replace(RouteUrls.tabs, {
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

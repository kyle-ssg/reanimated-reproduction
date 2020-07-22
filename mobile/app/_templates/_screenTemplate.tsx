import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from '../screens/withScreen';
import { RouteUrls } from '../route-urls';

type ComponentType = Screen & {

}

class TheScreen extends Component<ComponentType> {
  state = {}

  goAbout = ()=> this.props.push(RouteUrls.about, {
      screenOptions: {

      }
  })

  render() {
      return (
          <SafeAreaView style={Styles.body}>
              <Text>Home</Text>
              <TouchableOpacity onPress={this.goAbout}>
                  <Text>
                      Go About
                  </Text>
              </TouchableOpacity>
          </SafeAreaView>
      )
  }
}

export default withScreen(TheScreen)


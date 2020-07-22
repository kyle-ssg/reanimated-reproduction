import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from '../withScreen';
import FakeNavbar from '../../components/FakeNavbar';

type ComponentType = Screen & {
  otherProp: string
}

class AboutScreen extends Component<ComponentType> {
  state = {}
  render() {
      return (
          <View>
              <Text>{this.props.title}</Text>
          </View>
      )
  }
}

export default withScreen(AboutScreen)

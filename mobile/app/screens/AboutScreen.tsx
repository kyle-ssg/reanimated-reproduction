import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import FakeNavbar from '../components/FakeNavbar';

type ComponentType = Screen & {
  otherProp: string
}

class AboutScreen extends Component<ComponentType> {
  state = {}
  render() {
      return (
          <View>
              <FakeNavbar navbarStyle={{ backgroundColor:this.props.fakeNavBackground }}>
                  <Text>About</Text>
              </FakeNavbar>
          </View>
      )
  }
}

export default withScreen(AboutScreen)

import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import FakeNavbar from '../components/FakeNavbar';

type ComponentType = Screen & {
  text: string
}

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
      return (
          <FakeNavbar navbarStyle={{ backgroundColor:this.props.fakeNavBackground }}>
              <Text>
                  {this.props.text}
              </Text>
          </FakeNavbar>
      )
  }
}

export default withScreen(GenericScreen)

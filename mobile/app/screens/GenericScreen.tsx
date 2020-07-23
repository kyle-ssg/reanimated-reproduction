import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import NavBackgroundHelper from '../components/utility-components/NavBackgroundHelper';

type ComponentType = Screen & {
  text: string
}

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
      return (
          <NavBackgroundHelper navbarStyle={{ backgroundColor:this.props.fakeNavBackground }}>
              <Text>
                  {this.props.text}
              </Text>
          </NavBackgroundHelper>
      )
  }
}

export default withScreen(GenericScreen)

import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';

type ComponentType = Screen & {

}

class AboutScreen extends Component<ComponentType> {
  state = {}

  render() {
      return this.props.children;
  }
}

export default withScreen(AboutScreen)

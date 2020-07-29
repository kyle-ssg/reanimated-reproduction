import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from '../screens/withScreen';

type ComponentType = Screen & {
  text: string
}

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
      return (
          <>

          </>
      )
  }
}

export default withScreen(GenericScreen)

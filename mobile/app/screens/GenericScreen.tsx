import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';

type ComponentType = Screen & {
  text: string;
  style: ReactNative.ViewStyle,
}

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
      return this.props.children || <Flex style={Styles.body}><Text>I am a generic screen</Text></Flex>
  }
}

export default withScreen(GenericScreen)

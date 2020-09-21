import React from 'react';
import { Component } from 'react';

type ComponentType = {
  children: React.ReactNode
}

class NeverUpdate extends Component<ComponentType> {
  state = {};

  shouldComponentUpdate(nextProps: Readonly<ComponentType>, nextState: Readonly<{}>, nextContext: any): boolean {
    return false
  }

  render() {
    return this.props.children;
  }
}

export default NeverUpdate;

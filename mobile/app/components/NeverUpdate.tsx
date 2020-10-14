import React from "react";
import { Component } from "react";

type Props = {
  children: React.ReactNode;
};

class NeverUpdate extends Component<Props> {
  state = {};

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    return false;
  }

  render() {
    return this.props.children;
  }
}

export default NeverUpdate;

import React, { Component } from "react";

export default class WithSetValue extends Component {
  static displayName = "withFoo";

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
  }

  setValue = (value) => this.setState({ value });

  render() {
    return this.props.children({
      ...this.props,
      ...this.state,
      setValue: this.setValue,
    });
  }
}

import React, { Component, PropTypes } from 'react';
import NetworkStore from '../stores/network-store';


const TheComponent = class extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isConnected: NetworkStore.isConnected,
    };

    ES6Component(this);
  }

  componentWillMount() {
    this.listenTo(NetworkStore, 'change', () => {
      this.setState({ isConnected: NetworkStore.isConnected });
    });
  }

  render() {
    const { isConnected } = this.state;
    return this.props.children(isConnected);
  }
};

TheComponent.propTypes = {};
export default TheComponent;

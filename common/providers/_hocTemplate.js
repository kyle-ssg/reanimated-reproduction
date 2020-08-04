import React, { Component } from 'react';

export default WrappedComponent => {
  class HOC extends Component {
    static displayName = 'withFoo';

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return HOC;
};

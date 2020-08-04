import React, { Component } from 'react';
import propTypes from 'prop-types';

const SuccessMessage = class extends Component {
    static displayName = 'SuccessMessage';

    static propTypes = {
      children: propTypes.node.isRequired,
      className: propTypes.string,
    };

    constructor(props, context) {
      super(props, context);
      this.state = {};
    }

    render() {
      const { props: { children } } = this;
      return (
          <div className={`alert mt-1 mb-1 alert-success ${this.props.className || ''}`}>
              {typeof this.props.children === 'string' ? this.props.children.replace(/\n/g, '') : 'Success processing request'}
          </div>
      );
    }
};
export default SuccessMessage;

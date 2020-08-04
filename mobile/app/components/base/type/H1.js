import React, { Component } from 'react';
import propTypes from 'prop-types';

const h1 = class extends Component {
    static displayName = 'H1';

    render() {
      return (
          <Text
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel}
            style={[Styles.h1, this.props.style]}
            >
              {this.props.children}
          </Text>
      );
    }
};

h1.propTypes = {
  accessible: propTypes.bool,
  accessibilityLabel: propTypes.string,
  style: propTypes.any,
  children: propTypes.node,
};

module.exports = h1;

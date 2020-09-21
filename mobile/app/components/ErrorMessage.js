import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ErrorMessage extends Component {
  static displayName = 'ErrorMessage';

  static propTypes = {
    children: propTypes.node,
  };

  render() {
    const { props } = this;
    if (!props.children) {
      return null
    }
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.ErrorMessageText}>
                {typeof props.children === 'string' ? props.children : 'Error processing request'}
            </Text>
        </View>
    );
  }
}

const styles = ReactNative.StyleSheet.create({
  ErrorMessageText: {
    color: palette.danger,
  },
});

module.exports = ErrorMessage;

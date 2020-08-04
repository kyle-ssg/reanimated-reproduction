import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ErrorMessage extends Component {
  static displayName = 'ErrorMessage';

  static propTypes = {
    children: propTypes.node,
  };

  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <Text style={styles.ErrorMessageText}>
          {typeof props.children === 'string'
            ? props.children
            : 'Error processing request'}
        </Text>
      </View>
    );
  }
}

const styles = ReactNative.StyleSheet.create({
  container: {},
  errorIcon: {
    fontSize: 18,
    marginBottom: 2,
    color: palette.danger,
  },

  ErrorMessageText: {
    color: palette.danger,
    textAlign: 'center',
  },
  text: {
    color: colour.third,
  },
});

module.exports = ErrorMessage;

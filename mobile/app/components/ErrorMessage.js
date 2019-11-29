
// import propTypes from 'prop-types';
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
                  {typeof props.children === 'string' ? props.children : 'Error processing request'}
              </Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
    },
    ErrorMessageText: {
        color: pallette.tertiary,
        textAlign: 'center',
    },
    text: {
        color: colour.third,
    },
});

module.exports = ErrorMessage;

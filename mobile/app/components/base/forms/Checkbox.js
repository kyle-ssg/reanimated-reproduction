import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import Animation from 'lottie-react-native';

const json = require('./checkbox.json');

const TheComponent = class extends Component {
  static displayName = 'TheComponent'

  static propTypes = {
      value: propTypes.number,
  };

  constructor(props, context) {
      super(props, context);
      this.state = {};
      this.animatedValue = new Animated.Value(this.props.value ? 0.5 : 0);
  }

  UNSAFE_componentWillUpdate(newProps) {
      if (newProps.value !== this.props.value) {
          Animated.timing(this.animatedValue, {
              toValue: newProps.value ? 0.5 : 0,
              duration: 700,
              easing: newProps.value ? Easing.linear : Easing.out(Easing.cubic),
          }).start();
      }
  }

  render() {
      return (
          <Animation
            progress={this.animatedValue}
            style={styles.checkbox}
            source={json}
          />
      );
  }
};

TheComponent.propTypes = {};
const styles = ReactNative.StyleSheet.create({
    checkbox: { width: 54, height: 54 },
});
module.exports = TheComponent;

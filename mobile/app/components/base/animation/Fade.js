import React, { Component } from "react";
import propTypes from "prop-types";
import each from "lodash/each";
import { Animated } from "react-native";

const Fade = class extends Component {
  static displayName = "Fade";

  static propTypes = {
    autostart: propTypes.bool,
    duration: propTypes.number,
    friction: propTypes.number,
    tension: propTypes.number,
    startValue: propTypes.number,
    animatedProps: propTypes.arrayOf(propTypes.string),
    animation: propTypes.func,
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node,
    ]).isRequired,
    style: propTypes.any,
  };

  constructor(props, context) {
    super(props, context);
    const _props = {};
    each(this.props.animatedProps, (prop) => {
      _props[`animated_${prop}`] = new Animated.Value(
        props[prop] && !props.autostart ? 1 : props.startValue || 0.00001
      );
    });
    this.state = _props;
  }

  componentDidMount() {
    if (this.props.autostart) {
      each(this.props.animatedProps, (key) => {
        this.props
          .animation(
            // Base: spring, decay, timing
            this.state[`animated_${key}`], // Animate `bounceValue`
            {
              useNativeDriver: true,
              toValue: isNaN(this.props[key])
                ? this.props[key]
                  ? 1
                  : 0
                : this.props[key], // Animate to smaller size
              duration: this.props.duration,
              friction: this.props.friction,
              tension: this.props.tension,
            }
          )
          .start();
      });
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    each(newProps.animatedProps, (key) => {
      const easing = newProps.value ? newProps.easing : newProps.easingOut;
      // eslint-disable-next-line eqeqeq
      if (newProps[key] != this.props[key]) {
        newProps
          .animation(
            // Base: spring, decay, timing
            this.state[`animated_${key}`], // Animate `bounceValue`
            {
              useNativeDriver: true,
              easing,
              toValue: isNaN(newProps[key])
                ? newProps[key]
                  ? 1
                  : 0.00001
                : newProps[key], // Animate to smaller size
              duration: newProps.duration,
              friction: newProps.friction,
              tension: newProps.tension,
            }
          )
          .start();
      }
    });
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            overflow: "hidden",
            opacity: this.state.animated_value,
          },
          this.props.style,
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
};

Fade.defaultProps = {
  animation: Animated.timing,
  duration: 250,
  friction: 5,
  tension: 20,
  animatedProps: ["value"],
};

module.exports = Fade;

/**
 * Created by kylejohnson on 14/11/2015.
 */

import propTypes from 'prop-types';
import ReactNative, { Animated, Easing } from 'react-native';
import React, { Component } from 'react';
import Animations from '../../../project/animations';

const textInputPropTypes = {
    onBlur: propTypes.func,
    title: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node,
    ]).isRequired,
    style: propTypes.any,
};

const TextInput = class extends Component {
  static displayName = 'TextInput';

  static propTypes = textInputPropTypes;

  constructor(props, context) {
      super(props, context);
      this.animation = new Animated.Value(0.0001);
  }

  clear = () => {
      this.inputRef.clear();
  };

  blur = () => {
      this.inputRef.blur();
  };

  focus = () => {
      this.inputRef.focus();
  };

  onFocus = () => {
      Animated.timing(this.animation, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true, // <-- Add this
          easing: Animations.standard,
      }).start();
      if (this.props.onFocus) {
          this.props.onFocus();
      }
  };

  onBlur = (e) => {
      Animated.timing(this.animation, {
          toValue: 0.0001,
          duration: 300,
          useNativeDriver: true, // <-- Add this
          easing: Easing.cubic,
      }).start();
      if (this.props.onBlur) {
          this.props.onBlur(e);
      }
  };

  onChangeText = (text) => {
      if (!this.props.onChangeText) {
          return;
      }
      this.props.onChangeText(text);
  };

  render() {
      // If you wanted animated shadows
      return (
          <>
              {this.props.title && (
              <FormGroup>
                  <Text style={Styles.inputLabel}>{this.props.title}</Text>
              </FormGroup>
              )}
              <ReactNative.TextInput
                {...this.props}
                onFocus={this.onFocus}
                editable={!this.props.disabled}
                onBlur={this.onBlur}
                onChangeText={this.onChangeText}
                style={[Styles.textInput, Styles.textInputAndroid, this.props.style]}
                value={this.props.value}
                testID={this.props.testID}
                ref={(ref) => this.inputRef = ref}
                blurOnSubmit={Platform.OS === 'ios' && !this.props.multiline}
              />
          </>
      );
  }
};

TextInput.propTypes = {};

TextInput.propTypes = {
    value: propTypes.string,
    placeholder: propTypes.string,
    editable: propTypes.bool,
    multiline: propTypes.bool,
    maxLines: propTypes.number,
    minLines: propTypes.number,
    onChangeText: propTypes.func,
    height: propTypes.number,
    style: propTypes.any,
    secureTextEntry: propTypes.bool,
    disabled: propTypes.bool,
    keyboardType: propTypes.string,
    onSubmit: propTypes.func,
    onFocus: propTypes.func,
    textStyle: propTypes.any,
    testID: propTypes.string,
};

// const styles = StyleSheet.create({
//
// });

export default TextInput;
export const FlatInput = (props) => (
    <TextInput {...props} style={[Styles.flatInput, props.style]} />
);
FlatInput.propTypes = textInputPropTypes;

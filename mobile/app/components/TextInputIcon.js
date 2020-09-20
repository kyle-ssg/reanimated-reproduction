import propTypes from 'prop-types';
import ReactNative, { Animated, Easing } from 'react-native';
import React, { Component } from 'react';

const textInputIconPropTypes = {
  onBlur: propTypes.func,
  title: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  style: propTypes.any,
};

const TextInputIcon = class extends Component {
  static displayName = 'TextInputIcon';

  static propTypes = textInputIconPropTypes;

  constructor(props, context) {
    super(props, context);
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
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  onBlur = (e) => {
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
        <View style={this.props.style}>
            {this.props.title && (
            <FormGroup>
                <Text style={Styles.textInputLabel}>{this.props.title}</Text>
            </FormGroup>
        )}
            <View>
                <ReactNative.TextInput
                  {...this.props}
                  onFocus={this.onFocus}
                  editable={!this.props.disabled}
                  onBlur={this.onBlur}
                  onChangeText={this.onChangeText}
                  style={[Styles.textInputIcon, Styles.textInputAndroid, this.props.style]}
                  value={this.props.value}
                  testID={this.props.testID}
                  ref={(ref) => this.inputRef = ref}
                  blurOnSubmit={Platform.OS === 'ios' && !this.props.multiline}
                  placeholderTextColor={this.props.placeholderTextColor}
                  selectionColor={this.props.selectionColor}
                >

                </ReactNative.TextInput>

                <Flex style={[Styles.textInputIconImage]}>
                    {this.props.icon}
                </Flex>

            </View>
        </View>
    );
  }
};

TextInputIcon.propTypes = {};

TextInputIcon.propTypes = {
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
  testID: propTypes.string,
  icon: propTypes.string,
  placeholderTextColor: propTypes.string,
  selectionColor: propTypes.string,
};

export default TextInputIcon;

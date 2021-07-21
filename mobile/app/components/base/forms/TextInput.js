/**
 * Created by kylejohnson on 14/11/2015.
 */

import propTypes from 'prop-types'
import ReactNative, { View, Platform } from 'react-native'
import React, { Component } from 'react'

const textInputPropTypes = {
  onBlur: propTypes.func,
  title: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  style: propTypes.any,
  textStyle: propTypes.any,
  icon: propTypes.any,
  multiline: propTypes.any,
  textAlignVertical: propTypes.any,
  isLight: propTypes.any,
  iconColour: propTypes.any,
}

const TextInput = class extends Component {
  static displayName = 'TextInput'

  static propTypes = textInputPropTypes

  constructor(props, context) {
    super(props, context)
    this.state = {
      secureTextEntry: props.secureTextEntry,
    }
  }

  clear = () => {
    this.inputRef.clear()
  }

  blur = () => {
    this.inputRef.blur()
  }

  focus = () => {
    this.inputRef.focus()
  }

  onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  onBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }

  onChangeText = (text) => {
    if (!this.props.onChangeText) {
      return
    }
    this.props.onChangeText(text)
  }

  render() {
    // If you wanted animated shadows
    return (
      <>
        {this.props.title && (
          <FormGroup>
            {this.props.isLight ? (
              <>
                <Text
                  style={[Styles.textInputTitleLight, this.props.textStyle]}
                >
                  {this.props.title}
                </Text>
              </>
            ) : (
              <Text style={[Styles.textInputTitleDark, this.props.textStyle]}>
                {this.props.title}
              </Text>
            )}
          </FormGroup>
        )}
        <View>
          <ReactNative.TextInput
            {...this.props}
            secureTextEntry={this.state.secureTextEntry}
            onFocus={this.onFocus}
            editable={!this.props.disabled}
            onBlur={this.onBlur}
            onChangeText={this.onChangeText}
            style={[
              Styles.textInput,
              this.props.style,
              this.props.invalid && Styles.textInputError,
            ]}
            value={this.props.value}
            testID={this.props.testID}
            ref={(ref) => (this.inputRef = ref)}
            blurOnSubmit={Platform.OS === 'ios' && !this.props.multiline}
            placeholderTextColor={
              this.props.invalid ? palette.danger : 'rgba(11,16,46,0.5)'
            }
            selectionColor={palette.primary}
            icon={this.props.icon}
            iconColour={this.props.icon}
            multiline={this.props.multiline}
            textAlignVertical={this.props.textAlignVertical}
          />
          {this.props.icon ? (
            <>
              <FA5Pro
                solid
                style={Styles.textInputIcon}
                name={this.props.icon}
                size={20}
                color={this.props.iconColour || palette.primary}
              />
            </>
          ) : null}

          {this.props.secureTextEntry ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({ secureTextEntry: !this.state.secureTextEntry })
              }
              style={[
                { position: 'absolute', width: 50, right: 0, height: 50 },
              ]}
            >
              <FA5Pro
                style={Styles.textInputIcon}
                name={this.state.secureTextEntry ? 'eye' : 'eye-slash'}
                size={20}
                color={palette.primary}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </>
    )
  }
}

TextInput.propTypes = {}

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
  testID: propTypes.string,
  placeholderTextColor: propTypes.string,
  selectionColor: propTypes.string,
}

// const styles = ReactNative.StyleSheet.create({
//
// });

export default TextInput
export const FlatInput = (props) => (
  <TextInput {...props} style={[Styles.flatInput, props.style]} />
)
FlatInput.propTypes = textInputPropTypes

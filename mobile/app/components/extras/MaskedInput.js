/**
 * Created by kylejohnson on 14/11/2015.
 */

import ReactNative, { Animated, Easing } from 'react-native'
import React, { PureComponent } from 'react'
import Animations from '../project/animations'
// import InputMask from 'inputmask-core';
const InputMask = () => Alert.alert('Please install input-mask-core')

const TextInput = class extends PureComponent {
  static displayName = 'TextInput'

  constructor(props, context) {
    super(props, context)
    this.animation = new Animated.Value(0.0001)
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
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true, // <-- Add this
      easing: Animations.standard,
    }).start()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  onBlur = (e) => {
    Animated.timing(this.animation, {
      toValue: 0.0001,
      duration: 300,
      useNativeDriver: true, // <-- Add this
      easing: Easing.cubic,
    }).start()
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }

  onChangeText = (text) => {
    if (!this.props.onChangeText) {
      return
    }
    if (this.props.mask) {
      // Masking
      if (!this.mask) {
        // Create new mask
        this.mask = new InputMask({
          pattern: this.props.mask,
          formatCharacters: {
            a: {
              validate(char) {
                return /[ap]/.test(char)
              },
            },
            m: {
              validate(char) {
                return /\w/.test(char)
              },
              transform() {
                return 'm'
              },
            },
          },
        })
      }

      if (text.length > this.mask.selection.start) {
        // Character(s) were typed, ignore if text exceeds length of mask
        if (this.mask.selection.start === this.props.mask.length) {
          return
        }

        // It does not, extract the character(s) that were added
        text = text.slice(this.mask.selection.start)

        // Add it to the input mask
        if (text.length > 1) {
          this.mask.paste(text)
        } else {
          // Perform additional inputs to skip non-pattern characters. Input will be converted
          // to the non-pattern character.
          while (
            !this.isMaskPatternChar(
              this.props.mask[this.mask.selection.start],
            ) &&
            this.mask.selection.start !== this.props.mask.length
          ) {
            // On failure abort loop as cursor position will not change
            if (!this.mask.input(text)) {
              break
            }
          }

          this.mask.input(text)
        }
      } else if (text.length < this.mask.selection.start) {
        // Character(s) were deleted, delete up to current length
        while (this.mask.selection.start !== text.length) {
          this.mask.backspace()
        }

        // Check whether more backspaces are required until we reach a pattern char or nothing is left
        while (
          this.mask.selection.start &&
          !this.isMaskPatternChar(
            this.props.mask[this.mask.selection.start - 1],
          )
        ) {
          this.mask.backspace()
        }
      }

      const value = this.mask.getValue().slice(0, this.mask.selection.start)
      // Update text
      this.props.onChangeText(value)
    } else {
      // No masking, just update text
      this.props.onChangeText(text)
    }
  }

  isMaskPatternChar(char) {
    if (!char || char.length !== 1) {
      return false
    }

    return (
      char === '1' ||
      char === 'a' ||
      char === 'A' ||
      char === '*' ||
      char === '#'
    )
  }

  render() {
    // If you wanted animated shadows
    return (
      <View>
        {this.props.title && (
          <FormGroup>
            <Text style={Styles.inputLabel}>{this.props.title}</Text>
          </FormGroup>
        )}
        <Animated.View>
          <ReactNative.TextInput
            {...this.props}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChangeText={this.onChangeText}
            style={[
              Styles.textInput,
              Styles.textInputAndroid,
              this.props.style,
            ]}
            value={this.props.value}
            testID={this.props.testID}
            ref={(ref) => (this.inputRef = ref)}
            blurOnSubmit={Platform.OS === 'ios'}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              marginTop: ReactNative.StyleSheet.hairlineWidth * 3,
              transform: [{ scaleX: this.animation }],
              backgroundColor: palette.bookmakerPrimary,
              height: ReactNative.StyleSheet.hairlineWidth * 6,
            },
          ]}
        />
      </View>
    )
  }
}


// const styles = ReactNative.StyleSheet.create({
//
// });

export default TextInput
export const FlatInput = (props) => (
  <TextInput {...props} style={[Styles.flatInput, props.style]} />
)

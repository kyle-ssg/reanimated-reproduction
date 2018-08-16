/**
 * Created by kylejohnson on 14/11/2015.
 */

import InputMask from 'inputmask-core';

import React, {Component, PropTypes} from 'react';

const TextInput = class extends Component {
    displayName: 'TextInput'

    componentWillMount() {
        this.animation = new Animated.Value(0)
    }

    clear = () => {
        this.refs.input.clear();
    };

    blur = () => {
        this.refs.input.blur();
    };

    focus = () => {
        this.refs.input.focus();
    };

    onFocus = () => {
        Animated.timing(this.animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true, // <-- Add this
            easing: Easing.cubic
        }).start();
        this.props.onFocus && this.props.onFocus();
    };

    onBlur = () => {
        Animated.timing(this.animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true, // <-- Add this
            easing: Easing.cubic
        }).start();
        this.props.onBlur && this.props.onBlur();
    };

    onChangeText = (text) => {
        if (this.props.mask) {
            // Masking
            if (!this.mask) {
                // Create new mask
                this.mask = new InputMask({
                    pattern: this.props.mask,
                    formatCharacters: {
                        'a': {
                            validate(char) {
                                return /[ap]/.test(char);
                            }
                        },
                        'm': {
                            validate(char) {
                                return /\w/.test(char);
                            },
                            transform() {
                                return 'm';
                            }
                        }
                    }
                });
            }

            if (text.length > this.mask.selection.start) {
                // Character(s) were typed, ignore if text exceeds length of mask
                if (this.mask.selection.start === this.props.mask.length) {
                    return;
                }

                // It does not, extract the character(s) that were added
                text = text.slice(this.mask.selection.start);

                // Add it to the input mask
                if (text.length > 1) {
                    this.mask.paste(text);
                }
                else {
                    // Perform additional inputs to skip non-pattern characters. Input will be converted
                    // to the non-pattern character.
                    while (!this.isMaskPatternChar(this.props.mask[this.mask.selection.start]) &&
                    this.mask.selection.start !== this.props.mask.length) {
                        // On failure abort loop as cursor position will not change
                        if (!this.mask.input(text)) {
                            break;
                        }
                    }

                    this.mask.input(text);
                }
            }
            else if (text.length < this.mask.selection.start) {
                // Character(s) were deleted, delete up to current length
                while (this.mask.selection.start != text.length)
                    this.mask.backspace();

                // Check whether more backspaces are required until we reach a pattern char or nothing is left
                while (this.mask.selection.start && !this.isMaskPatternChar(this.props.mask[this.mask.selection.start - 1])) {
                    this.mask.backspace();
                }
            }

            const value = this.mask.getValue().slice(0, this.mask.selection.start);
            console.log(value)
            // Update text
            this.props.onChangeText && this.props.onChangeText();
        }
        else {
            // No masking, just update text
            this.props.onChangeText && this.props.onChangeText(text);
        }
    }

    isMaskPatternChar(char) {
        if (!char || char.length !== 1) {
            return false;
        }

        return char === '1' || char === 'a' || char === 'A' || char === '*' || char === '#';
    }


    render() {
        return (
            <View>
                <ReactNative.TextInput
                    {...this.props}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}
                    style={[this.props.style, Styles.textInput]}
                    value={this.props.value}
                />
                <Animated.View style={[{
                    marginTop: -styleVariables.inputBorderWidth,
                    transform: [{scaleX: this.animation}],
                    backgroundColor: colour.activeBorder, height: 1 / PixelRatio.get() * 4
                }]}/>
            </View>
        );
    }
};

TextInput.propTypes = {};

TextInput.propTypes = {
    value: OptionalString,
    placeholder: OptionalString,
    editable: OptionalBool,
    multiline: OptionalBool,
    maxLines: OptionalNumber,
    minLines: OptionalNumber,
    mask: OptionalString,
    onChangeText: OptionalFunc,
    height: OptionalNumber,
    style: React.PropTypes.any,
    secureTextInput: OptionalBool,
    disabled: OptionalBool,
    keyboardType: OptionalBool,
    onSubmit: OptionalFunc,
    onFocus: OptionalFunc,
    textStyle: oneOfType([OptionalObject, OptionalNumber]),
};
module.exports = TextInput;
/**
 * Created by kylejohnson on 30/07/2016.
 */
import React from 'react';
import cn from 'classnames';
import InputMask from 'inputmask-core';

export class MaskedInput extends React.Component {
    static displayName = 'MaskedInput'

    constructor(props, context) {
        super(props, context);
        this.state = { shouldValidate: false };
    }

    onFocus = (e) => {
        this.setState({
            isFocused: true,
        });
        // eslint-disable-next-line no-unused-expressions
        this.props.onFocus && this.props.onFocus(e);
    }

    focus = () => {
        this.input.focus();
    }

    onKeyDown = (e) => {
        if (Utils.keys.isEscape(e)) {
            this.input.blur();
        }
        // eslint-disable-next-line no-unused-expressions
        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    validate = () => {
        this.setState({
            shouldValidate: true,
        });
    }

    onBlur = (e) => {
        this.setState({
            shouldValidate: true,
            isFocused: false,
        });
        // eslint-disable-next-line no-unused-expressions
        this.props.onBlur && this.props.onBlur(e);
    }

    onChange = (e) => {
        if (!this.props.onChange) {
            return;
        }
        let text = Utils.safeParseEventValue(e);
        if (this.props.mask) {
        // Masking
            if (!this.mask) {
                // Create new mask
                this.mask = new InputMask({
                    pattern: this.props.mask,
                    formatCharacters: {
                        a: {
                            validate(char) {
                                return /[ap]/.test(char);
                            },
                        },
                        m: {
                            validate(char) {
                                return /\w/.test(char);
                            },
                            transform() {
                                return 'm';
                            },
                        },
                    },
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
                } else {
                    // Perform additional inputs to skip non-pattern characters. Input will be converted
                    // to the non-pattern character.
                    while (
                        !this.isMaskPatternChar(
                            this.props.mask[this.mask.selection.start],
                        )
              && this.mask.selection.start !== this.props.mask.length
                    ) {
                        // On failure abort loop as cursor position will not change
                        if (!this.mask.input(text)) {
                            break;
                        }
                    }

                    this.mask.input(text);
                }
            } else if (text.length < this.mask.selection.start) {
                // Character(s) were deleted, delete up to current length
                while (this.mask.selection.start !== text.length) {
                    this.mask.backspace();
                }

                // Check whether more backspaces are required until we reach a pattern char or nothing is left
                while (
                    this.mask.selection.start
            && !this.isMaskPatternChar(
                this.props.mask[this.mask.selection.start - 1],
            )
                ) {
                    this.mask.backspace();
                }
            }

            const value = this.mask.getValue().slice(0, this.mask.selection.start);
            // Update text
            this.props.onChange(value);
        } else {
        // No masking, just update text
            this.props.onChange(text);
        }
    }

    isMaskPatternChar(char) {
        if (!char || char.length !== 1) {
            return false;
        }

        return (
            char === '1'
        || char === 'a'
        || char === 'A'
        || char === '*'
        || char === '#'
        );
    }

    render() {
        const { isValid, disableInputContainerClass, placeholderChar, inputClassName, ...rest } = this.props;

        const className = cn({
            'input-container': !disableInputContainerClass,
            'focused': this.state.isFocused,
            'invalid': this.state.shouldValidate && !isValid,
        }, this.props.className);

        const combinedInputClassName = cn({
            input: true,
        }, this.props.inputClassName);

        return (
            <div
              className={className}
            >
                <input
                  ref={c => this.input = c}
                  {...rest} onFocus={this.onFocus}
                  onKeyDown={this.onKeyDown}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  value={this.props.value}
                  className={combinedInputClassName}
                />
            </div>
        );
    }
}

MaskedInput.defaultProps = {
    className: '',
    placeholderChar: ' ',
    isValid: true,
};
global.MaskedInput = MaskedInput;
export default MaskedInput;

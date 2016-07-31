/**
 * Created by kylejohnson on 30/07/2016.
 */
import MaskedInput from 'react-maskedinput';

const Input = class extends React.Component {
    displayName:'Input'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    onFocus = (e) => {
        this.setState({
            isFocused: true
        });
        this.props.onFocus && this.props.onFocus(e);
    }

    onKeyDown = (e) => {
        if (Utils.keys.isEscape(e)) {
            this.refs.input.blur();
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    onBlur = (e) => {
        this.setState({
            isFocused: false
        });
        this.props.onBlur && this.props.onBlur(e);
    }

    render () {
        return (
            <div
                className={'input-container ' + this.props.className + (this.state.isFocused ? ' focused' : '')}>
                {this.props.mask ? (
                    <MaskedInput
                        ref="input"
                        {... this.props}
                        mask={this.props.mask}
                        formatCharacters={{
                            'a': {
                                validate(char) {
                                    return /[ap]/.test(char);
                                },
                            },
                            'm': {
                                validate(char) {
                                    return /\w/.test(char);
                                },
                                transform() {
                                    return 'm';
                                }
                            }
                        }}
                        onKeyDown={this.onKeyDown}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        className={'input ' + this.props.inputClassName}/>
                ) : (
                    <input
                        ref="input"
                        {... this.props} onFocus={this.onFocus}
                        onKeyDown={this.onKeyDown}
                        onBlur={this.onBlur}
                        className={'input ' + this.props.inputClassName}/>
                )}
                <hr/>
                <hr className="highlight"/>
            </div>
        );
    }
};

Input.defaultProps = {
    className: '',
};

Input.propTypes = {
    onKeyDown: OptionalFunc,
    onFocus: OptionalFunc,
    onBlur: OptionalFunc,
    placeholderChar: OptionalString,
    mask: OptionalString,
    className: OptionalString,
    inputClassName: OptionalString
};

module.exports = Input;
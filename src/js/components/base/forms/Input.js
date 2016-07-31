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

    onFocus = () => {
        this.setState({
            isFocused: true
        });
        this.props.onFocus && this.props.onFocus();
    }

    onBlur = () => {
        this.setState({
            isFocused: false
        });
        this.props.onBlur && this.props.onBlur();
    }

    render () {
        return (
            <div
                className={'input-container ' + this.props.className + (this.state.isFocused ? ' focused' : '')}>
                {this.props.mask ? (
                    <MaskedInput
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
                                transform() { return 'm'; }
                            }
                        }}
                        onFocus={this.onFocus} onBlur={this.onBlur} className={'input ' + this.props.inputClassName}/>
                ) : (
                    <input {... this.props} onFocus={this.onFocus} onBlur={this.onBlur}
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
    onFocus: OptionalFunc,
    onBlur: OptionalFunc,
    placeholderChar: OptionalString,
    mask: OptionalString,
    className: OptionalString,
    inputClassName: OptionalString
};

module.exports = Input;
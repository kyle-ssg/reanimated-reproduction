/**
 * Created by kylejohnson on 30/07/2016.
 */
import MaskedInput from 'react-maskedinput';
const maskedCharacters = {
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
};
const Input = class extends React.Component {
  displayName:'Input'

  constructor (props, context) {
    super(props, context);
    this.state = { shouldValidate: false };
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

  validate = () => {
    this.setState({
      shouldValidate: true
    });
  }

  onBlur = (e) => {
    this.setState({
      shouldValidate: true,
      isFocused: false
    });
    this.props.onBlur && this.props.onBlur(e);
  }

  render () {
    const className = cn({
      'input-container': true,
      'focused': this.state.isFocused,
      'invalid': this.state.shouldValidate && (typeof this.props.isValid !== 'undefined') && !this.props.isValid
    }, this.props.className);

    const inputClassName = cn({
      input: true
    }, this.props.inputClassName);

    const props = {isValid, onSearchChange, ... rest}

    return (
      <div
        className={className}>
        {this.props.mask ? (
          <MaskedInput
            ref="input"
            {... rest}
            mask={this.props.mask}
            formatCharacters={maskedCharacters}
            onKeyDown={this.onKeyDown}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={inputClassName}/>
        ) : (
          <input
            ref="input"
            {... rest} onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
            className={inputClassName}/>
        )}
        <hr/>
        <hr className="highlight"/>
      </div>
    );
  }
};

Input.defaultProps = {
  className: '',
  placeholderChar: ' '
};

Input.propTypes = {
  isValid: React.PropTypes.any,
  onKeyDown: OptionalFunc,
  onFocus: OptionalFunc,
  onBlur: OptionalFunc,
  placeholderChar: OptionalString,
  mask: OptionalString,
  className: React.PropTypes.any,
  inputClassName: OptionalString
};

module.exports = Input;

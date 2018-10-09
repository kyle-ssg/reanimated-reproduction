import React, { Component } from 'react';
import propTypes from 'prop-types';


class InputGroup extends Component {

  render() {
    const {
      props: {
        disabled,
        id = Utils.GUID(),
        inputProps,
        isValid,
        onChange,
        placeholder,
        title,
        value,
      },
    } = this;
    return (
      <div className="form-group">
        <label htmlFor={id} className="cols-sm-2 control-label">{title}</label>
        {inputProps && inputProps.error && (
          <span>
            <span> - </span>
            <span id={inputProps.name ? inputProps.name + "-error" : ''} className={"text-danger"}>
              {inputProps.error}
            </span>
          </span>
        )}

        <div>
          <div>
            <Input ref="input" {...inputProps}
                   isValid={isValid}
                   disabled={disabled}
                   value={value}
                   onChange={onChange}
                   id={id}
                   placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

window.InputGroup = InputGroup;

InputGroup.defaultProps = {};

InputGroup.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  id: propTypes.string,
  inputProps: propTypes.object,
  isValid: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  title: propTypes.string,
  value: propTypes.string,
};

export default InputGroup;

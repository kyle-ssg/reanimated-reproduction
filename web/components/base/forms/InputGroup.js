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
                inputGroupClassName,
                className,
            },
        } = this;

        return (
            <div className={`${className} form-group`}>
                {title ? (<label htmlFor={id} className="cols-sm-2">{title}</label>) : null}
                {inputProps && inputProps.error && (
                <span>
                    <span> - </span>
                    <span id={inputProps.name ? `${inputProps.name}-error` : ''} className="text-danger">
                        {inputProps.error}
                    </span>
                </span>
                )}

                <Input
                  ref="input"
                  {...inputProps}
                  isValid={isValid}
                  disabled={disabled}
                  value={value}
                  onChange={onChange}
                  id={id}
                  placeholder={placeholder}
                  className={inputGroupClassName}
                />
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

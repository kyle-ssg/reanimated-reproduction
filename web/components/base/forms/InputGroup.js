import React from 'react';
import propTypes from 'prop-types';

const InputGroup = window.InputGroup = ({
                    className,
                    disabled,
                    id = Utils.GUID(),
                    inputProps,
                    isValid,
                    onChange,
                    placeholder,
                    title,
                    value,
                }) => (
    <div className={"form-group"}>
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
                       placeholder={placeholder}/>
            </div>
        </div>
    </div>
);

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

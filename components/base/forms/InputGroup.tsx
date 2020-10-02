import React from 'react';
import Input from './Input';

interface InputGroup {
  inputProps?: {name?: string, id?: string, error?: string};
  className?: string;
  title?: string;
  component?: string;
  textarea?: boolean;
  isValid?: boolean;
  disabled?: string;
  value?: string;
  defaultValue?: string;
  onChange?: () => void;
  type?: string;
  placeholder?: string;
}

const InputGroup: React.FC<InputGroup> = ({ inputProps = {}, isValid, className, title, component, textarea, disabled, value, defaultValue, onChange, type, placeholder } ,props) => {
//   Should I use useRef to connect focus with input?
//   const focus = () => {
//     input.focus();
//   };

  const id = inputProps.id || inputProps.name || Utils.GUID();
  return (
      <div className={`form-group ${className}` || ""}>
          <label htmlFor={id} className="cols-sm-2 control-label">
              {title}
          </label>
          {inputProps && inputProps.error && (
          <span>
              <span> - </span>
              <span
                id={inputProps.name ? `${inputProps.name}-error` : ""}
                className="text-danger"
              >
                  {inputProps.error}
              </span>
          </span>
    )}

          <div>
              {component ? (
               component
      ) : (
          <div>
              {textarea ? (
                  <textarea
                    // ref={(c) => (this.input = c)}
                    {...props.inputProps}
                    isValid={isValid}
                    disabled={disabled}
                    value={value}
                    data-test={["data-test"]}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    type={type || "text"}
                    id={id}
                    placeholder={placeholder}
                  />
          ) : (
              <Input
                // ref={(c) => (this.input = c)}
                {...props.inputProps}
                isValid={isValid}
                disabled={disabled}
                value={value}
                data-test={["data-test"]}
                defaultValue={defaultValue}
                onChange={onChange}
                type={type || "text"}
                id={id}
                placeholder={placeholder}
              />
          )}
          </div>
      )}
          </div>
      </div>
  );
};

//I'm not sure how I should write that.
//global.InputGroup = InputGroup;
InputGroup.displayName = "InputGroup";
export default InputGroup;
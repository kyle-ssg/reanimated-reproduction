import React, { useState } from 'react';
import cn from "classnames";

interface Input {
  textarea?: boolean;
  isValid?: boolean;
  placeholderChar?: string;
  inputClassName?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
}

const Input: React.FC<Input> = ({ children, textarea, isValid = true, placeholderChar = " ", inputClassName, className, value, onFocus, onBlur, ...rest }) => {

  const [shouldValidate, setShouldValidate] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = (e: React.FocusEvent) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  // Is it element important? Should I use UseRef hook?
  // const focus = () => {
  //   this.input.focus();
  // };


  const onKeyDown = (e: React.KeyboardEvent) => {
    if (Utils.keys.isEscape(e)) {
      // this.input.blur();
    }
    onKeyDown && onKeyDown(e);
  };

  const validate = () => setShouldValidate(true);

  const blur = (e: React.FocusEvent) => {
    setShouldValidate(true);
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const classNameHandler = cn({ "input-container": true, focused: isFocused, invalid: shouldValidate && !isValid }, className);

  const combinedInputClassName = cn({ input: true }, inputClassName);

  return (
      <div className={classNameHandler}>
          {textarea ? (
              <textarea
                // Is it element important? Should I use UseRef hook?
                // ref={(c) => (this.input = c)}
                {...rest}
                onFocus={focusHandler}
                onKeyDown={onKeyDown}
                onBlur={blur}
                value={value}
                className={combinedInputClassName}
              />
    ) : (
        <input
          // Is it element important? Should I use UseRef hook?
          // ref={(c) => (this.input = c)}
          {...rest}
          onFocus={focusHandler}
          onKeyDown={onKeyDown}
          onBlur={blur}
          value={value}
          className={combinedInputClassName}
        />
    )}
          {children && children}
      </div>
  )
}
//I'm not sure what should do with this.
//global.Input = Input;
Input.displayName = "Input";
export default Input;

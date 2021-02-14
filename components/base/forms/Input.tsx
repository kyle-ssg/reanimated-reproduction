import React, { useRef, useState } from "react";
import cn from "classnames";

interface Input {
  textarea?: boolean;
  isValid?: boolean;
  placeholderChar?: string;
  inputClassName?: string;
  name?: string;
  className?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const Input: React.FC<Input> = ({ children,errorMessage,name,onKeyDown, textarea, isValid = true, placeholderChar = " ", inputClassName, className, value, onFocus, onBlur, ...rest }) => {

  const [shouldValidate, setShouldValidate] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement|HTMLTextAreaElement>();
  const focusHandler = (e: React.FocusEvent) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  // Is it element important? Should I use UseRef hook?
  // const focus = () => {
  //   this.input.focus();
  // };


  const _onKeyDown = (e: React.KeyboardEvent) => {
    if (Utils.keys.isEscape(e)) {
      ref.current.blur();
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

  const combinedInputClassName = cn({ input: true, error: !!errorMessage }, inputClassName);

  return (
      <div className={classNameHandler}>
          {textarea ? (
              <textarea
                name={name}
                {...rest}
                // @ts-ignore
                ref={ref}
                onFocus={focusHandler}
                onKeyDown={_onKeyDown}
                onBlur={blur}
                value={value}
                className={combinedInputClassName}
              />
    ) : (
        <input
          name={name}
          {...rest}
          // @ts-ignore
          ref={ref}
          onFocus={focusHandler}
          onKeyDown={_onKeyDown}
          onBlur={blur}
          value={value}
          className={combinedInputClassName}
        />
    )}
          {children && children}
      </div>
  )
}

global.Input = Input;
Input.displayName = "Input";
export default Input;

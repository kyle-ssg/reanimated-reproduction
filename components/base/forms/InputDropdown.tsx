import React, { useRef, useState } from 'react'
import cn from 'classnames'
import useOnClickOutside from '../useClickOutside'

interface InputDropdown {
  textarea?: boolean
  isValid?: boolean
  placeholderChar?: string
  inputClassName?: string
  name?: string
  label?: string
  deleteLabel?: boolean
  icon?: string
  type?: string
  textButton?: string
  className?: string
  show: boolean
  errorMessage?: string
  value?: string
  iconColour?: string
  onChange?: (e: React.ChangeEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  disabled?: boolean
  dropdownItem: (blur: () => void) => React.ReactChildren | React.ReactChild
}

const InputDropdown: React.FC<InputDropdown> = ({
  children,
  show,
  type,
  errorMessage,
  name,
  label,
  icon,
  textButton,
  onKeyDown,
  textarea,
  isValid = true,
  placeholderChar = ' ',
  inputClassName,
  className,
  value,
  onFocus,
  onBlur,
  iconColour,
  deleteLabel,
  disabled,
  dropdownItem,
  ...rest
}) => {
  const [shouldValidate, setShouldValidate] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>()
  const focusHandler = (e: React.FocusEvent) => {
    setIsFocused(true)
    onFocus && onFocus(e)
  }

  // Is it element important? Should I use UseRef hook?
  // const focus = () => {
  //   this.input.focus();
  // };

  const _onKeyDown = (e: React.KeyboardEvent) => {
    if (Utils.keys.isEscape(e)) {
      ref.current.blur()
    }
    onKeyDown && onKeyDown(e)
  }

  const validate = () => setShouldValidate(true)

  const blur = (e: React.FocusEvent) => {
    setShouldValidate(true)
    setIsFocused(false)
    onBlur && onBlur(e)
  }

  const blurRef = useRef()

  const classNameHandler = cn(
    {
      'input-container': true,
      focused: isFocused,
      invalid: shouldValidate && !isValid,
    },
    className,
  )
  useOnClickOutside(blurRef, blur)
  const combinedInputClassName = cn(
    { input: true, error: !!errorMessage },
    inputClassName,
  )
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div
      ref={blurRef}
      onFocus={focusHandler}
      data-test={`${name}-container`}
      className={classNameHandler}
    >
      <>
        <div className='row'>
          <div className='col'>
            {label ? <label htmlFor={name}>{label}</label> : null}
          </div>
        </div>
        <div className='dropdown'>
          <input
            {...(disabled ? disabled : null)}
            name={name}
            type={type === 'password' && showPassword ? '' : type}
            {...rest}
            // @ts-ignore
            ref={ref}
            onKeyDown={_onKeyDown}
            value={value}
            placeholder={placeholderChar}
            className={combinedInputClassName}
          />
          {isFocused && show && (
            <div
              className='dropdown-menu show'
              aria-labelledby='dropdownMenuButton'
            >
              <a className='dropdown-item' href='#'>
                {dropdownItem(() => setIsFocused(false))}
              </a>
            </div>
          )}
        </div>
      </>
      {children && children}
    </div>
  )
}

InputDropdown.displayName = 'InputDropdown'
export default InputDropdown

import React, { useRef, useState } from 'react'
import cn from 'classnames'
import { ButtonText } from 'components/base/forms/Button'

interface Input {
  textarea?: boolean
  isValid?: boolean
  placeholderChar?: string
  inputClassName?: string
  name?: string
  label?: string
  icon?: string
  type?: string
  textButton?: string
  className?: string
  errorMessage?: string
  iconColour?: string
  touched?: boolean
  value?: string
  onIconClick?: () => void
  deleteLabel?: React.ReactNode
  onChange?: (e: React.ChangeEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  disabled?: boolean
}

const Input: React.FC<Input> = ({
  children,
  className,
  deleteLabel,
  disabled,
  errorMessage,
  icon,
  iconColour,
  inputClassName,
  isValid = true,
  label,
  name,
  onBlur,
  onFocus,
  onIconClick,
  onKeyDown,
  placeholderChar = ' ',
  textButton,
  textarea,
  touched,
  type,
  value,
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

  const blur = (e: React.FocusEvent) => {
    setShouldValidate(true)
    setIsFocused(false)
    onBlur && onBlur(e)
  }

  const classNameHandler = cn(
    {
      'input-container': true,
      focused: isFocused,
      invalid: (shouldValidate || touched) && !isValid,
    },
    className,
  )

  const combinedInputClassName = cn(
    { input: true, error: !!errorMessage },
    inputClassName,
  )
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div data-test={`${name}-container`} className={classNameHandler}>
      {textarea ? (
        <>
          {label && <label htmlFor={name}>{label}</label>}
          <textarea
            name={name}
            placeholder={placeholderChar}
            {...rest}
            // @ts-ignore
            ref={ref}
            onFocus={focusHandler}
            onKeyDown={_onKeyDown}
            onBlur={blur}
            value={value}
            className={combinedInputClassName}
          />
        </>
      ) : (
        <>
          <div className='row'>
            <div className='col'>
              {!!label && <label htmlFor={name}>{label}</label>}
            </div>
            <div className='text-right mr-3'>
              {!!textButton && (
                <ButtonText className='btn__small'>{textButton}</ButtonText>
              )}
            </div>
          </div>
          <input
            disabled={disabled}
            name={name}
            type={type === 'password' && showPassword ? '' : type}
            {...rest}
            // @ts-ignore
            ref={ref}
            onFocus={focusHandler}
            onKeyDown={_onKeyDown}
            onBlur={blur}
            value={value}
            placeholder={placeholderChar}
            className={combinedInputClassName}
          />
          {icon ||
            (type == 'password' && (
              <i
                data-test={rest['data-test'] + '-icon'}
                onClick={() => {
                  if (type === 'password') {
                    setShowPassword(!showPassword)
                  } else {
                    onIconClick ? onIconClick() : ref?.current?.focus()
                  }
                }}
                style={{
                  position: 'absolute',
                  right: 10,
                  bottom: 10,
                  color: iconColour || '#F7A400',
                  cursor: 'pointer',
                }}
                className={cn(
                  {
                    icon: true,
                    'fas fa-eye': type === 'password' && !showPassword,
                    'fas fa-eye-slash': type === 'password' && showPassword,
                  },
                  icon,
                )}
              />
            ))}
        </>
      )}
      {children && children}
    </div>
  )
}

global.Input = Input
Input.displayName = 'Input'
export default Input

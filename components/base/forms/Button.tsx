import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

export type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: string
}

//Default Button without any styles
export const Button: FC<ButtonType> = ({
  icon,
  className,
  children,
  onMouseUp,
  ...rest
}) => (
  <button
    type='button'
    {...rest}
    onMouseUp={onMouseUp}
    className={cn({ btn: true }, className)}
  >
    {children}

    {icon ? <i className={cn({ icon: true }, 'p-1', icon)} /> : null}
  </button>
)

Button.displayName = 'Button'
export default Button

export const ButtonText: FC<ButtonType> = ({ className, ...props }) => (
  <Button {...props} className={cn(className, 'btn-link')} />
)

/** Default button added btn-primary * */
export const ButtonPrimary: FC<ButtonType> = ({ className, ...props }) => (
  <Button {...props} className={cn(className, 'btn-primary')} />
)

ButtonPrimary.displayName = 'ButtonPrimary'

/** Default button added btn-secondary * */
export const ButtonSecondary: FC<ButtonType> = ({ className, ...props }) => (
  <Button {...props} className={cn(className, 'btn-secondary')} />
)

ButtonSecondary.displayName = 'ButtonSecondary'

export const ButtonDanger: FC<ButtonType> = ({ className, ...props }) => (
  <Button {...props} className={cn(className, 'btn btn-danger')} />
)
ButtonDanger.displayName = 'ButtonDanger'

/** Default button added btn-outline-primary * */
export const ButtonOutlinePrimary: FC<ButtonType> = ({
  className,
  ...props
}) => <Button {...props} className={cn(className, 'btn btn-outline-primary')} />

ButtonOutlinePrimary.displayName = 'ButtonOutlinePrimary'

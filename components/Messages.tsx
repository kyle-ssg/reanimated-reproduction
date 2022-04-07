import cn from 'classnames'
import { FC } from 'react'

interface Messages {
  /** The error message to be displayed, replaces \n */
  className?: string
  icon?: string
  'data-test'?: string
}

//Generic error message
const Message: FC<Messages> = ({
  'data-test': dataTest,
  children,
  className,
  icon,
}) => {
  if (!children) {
    return null
  }

  return (
    <>
      <div data-test={dataTest} className={`alert ${className || ''}`}>
        <div className='flex-row'>
          {icon && <span className={cn({ icon: true }, 'me-3', icon)} />}
          <span data-test='message'>
            {typeof children === 'string'
              ? children.replace(/\n/g, '')
              : 'Error processing request'}
          </span>
        </div>
      </div>
    </>
  )
}

//Default message added alert-danger
export const ErrorMessage: FC<Messages> = ({ className, ...props }) => (
  <Message
    {...props}
    icon={props.icon || 'fas fa-exclamation-circle'}
    className={cn(className, 'alert-danger')}
  />
)

// Default message added alert-success
export const SuccessMessage: FC<Messages> = ({ className, ...props }) => (
  <Message {...props} className={cn(className, 'alert-success')} />
)

Message.displayName = 'ErrorMessage'
export default Message

import React from 'react'
import cn from 'classnames'

interface Messages {
  /** The error message to be displayed, replaces \n */
  className?: string
  children?: React.ReactNode
  icon?: string
  'data-test'?: string
}

//Generic error message
const Message: React.FC<Messages> = ({
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
      {/*<div className={`alert mt-1 mb-1 ${className || ""}`}>*/}
      {/*    {typeof children === "string"*/}
      {/*    ? children.replace(/\n/g, "")*/}
      {/*    : "Error processing request"}*/}
      {/*</div>*/}
      <div data-test={dataTest} className={`alert ${className || ''}`}>
        <div className='flex-row'>
          {icon && <span className={cn({ icon: true }, "mr-1", icon)} />}
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
export const ErrorMessage: React.FC<Messages> = ({ className, ...props }) => (
  <Message
    {...props}
    icon={props.icon || 'fas fa-exclamation-circle'}
    className={cn(className, 'alert-danger')}
  />
)

// Default message added alert-success
export const SuccessMessage: React.FC<Messages> = ({ className, ...props }) => (
  <Message {...props} className={cn(className, 'alert-success')} />
)

global.ErrorMessage = ErrorMessage
global.SuccessMessage = SuccessMessage

Message.displayName = 'ErrorMessage'
export default Message

import React from 'react';
import cn from "classnames";

interface Messages {
  /** The error message to be displayed, replaces \n */
  className?: string,
  children?: React.ReactNode;
}

//Generic error message
const Message: React.FC<Messages> = ({ children, className }) => {
  if (!children) {return null}

  return (
      <div className={`alert mt-1 mb-1 ${className || ""}`}>
          {typeof children === "string"
          ? children.replace(/\n/g, "")
          : "Error processing request"}
      </div>
  )
};

//Default message added alert-danger
export const ErrorMessage: React.FC<Messages> = ({ className, ...props }) => <Message {...props} className={cn(className, "alert-danger")} />


// Default message added alert-success
export const SuccessMessage: React.FC<Messages> = ({ className, ...props }) => <Message {...props} className={cn(className, "alert-success")} />

global.ErrorMessage = ErrorMessage;
global.SuccessMessage = SuccessMessage;

Message.displayName = "ErrorMessage";
export default Message;

import React, { PureComponent } from "react";
import propTypes from "prop-types";
import cn from "classnames";

const _propTypes = {
  /** The error message to be displayed, replaces \n */
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

/**
 * Generic error message
 */
export class Message extends PureComponent {
  static displayName = "ErrorMessage";

  static propTypes = _propTypes;

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
        <div className={`alert mt-1 mb-1 ${this.props.className || ""}`}>
            {typeof this.props.children === "string"
          ? this.props.children.replace(/\n/g, "")
          : "Error processing request"}
        </div>
    );
  }
}

/** Default message added alert-danger * */
export class ErrorMessage extends React.PureComponent {
  static propTypes = _propTypes;

  render() {
    const { props } = this;
    return (
        <Message {...props} className={cn(props.className, "alert-danger")} />
    );
  }
}

/** Default message added alert-success * */
export class SuccessMessage extends React.PureComponent {
  static propTypes = _propTypes;

  render() {
    const { props } = this;
    return (
        <Message {...props} className={cn(props.className, "alert-success")} />
    );
  }
}

global.ErrorMessage = ErrorMessage;
global.SuccessMessage = SuccessMessage;

export default Message;
